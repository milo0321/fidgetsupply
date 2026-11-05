const fs = require('fs');
const path = require('path');
const sharp = require('/Users/player/code/cms-geteie/node_modules/sharp');

const WORKSPACE = '/Users/player/code/fidgetsupply';
const SUMMARY_PATH = path.join(WORKSPACE, 'src/data/catalog_raw_summary.json');
const OUT_IMG_DIR = path.join(WORKSPACE, 'public/images/products');
const CONTENT_PRODUCTS_DIR = path.join(WORKSPACE, 'src/content/products');

async function smartSeamless4x3(src, out) {
  const W = 800;
  const H = 600;
  const meta = await sharp(src).metadata();
  const ratio = meta.width / meta.height;

  // Check if white background cutout
  const { data: rawData, info: rawInfo } = await sharp(src)
    .raw()
    .toBuffer({ resolveWithObject: true });
  const ch = rawInfo.channels;
  const pts = [
    [2, 2],
    [rawInfo.width - 3, 2],
    [2, rawInfo.height - 3],
    [rawInfo.width - 3, rawInfo.height - 3],
    [Math.floor(rawInfo.width / 2), 2],
    [Math.floor(rawInfo.width / 2), rawInfo.height - 3]
  ];
  let whitePts = 0;
  for (const [x, y] of pts) {
    const idx = (y * rawInfo.width + x) * ch;
    const r = rawData[idx];
    const g = rawData[idx + 1];
    const b = rawData[idx + 2];
    const a = ch === 4 ? rawData[idx + 3] : 255;
    if (a < 30 || (r > 240 && g > 240 && b > 240)) whitePts++;
  }

  if (whitePts >= 5) {
    // White-background cutout: trim excess whitespace, fit nicely inside 700x520, then pad to 800x600 pure white canvas
    const trimmed = await sharp(src)
      .trim({ threshold: 14 })
      .toBuffer()
      .catch(() => fs.readFileSync(src));

    const innerBuf = await sharp(trimmed)
      .resize(700, 520, {
        fit: 'contain',
        background: { r: 255, g: 255, b: 255, alpha: 1 }
      })
      .toBuffer();

    await sharp(innerBuf)
      .extend({
        top: 40,
        bottom: 40,
        left: 50,
        right: 50,
        background: { r: 255, g: 255, b: 255, alpha: 1 }
      })
      .webp({ quality: 84, effort: 4 })
      .toFile(out);
    return;
  }

  // If aspect ratio is already close to 4:3 (1.18 <= ratio <= 1.48), direct cover fits 100% edge-to-edge cleanly
  if (ratio >= 1.18 && ratio <= 1.48) {
    await sharp(src)
      .resize(W, H, { fit: 'cover', position: 'centre' })
      .webp({ quality: 84, effort: 4 })
      .toFile(out);
    return;
  }

  // For wide (ratio > 1.48) or tall/square (ratio < 1.18) tabletop photos:
  // Gentle 6% long-axis trim + seamless edge-copy + Gaussian blur + 24px cosine-feathered blend
  let targetW = W;
  let targetH = H;
  if (ratio > 1.48) {
    targetW = Math.round(W * 1.06);
  } else {
    targetH = Math.round(H * 1.06);
  }

  const resized = await sharp(src)
    .resize(targetW, targetH, { fit: 'inside' })
    .extract({
      left: Math.max(0, Math.floor(((ratio > 1.48 ? targetW : Math.round(targetH * ratio)) - W) / 2)),
      top: Math.max(0, Math.floor(((ratio <= 1.48 ? targetH : Math.round(targetW / ratio)) - H) / 2)),
      width: Math.min(W, ratio > 1.48 ? targetW : Math.round(targetH * ratio)),
      height: Math.min(H, ratio <= 1.48 ? targetH : Math.round(targetW / ratio))
    })
    .toBuffer({ resolveWithObject: true })
    .catch(async () => sharp(src).resize(W, H, { fit: 'inside' }).toBuffer({ resolveWithObject: true }));

  const fw = resized.info.width;
  const fh = resized.info.height;
  const padLeft = Math.floor((W - fw) / 2);
  const padRight = W - fw - padLeft;
  const padTop = Math.floor((H - fh) / 2);
  const padBottom = H - fh - padTop;

  if (padLeft === 0 && padRight === 0 && padTop === 0 && padBottom === 0) {
    await sharp(resized.data).webp({ quality: 84, effort: 4 }).toFile(out);
    return;
  }

  const bgBuf = await sharp(resized.data)
    .extend({
      top: padTop,
      bottom: padBottom,
      left: padLeft,
      right: padRight,
      extendWith: 'copy'
    })
    .blur(22)
    .toBuffer();

  const feather = 24;
  const maskRaw = Buffer.alloc(fw * fh * 4, 255);
  for (let y = 0; y < fh; y++) {
    for (let x = 0; x < fw; x++) {
      let ax = 1.0;
      let ay = 1.0;
      if (padLeft > 2 && x < feather) ax = 0.5 * (1 - Math.cos((Math.PI * x) / feather));
      else if (padRight > 2 && x >= fw - feather) ax = 0.5 * (1 - Math.cos((Math.PI * (fw - 1 - x)) / feather));
      if (padTop > 2 && y < feather) ay = 0.5 * (1 - Math.cos((Math.PI * y) / feather));
      else if (padBottom > 2 && y >= fh - feather) ay = 0.5 * (1 - Math.cos((Math.PI * (fh - 1 - y)) / feather));
      const a = Math.round(255 * Math.min(ax, ay));
      maskRaw[(y * fw + x) * 4 + 3] = a;
    }
  }
  const maskPng = await sharp(maskRaw, { raw: { width: fw, height: fh, channels: 4 } }).png().toBuffer();
  const featheredFg = await sharp(resized.data)
    .ensureAlpha()
    .composite([{ input: maskPng, blend: 'dest-in' }])
    .toBuffer();

  await sharp(bgBuf)
    .composite([{ input: featheredFg, top: padTop, left: padLeft }])
    .webp({ quality: 84, effort: 4 })
    .toFile(out);
}

async function main() {
  fs.mkdirSync(OUT_IMG_DIR, { recursive: true });
  fs.mkdirSync(CONTENT_PRODUCTS_DIR, { recursive: true });

  const data = JSON.parse(fs.readFileSync(SUMMARY_PATH, 'utf8'));
  const pdps = data.pdps;

  console.log(`Normalizing all product images for ${pdps.length} PDPs to seamless 800x600 (4:3) WebP...`);

  for (const pdp of pdps) {
    const skuLower = pdp.sku.toLowerCase();
    const mediaList = pdp.excelMedia || [];
    const webpUrls = [];

    for (let i = 0; i < mediaList.length; i++) {
      const mfile = path.basename(mediaList[i]);
      const srcPath = path.join('/tmp/fidget_media', mfile);
      const outName = i === 0 ? `${skuLower}.webp` : `${skuLower}-${i + 1}.webp`;
      const outPath = path.join(OUT_IMG_DIR, outName);

      if (fs.existsSync(srcPath)) {
        await smartSeamless4x3(srcPath, outPath);
        webpUrls.push(`/images/products/${outName}`);
      } else if (fs.existsSync(outPath)) {
        webpUrls.push(`/images/products/${outName}`);
      }
    }

    pdp.featuredImage = webpUrls[0] || `/images/products/${skuLower}.webp`;
    pdp.galleryImages = webpUrls;

    const metaTitle = `${pdp.sku} ${pdp.title} Wholesale | FidgetSupply`
      .slice(0, 59)
      .trim();
    const metaDescription = `Wholesale ${pdp.sku} ${pdp.title} (${pdp.material.split('/')[0].trim()}, ${pdp.weight}). $0 tooling fee, MOQ 50 pcs blank or 100 pcs custom laser/UV logo.`
      .slice(0, 154)
      .trim();

    const overview = `${pdp.skuDisplay} ${pdp.title} is an industrial-grade B2B metal EDC fidget engineered from ${pdp.material} (${pdp.size}, net weight ${pdp.weight}). Equipped with ${pdp.magnetsEn} and ${pdp.accessoriesEn}, this model utilizes our mature ready-to-use production mold ($0 Tooling Cost) across our integrated China precision metalworking & CNC supply chain network. Available for immediate blank wholesale (MOQ 50 pcs) or custom corporate surface branding via Fiber Laser Engraving and UV Color Printing (MOQ 100 pcs).`;

    const specs = {
      "Factory SKU Code": pdp.skuDisplay,
      "Original Mold Reference": `#${String(pdp.rowId).padStart(3, '0')} (${pdp.zhName})`,
      "Body Material": pdp.material,
      "Dimensions (L × W × H)": pdp.size,
      "Net Unit Weight": pdp.weight,
      "Magnet Configuration": pdp.magnetsEn,
      "Internal Hardware & Bearings": pdp.accessoriesEn,
      "Standard Surface Finishes": pdp.colorsEn,
      "Tooling / Mold Fee": "$0.00 (Mature Ready Production Mold)",
      "Wholesale MOQ": "50 pcs (Blank Stock) / 100 pcs (Custom Laser or UV Logo)",
      "Custom Branding Methods": pdp.logoReady
        ? "Logo-Ready Flat Surface: Fiber Laser Engraving / UV Color Print / Pad Print"
        : "Precision Edge Fiber Laser Engraving / Custom Branded EVA Zipper Case",
      "Safety Compliance": "US CPSC 16 CFR 1262 Locked-Magnet Enclosure, RoHS & REACH Compliant"
    };

    const features = [
      `Zero Tooling Cost ($0 Mold Fee): Ready-to-produce factory mold #${pdp.rowId} eliminates $2,500+ custom CNC/die-casting tooling expenses.`,
      `Verified Tactile & Acoustic Engineering: Built with ${pdp.magnetsEn} and ${pdp.accessoriesEn} for repeatable crisp haptic feedback.`,
      `CPSC 16 CFR 1262 Magnet Retention: Internal mechanical screw/structural lock prevents neodymium magnet detachment under heavy drop tests.`,
      `Turnkey B2B Branding & Packaging: Supports Fiber Laser Engraving, UV Color Printing, custom EVA zipper pouches, and Amazon FBA barcode labeling.`
    ];

    const faqs = [
      {
        question: `What is the minimum order quantity (MOQ) and tooling cost for ${pdp.skuDisplay} ${pdp.title}?`,
        answer: `Because ${pdp.skuDisplay} utilizes our mature ready-to-use production mold (#${pdp.rowId}), the tooling and mold fee is $0.00. The wholesale MOQ is 50 pcs for blank stock orders and 100 pcs for custom Fiber Laser Engraved or UV Color Printed logo orders.`
      },
      {
        question: `Can we customize our corporate or brand logo on ${pdp.skuDisplay}?`,
        answer: pdp.logoReady
          ? `Yes. ${pdp.skuDisplay} is designated as a Logo-Ready model with an optimal flat surface area for permanent 50W MOPA Fiber Laser Engraving (+$0.18/pc), full-color CMYK+W 3D UV Printing (+$0.40/pc), or Pad Printing, plus custom logo EVA zipper cases or window tin boxes.`
          : `Yes. While ${pdp.skuDisplay} features 3D mechanical/relief contours on the main body, we support precision Fiber Laser serial/logo marking on the side/back bevels as well as custom debossed Black EVA zipper cases (+$0.75/pc) and retail gift boxes.`
      },
      {
        question: `How are the magnets and hardware secured inside ${pdp.skuDisplay} for US CPSC 16 CFR 1262 compliance?`,
        answer: `All magnetic and mechanical assemblies (${pdp.magnetsEn}; ${pdp.accessoriesEn}) are structurally enclosed or mechanically locked using industrial two-part structural epoxy (>22 MPa shear strength) and thread-locked fasteners, passing 10× 1.5m concrete drop abuse tests under US CPSC 16 CFR Part 1262 and EU RoHS 3 / REACH directives.`
      },
      {
        question: `What materials and surface finishes are available for ${pdp.skuDisplay}?`,
        answer: `${pdp.skuDisplay} is manufactured from ${pdp.material} with net unit weight of ${pdp.weight} and dimensions of ${pdp.size}. Standard factory finishes include ${pdp.colorsEn}. Custom Pantone electroplating, PVD coating, or sandblasted anodizing is available at 300+ pcs.`
      },
      {
        question: `How does volume tiered wholesale pricing work for ${pdp.skuDisplay}?`,
        answer: `We offer transparent 3-tier factory-direct pricing for ${pdp.skuDisplay}: $${pdp.tier50}/pc for 50–199 pcs (Blank Trial / Custom Logo Starter), $${pdp.tier200}/pc for 200–499 pcs (Standard B2B Tier), and $${pdp.tier500}/pc for 500+ pcs (Volume Distributor Tier). Multi-SKU mixed orders can be consolidated.`
      },
      {
        question: `What internal magnet grade and bearing hardware does ${pdp.skuDisplay} use?`,
        answer: `${pdp.skuDisplay} is engineered with ${pdp.magnetsEn} and ${pdp.accessoriesEn}. Every unit undergoes 100% tactile snap-force calibration and acoustic resonance testing before packing.`
      },
      {
        question: `Can we order a physical sample of ${pdp.skuDisplay} before placing a bulk order?`,
        answer: `Yes. You can order ${pdp.skuDisplay} via our curated B2B Evaluation Sample Kits ($49 / $79 / $129 shipped via DHL/FedEx in 48 hours), or request a custom laser/UV pre-production sample proof in 3–5 business days. 100% of the sample kit fee is credited back on bulk orders of 200+ pcs.`
      },
      {
        question: `What retail and Amazon FBA packaging options fit ${pdp.skuDisplay} (${pdp.size})?`,
        answer: `Beyond standard protective polybag/bubble-wrap packing, we offer three turnkey upgrades for ${pdp.skuDisplay}: (1) Custom Logo Black Shockproof EVA Zipper Case (+$0.75/pc, MOQ 100 pcs), (2) Window Metal Tin Box with custom die-cut EVA foam insert (+$0.85/pc, MOQ 200 pcs), and (3) Two-Piece Rigid Magnetic Gift Box (+$1.10/pc, MOQ 300 pcs). Free Amazon FNSKU barcode & 14+ safety warning labels are included.`
      },
      {
        question: `What is the production lead time and DDP shipping schedule for ${pdp.skuDisplay}?`,
        answer: `Blank stock orders (50+ pcs) dispatch within 3–5 business days. Custom Fiber Laser or UV Logo orders (100+ pcs) complete production in 7–10 business days. All shipments are consolidated at our Fuzhou Industrial Zone, Fujian Export Logistics Hub with turnkey DDP Air Express (5–7 days) or DDP Ocean Freight (20–28 days) to the US, EU, UK, and Australia.`
      },
      {
        question: `What quality control (QC) and spare parts are included with bulk orders of ${pdp.skuDisplay}?`,
        answer: `Every bulk batch of ${pdp.skuDisplay} undergoes strict AQL 2.5 pre-shipment inspection covering surface finish, laser logo alignment, magnet polarity lock, and drop endurance. For PTFE/bearing models, we include complimentary spare PTFE wear pads, ceramic/steel detent beads, and M2 fasteners.`
      }
    ];

    const productJson = {
      ...pdp,
      category: pdp.primaryCollection,
      badge: pdp.logoReady
        ? "Logo-Ready Mold"
        : pdp.tuningFork
          ? "Acoustic Tuning Fork"
          : pdp.cncExotic
            ? "CNC Exotic Metal"
            : "Ready Mold $0 Tooling",
      sampleTime: "3–5 Days",
      metaTitle,
      metaDescription,
      overview,
      specs,
      features,
      faqs
    };

    fs.writeFileSync(
      path.join(CONTENT_PRODUCTS_DIR, `${pdp.slug}.json`),
      JSON.stringify(productJson, null, 2),
      'utf8'
    );
  }

  // Also normalize the 4 showcase photos in ~/ruixing/supplier/解压
  const factoryImgDir = path.join(WORKSPACE, 'public/images/factory');
  fs.mkdirSync(factoryImgDir, { recursive: true });
  const jieyaDir = '/Users/player/ruixing/supplier/解压';
  if (fs.existsSync(jieyaDir)) {
    const jfiles = fs.readdirSync(jieyaDir).filter(f => f.endsWith('.png') || f.endsWith('.jpg'));
    for (let i = 0; i < jfiles.length; i++) {
      await smartSeamless4x3(path.join(jieyaDir, jfiles[i]), path.join(factoryImgDir, `showcase-${i + 1}.webp`));
    }
  }

  fs.writeFileSync(
    path.join(WORKSPACE, 'src/data/catalog_140.json'),
    JSON.stringify(pdps, null, 2),
    'utf8'
  );

  console.log(`Successfully normalized all ${pdps.length} product image sets to seamless 4:3 WebP!`);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
