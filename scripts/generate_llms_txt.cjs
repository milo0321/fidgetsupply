#!/usr/bin/env node
/**
 * Deterministic Generator for public/llms.txt and public/llms-full.txt
 * Follows the llmstxt.org GEO standard to expose FidgetSupply.com's complete
 * 140 Ready-Mold SKU Catalog, 9 Category Hubs, 39 Engineering & Sourcing Guides,
 * 100% Ready-Mold Light Customization SOP ($0 Tooling Fee), and CNC/Lab QC Standards
 * to ChatGPT/SearchGPT, Claude, Perplexity, Google AI Overviews, and Gemini.
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const PRODUCTS_DIR = path.join(ROOT, 'src/content/products');
const INSIGHTS_DIR = path.join(ROOT, 'src/content/insights');
const PUBLIC_DIR = path.join(ROOT, 'public');

function parseFrontmatterAndBody(mdContent) {
  const match = mdContent.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) return { data: {}, body: mdContent };
  const fmRaw = match[1];
  const body = match[2];
  const data = {};
  for (const line of fmRaw.split(/\r?\n/)) {
    const m = line.match(/^([A-Za-z0-9_]+):\s*(.*)$/);
    if (m) {
      const key = m[1];
      let val = m[2].trim();
      if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
        val = val.slice(1, -1);
      } else if (val.startsWith('[') && val.endsWith(']')) {
        try {
          val = JSON.parse(val);
        } catch {
          // keep raw
        }
      }
      data[key] = val;
    }
  }
  return { data, body };
}

function htmlToCleanMarkdown(html) {
  return html
    .replace(/<figure[\s\S]*?<\/figure>/gi, '')
    .replace(/<div class="sourcing-cta-box">[\s\S]*?<\/div>/gi, '')
    .replace(/<h2[^>]*>([\s\S]*?)<\/h2>/gi, '\n#### $1\n')
    .replace(/<h3[^>]*>([\s\S]*?)<\/h3>/gi, '\n##### $1\n')
    .replace(/<li[^>]*>([\s\S]*?)<\/li>/gi, '- $1\n')
    .replace(/<\/tr>/gi, '\n')
    .replace(/<\/t[hd]>\s*<t[hd][^>]*>/gi, ' | ')
    .replace(/<p[^>]*>([\s\S]*?)<\/p>/gi, '$1\n\n')
    .replace(/<[^>]+>/g, '')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

function main() {
  // 1. Load all 140 Products sorted by rowId
  const products = fs
    .readdirSync(PRODUCTS_DIR)
    .filter((f) => f.endsWith('.json'))
    .map((f) => JSON.parse(fs.readFileSync(path.join(PRODUCTS_DIR, f), 'utf8')))
    .sort((a, b) => a.rowId - b.rowId);

  // 2. Load all 39 Insights
  const insights = fs
    .readdirSync(INSIGHTS_DIR)
    .filter((f) => f.endsWith('.md'))
    .sort()
    .map((f) => {
      const raw = fs.readFileSync(path.join(INSIGHTS_DIR, f), 'utf8');
      const { data, body } = parseFrontmatterAndBody(raw);
      return {
        slug: data.slug || f.replace(/\.md$/, ''),
        title: data.title || '',
        category: data.category || '',
        readTime: data.readTime || '',
        publishDate: data.publishDate || '',
        updatedDate: data.updatedDate || '',
        summary: data.summary || '',
        relatedSkus: Array.isArray(data.relatedSkus) ? data.relatedSkus : [],
        cleanBody: htmlToCleanMarkdown(body)
      };
    });

  // 3. Collection definitions
  const collections = [
    {
      num: 1,
      slug: 'magnetic-fidget-sliders',
      name: 'Magnetic Haptic Sliders Wholesale',
      skuCount: 54,
      priceRange: '$1.70 – $43.90',
      moq: '50 pcs (Blank) / 100 pcs (Logo)',
      summary: '54 ready-to-produce molds covering Dual-Layer Poker Sliders, Triple-Layer 32-Magnet Track Sliders, PTFE Unlimited-Direction Free-Floating Sliders, and CNC Stainless Acoustic Sliders ($0 Tooling Cost).'
    },
    {
      num: 2,
      slug: 'mechanical-edc-fidgets',
      name: 'Multi-Action Mechanical EDC Fidgets',
      skuCount: 35,
      priceRange: '$2.30 – $470.00',
      moq: '50 pcs (Blank) / 100 pcs (Logo)',
      summary: '35 complex mechanical EDC assemblies integrating coil springs, torsion springs, Si3N4 ceramic detent balls, planetary gears, and R188 bearings—including Ratchet Sliders, Bolt-Action Breech Sliders, and Sword Sliders.'
    },
    {
      num: 3,
      slug: 'metal-fidget-spinners-gyros',
      name: 'Metal Fidget Spinners & Desktop Gyros',
      skuCount: 25,
      priceRange: '$0.75 – $54.90',
      moq: '50 pcs (Blank) / 100 pcs (Logo)',
      summary: '25 kinetic rotational instruments engineered around removable oil-free R188 stainless/hybrid-ceramic bearings (3–6 minute spin times), 6-axis CNC gimbal gyroscopes, and anodized aluminum spinning desk eggs.'
    },
    {
      num: 4,
      slug: 'edc-gourds-hand-pieces',
      name: 'EDC Hand Pieces, Gourds & Capsules',
      skuCount: 11,
      priceRange: '$3.50 – $382.00',
      moq: '50 pcs (Blank) / 100 pcs (Logo)',
      summary: '11 ergonomic 5-axis CNC turned pocket gourds (Hulu), magnetic twist capsules, and knuckle rollers crafted from 6063 Aluminum, 304 Stainless Steel, Amber PEI (Ultem), Brass, and Zr702 Zirconium.'
    },
    {
      num: 5,
      slug: 'haptic-fidget-coins',
      name: 'Metal Haptic Fidget Coins & Clickers',
      skuCount: 10,
      priceRange: '$2.20 – $22.50',
      moq: '50 pcs (Blank) / 100 pcs (Logo)',
      summary: '10 rotational 12-magnet haptic coins and spring-detent clicker medallions—including 304 Stainless Steel Coins (FS-013), Automotive Wheel Rim Coins (FS-030/031), Sandwich Cookie Coins (FS-027), and Arcade Maze Coins (FS-138).'
    },
    {
      num: 6,
      slug: 'magnetic-fidget-rings',
      name: 'Mechanical & Magnetic Spinner Rings',
      skuCount: 5,
      priceRange: '$2.10 – $23.50',
      moq: '50 pcs (Blank) / 100 pcs (Logo)',
      summary: '5 wearable 16-magnet and mechanical ratchet spinner rings engineered from CNC 304 Stainless Steel, Brass, and 6063 Anodized Aluminum for sub-35 dBA silent office and ADHD focus.'
    },
    {
      num: 7,
      slug: 'custom-logo-metal-fidgets',
      name: 'Logo-Ready Custom Branding Metal Fidgets',
      skuCount: 28,
      priceRange: '$0.75 – $35.00',
      moq: '100 pcs (Custom Logo) / 50 pcs (Blank)',
      summary: '28 hand-picked ready molds featuring wide, flat exterior faces engineered specifically for permanent 50W MOPA Fiber Laser Engraving (+$0.15–$0.30/pc) and Deep Laser Engraving + Color Fill (+$0.35–$0.60/pc).'
    },
    {
      num: 8,
      slug: 'tuning-fork-fidget-sliders',
      name: 'Acoustic Tuning Fork Series',
      skuCount: 7,
      priceRange: '$5.50 – $128.00',
      moq: '50 pcs (Blank) / 100 pcs (Logo)',
      summary: 'All 7 viral acoustic resonance models (FS-150, FS-129, FS-148, FS-107/112, FS-086, FS-091, FS-045) featuring cantilevered tuning-fork prongs and hollow chambers that ring at 2,800–4,200 Hz.'
    },
    {
      num: 9,
      slug: 'cnc-stainless-steel-pei-edc',
      name: 'CNC Stainless Steel, PEI Ultem & Exotic Metal EDC',
      skuCount: 30,
      priceRange: '$9.15 – $382.00',
      moq: '50 pcs (Blank) / 100 pcs (Logo)',
      summary: '30 collector-grade 5-axis CNC machined models crafted from 304/316L Stainless Steel, Amber PEI (Ultem 1000), Zr702 Zirconium, 3K Twill Carbon Fiber, Brass, Copper, and natural Abalone shell inlays.'
    }
  ];

  // ============================================================================
  // BUILD public/llms.txt (Structured Index + 140 SKU Directory)
  // ============================================================================
  const llmsLines = [
    '# FidgetSupply.com — Integrated Sourcing & Supply Chain Platform for China\'s Metal EDC Fidget Industry',
    '> Positioning: Integrated sourcing & supply chain platform for China\'s precision metal EDC fidget & kinetic desk toy industry (100% Ready-Mold Light Customization, $0.00 Tooling Fee)',
    '> Full Self-Contained Knowledge Corpus for LLMs & AI Agents: https://fidgetsupply.com/llms-full.txt',
    '> Export Logistics Hub: Fuzhou Industrial Zone, Fujian, China',
    '> Direct WhatsApp Chat: +86 187 5012 6315 (https://wa.me/8618750126315) — Instant response (Mon - Sat: 8:00 AM - 10:00 PM GMT+8)',
    '> Sourcing Desk Email: sales@fidgetsupply.com',
    '> Supported Languages (18 Locales): en, de, fr, nl, es, it, pt, sv, da, no, fi, pl, cs, ru, ja, ko, id, ar',
    '',
    '## 1. Core Value Proposition & 100% Ready-Mold Light Customization Policy ($0 Tooling Fee)',
    '- **Strictly Ready-Mold Light Customization (No New Custom Mold Cutting)**: We focus 100% on existing-mold wholesale and light customization across our 140 active production molds (`FS-001` to `FS-150`). Buyers pay **$0.00 in mold/tooling fees**, eliminating $3,000–$5,000 upfront tooling capex and 45-day mold development delays.',
    '- **3-Tier Ready-Mold Light Customization Options**:',
    '  1. **Tier 1 — Permanent Surface Logo Branding (MOQ 100 pcs)**:',
    '     - **50W MOPA Fiber Laser Engraving**: `+$0.15 – $0.30 USD/pc` ($0 setup fee, paid pre-production sample: `$50 USD`, 10–15 days).',
    '     - **Deep Laser Engraving + Enamel Color Fill**: `+$0.35 – $0.60 USD/pc` (MOQ 100–200 pcs, paid pre-production sample: `$80 – $150 USD`, 10–15 days). Note: We do NOT recommend surface silk-screen or UV ink printing on smooth metal because surface ink lacks adhesion and peels under thumb friction.',
    '  2. **Tier 2 — Existing-Mold Surface Finish & Colorway Customization (MOQ 300 pcs)**:',
    '     - PVD Vacuum Titanium Coating (Matte Black, Gunmetal, Gold, Rainbow), Hard Anodizing (6063-T6 Aluminum), Antique Brushed Bronze/Silver/Copper, and Ceramic Media Tumbled Stonewash on existing mold geometries.',
    '  3. **Tier 3 — Custom Retail & Corporate Gift Packaging (MOQ 100–300 pcs)**:',
    '     - Custom Logo Black Shockproof 75-Shore-C EVA Zipper Case (`+$0.75/pc`, MOQ 100 pcs), Window Metal Tin Box (`+$0.85/pc`, MOQ 200 pcs), Two-Piece Rigid Magnetic Gift Box (`+$1.10/pc`, MOQ 300 pcs), plus free Amazon FNSKU barcode & 14+ safety warning labels.',
    '- **Machining Equipment & 6-Stage Laboratory Validation**:',
    '  - **CNC & Die-Casting Centers**: Machined on **German DMG MORI, Japan MAZAK, and USA HAAS** multi-axis CNC machining centers (`±0.005mm–±0.01mm` tolerance, `Ra 1.6 μm` surface roughness) and hot-chamber die-casting cells (`ASTM B327 Zamak #3 / #5` & `ASTM B85 ADC12`).',
    '  - **6-Stage Lab Testing**: (1) **3D Coordinate Measuring Machine (CMM)** (`±0.002mm` accuracy), (2) **X-Ray Non-Destructive Testing (NDT)** for internal casting density, (3) **Dynamic Balance Detector** (`R188` bearing 3–6 min spin verification), (4) **96-Hour Neutral Salt Spray Chamber** (`ISO 9227 / ASTM B117`), (5) **20,000-Cycle Magnetic & Mechanical Fatigue Tester**, and (6) **US CPSC 16 CFR 1262 Drop/Torque Abuse & IATA DGR PI-953 Stray Magnetic Field (`<0.00525 gauss at 4.6m`) Certification**.',
    '',
    '## 2. Key Commercial, Customization & Compliance Hubs',
    '- Homepage: https://fidgetsupply.com/',
    '- All 140 Ready Molds Master Catalog: https://fidgetsupply.com/products',
    '- Custom Fiber Laser & Deep Laser Color-Fill Branding SOP: https://fidgetsupply.com/custom-branding',
    '- Custom EVA Zipper Cases & Tin Box Packaging: https://fidgetsupply.com/custom-packaging',
    '- US CPSC 16 CFR 1262, EU RoHS/REACH & Lab Testing Compliance: https://fidgetsupply.com/compliance-safety',
    '- Integrated China Metal EDC Supply Chain & CNC Facilities: https://fidgetsupply.com/about',
    '- Request Instant Wholesale Quote & 12-Hour Digital Proof: https://fidgetsupply.com/contact',
    '',
    '## 3. Nine Core Category Collection Hubs',
    ...collections.map(
      (c) =>
        `${c.num}. [${c.name} (${c.skuCount} Ready Molds, ${c.priceRange}, MOQ: ${c.moq})](https://fidgetsupply.com/collections/${c.slug}): ${c.summary}`
    ),
    '',
    `## 4. Authoritative Engineering, Global Sourcing & 2027 Trend Forecast Guides (${insights.length} Guides)`,
    '- Insights Hub: https://fidgetsupply.com/insights',
    ...insights.map(
      (g, idx) =>
        `${idx + 1}. [${g.title}](https://fidgetsupply.com/insights/${g.slug}) (${g.category} · ${g.readTime}): ${g.summary}`
    ),
    '',
    `## 5. Complete 140 Ready-Mold Product Catalog Index (FS-001 to FS-150)`,
    ...products.map(
      (p) =>
        `- **${p.skuDisplay || p.sku}** — [${p.title}](https://fidgetsupply.com/products/${p.slug}) | Category: \`${p.primaryCollection}\` | Material: ${p.material} | Size: ${p.size} | Weight: ${p.weight} | Hardware: ${p.magnetsEn}${p.accessoriesEn ? ' + ' + p.accessoriesEn : ''} | Wholesale USD: **$${p.tier50}** (50–199 pcs) / **$${p.tier200}** (200–499 pcs) / **$${p.tier500}** (500+ pcs) | Logo-Ready: ${p.logoReady ? 'Yes' : 'Standard'} | Tooling Fee: $0.00`
    ),
    ''
  ];

  const llmsTxtContent = llmsLines.join('\n');
  fs.writeFileSync(path.join(PUBLIC_DIR, 'llms.txt'), llmsTxtContent, 'utf8');

  // ============================================================================
  // BUILD public/llms-full.txt (Complete Self-Contained Corpus)
  // ============================================================================
  const fullLines = [
    '# FidgetSupply.com — Complete LLM & AI Agent Knowledge Corpus (llms-full.txt)',
    '> Canonical Index: https://fidgetsupply.com/llms.txt',
    '> Full Knowledge Base URL: https://fidgetsupply.com/llms-full.txt',
    '> Positioning: Integrated sourcing & supply chain platform for China\'s precision metal EDC fidget & kinetic desk toy industry',
    '> Export Logistics Hub: Fuzhou Industrial Zone, Fujian, China',
    '> WhatsApp Sourcing Desk: +86 187 5012 6315 (https://wa.me/8618750126315)',
    '> Email: sales@fidgetsupply.com',
    '',
    '================================================================================',
    '## SECTION 1: PLATFORM ARCHITECTURE, 100% READY-MOLD LIGHT CUSTOMIZATION SOP & LAB QC STANDARDS',
    '================================================================================',
    '',
    '### 1.1 100% Ready-Mold Light Customization Policy ($0.00 Tooling Fee)',
    'FidgetSupply.com operates strictly on a **100% Ready-Mold Light Customization** model across 140 active, amortized production molds (`FS-001` through `FS-150`). We do NOT take custom mold-opening orders that require $3,000–$5,000 in new tooling capex and 45-day development lead times. Instead, wholesale buyers, e-commerce private-label brands, and corporate gift agencies can immediately order:',
    '- **Blank Unbranded Stock**: MOQ **50 pcs per SKU** (mixable in-stock finishes in 25-pc increments), dispatched in **3–7 business days**.',
    '- **Tier 1 Light Customization — Permanent Logo Branding (MOQ 100 pcs per SKU)**:',
    '  - **50W MOPA Fiber Laser Engraving**: `+$0.15 – $0.30 USD/pc`, `$0` setup fee, `$50 USD` paid pre-production physical sample (10–15 days), 10–15 business days bulk turnaround.',
    '  - **Deep Laser Engraving + Enamel Color Fill**: `+$0.35 – $0.60 USD/pc` (MOQ 100–200 pcs), `$80 – $150 USD` paid pre-production physical sample (10–15 days). Our laser carves a `0.15mm–0.30mm` recessed cavity into the metal shell before hand-filling with heat-cured enamel ink so the color is protected below the wear plane.',
    '  - **Why Surface Silk-Screen / UV Printing Is Not Recommended**: Electroplated zinc alloy, anodized aluminum, and PVD stainless steel surfaces are ultra-smooth and chemically inert (`Ra <= 1.6 μm`), causing surface-printed inks to peel off under daily thumb friction.',
    '- **Tier 2 Light Customization — Existing-Mold Surface Finishes & Colorways (MOQ 300 pcs per SKU)**:',
    '  - Custom PVD Vacuum Titanium Coating (Matte Tactical Black, Gunmetal Grey, Champagne Gold, Iridescent Rainbow), Type II/III Hard Anodizing on 6063-T6 Aluminum, Brushed Antique Bronze/Silver/Copper Electroplating, and Ceramic Media Tumbled Stonewash.',
    '- **Tier 3 Light Customization — Custom Packaging & Retail Readiness (MOQ 100–300 pcs)**:',
    '  - Custom Logo Black Shockproof 75-Shore-C EVA Zipper Case (`+$0.75/pc`, MOQ 100 pcs).',
    '  - Custom Windowed Matte Metal Tin Box with Die-Cut EVA Insert (`+$0.85/pc`, MOQ 200 pcs).',
    '  - Custom Two-Piece Rigid Magnetic Presentation Gift Box (`+$1.10/pc`, MOQ 300 pcs).',
    '  - Complimentary Amazon FNSKU barcode sticker application and 14+ age grading / CPSC magnet warning labels.',
    '',
    '### 1.2 CNC Machining Equipment & 6-Stage Metrology / Reliability Lab Standards',
    '- **Multi-Axis CNC Machining Centers**: Partner CNC workshops operate **German DMG MORI, Japan MAZAK, and USA HAAS** 4-axis and 5-axis CNC milling and turning centers holding linear tolerances of **`±0.005 mm – ±0.01 mm`** and machined surface roughness of **`Ra 1.6 μm`** (`Ra 0.4 μm` on mirror-polished acoustic faces).',
    '- **Certified Alloy Standards**:',
    '  - Die-Cast Zinc Alloy: **ASTM B327 Zamak #3 / Zamak #5** (high-tonnage hot-chamber die-casting).',
    '  - Aluminum Alloy: **6063-T6 / 7075-T6 Aerospace Aluminum** & **ASTM B85 ADC12**.',
    '  - Stainless Steel & Exotic Alloys: **AISI 304 / 316L Stainless Steel**, **C36000 Free-Cutting Brass**, **C11000 Electrolytic Copper**, **Zr702 Commercial Pure Zirconium**, **Amber PEI (Ultem 1000)**, and **3K Twill Carbon Fiber**.',
    '- **6-Stage In-House & Pre-Shipment Lab Validation**:',
    '  1. **3D Coordinate Measuring Machine (CMM)**: Verifies bearing bore concentricity, track slot width, and magnet counterbore depth to `±0.002 mm`.',
    '  2. **X-Ray Non-Destructive Testing (NDT) Flaw Detector**: Screens die-cast zinc and aluminum shells for internal porosity or micro-shrinkage voids prior to electroplating.',
    '  3. **Dynamic Balance & Acoustic Spin Detector**: Tests rotational runout (`<= 0.015 mm`), sub-35 dBA bearing noise, and 3–6 minute free-spin duration on all `R188` spinner and gyroscope SKUs.',
    '  4. **96-Hour Neutral Salt Spray Corrosion Test (`ISO 9227 / ASTM B117`)**: Validates 5% NaCl sweat and humidity corrosion resistance across PVD, anodized, and antique electroplated finishes.',
    '  5. **20,000-Cycle Magnetic & Mechanical Wear Tester**: Simulates 20,000 continuous sliding/ratchet strokes to verify PTFE wear pad durability, phosphor-bronze spring tension, and magnet retention.',
    '  6. **US CPSC 16 CFR Part 1262, EU RoHS/REACH & IATA DGR PI-953 Compliance**: Captive blind counterbores + `>22 MPa` structural epoxy + Loctite thread-locked M2 fasteners prevent magnet liberation under 10× 1.5m concrete drop tests; export master cartons include steel-sheet magnetic shielding tested to `<0.00525 gauss at 4.6m` for DHL/FedEx/UPS air express.',
    '',
    '================================================================================',
    '## SECTION 2: NINE CORE CATEGORY COLLECTION HUBS',
    '================================================================================',
    ''
  ];

  for (const c of collections) {
    fullLines.push(`### Collection #${c.num}: ${c.name}`);
    fullLines.push(`- **Canonical URL**: https://fidgetsupply.com/collections/${c.slug}`);
    fullLines.push(`- **Ready Molds Count**: ${c.skuCount} SKUs`);
    fullLines.push(`- **Wholesale Price Range (USD)**: ${c.priceRange}`);
    fullLines.push(`- **Minimum Order Quantity (MOQ)**: ${c.moq}`);
    fullLines.push(`- **Direct Answer Summary**: ${c.summary}`);
    fullLines.push('');
  }

  fullLines.push('================================================================================');
  fullLines.push(`## SECTION 3: COMPLETE 140 READY-MOLD PRODUCT SPECIFICATIONS (FS-001 TO FS-150)`);
  fullLines.push('================================================================================');
  fullLines.push('');

  for (const p of products) {
    fullLines.push(`### ${p.skuDisplay || p.sku}: ${p.title}`);
    fullLines.push(`- **Canonical URL**: https://fidgetsupply.com/products/${p.slug}`);
    fullLines.push(`- **Primary Category**: ${p.primaryCollectionName} (\`${p.primaryCollection}\`)`);
    if (p.crossCollections && p.crossCollections.length > 0) {
      fullLines.push(`- **Specialty Collections**: ${p.crossCollections.join(', ')}`);
    }
    fullLines.push(`- **Material**: ${p.material}`);
    fullLines.push(`- **Dimensions**: ${p.size} | **Net Weight**: ${p.weight}`);
    fullLines.push(`- **Magnets & Internal Hardware**: ${p.magnetsEn}${p.accessoriesEn ? ' | ' + p.accessoriesEn : ''}`);
    fullLines.push(`- **Available Finishes / Colors**: ${p.colorsEn}`);
    fullLines.push(
      `- **Factory-Direct USD Wholesale Tiers ($0 Tooling Fee)**: 50–199 pcs: **$${p.tier50}/pc** | 200–499 pcs: **$${p.tier200}/pc** | 500+ pcs: **$${p.tier500}/pc**`
    );
    fullLines.push(`- **MOQ & Lead Time**: ${p.moq} | Lead Time: ${p.leadTime}`);
    fullLines.push(`- **Engineering Overview**: ${p.overview}`);
    if (Array.isArray(p.variants) && p.variants.length > 1) {
      fullLines.push(`- **Same-Mold Multi-Material / Finish Variants**:`);
      for (const v of p.variants) {
        fullLines.push(
          `  - \`${v.sku}\`: ${v.materialEn} (${v.size}, ${v.weight}) — 50–199 pcs: $${v.tier50} | 200–499 pcs: $${v.tier200} | 500+ pcs: $${v.tier500} (${v.colorsEn})`
        );
      }
    }
    fullLines.push('');
  }

  fullLines.push('================================================================================');
  fullLines.push(`## SECTION 4: 39 AUTHORITATIVE ENGINEERING, SOURCING & 2027 TREND GUIDES`);
  fullLines.push('================================================================================');
  fullLines.push('');

  insights.forEach((g, idx) => {
    fullLines.push(`### Guide #${idx + 1}: ${g.title}`);
    fullLines.push(`- **Canonical URL**: https://fidgetsupply.com/insights/${g.slug}`);
    fullLines.push(`- **Category**: ${g.category} | **Reading Time**: ${g.readTime} | **Updated**: ${g.updatedDate || g.publishDate}`);
    if (g.relatedSkus.length > 0) {
      fullLines.push(`- **Featured Ready-Mold SKUs**: ${g.relatedSkus.join(', ')}`);
    }
    fullLines.push(`- **Executive Summary**: ${g.summary}`);
    fullLines.push('');
    fullLines.push(g.cleanBody);
    fullLines.push('');
    fullLines.push('--------------------------------------------------------------------------------');
    fullLines.push('');
  });

  const llmsFullContent = fullLines.join('\n');
  fs.writeFileSync(path.join(PUBLIC_DIR, 'llms-full.txt'), llmsFullContent, 'utf8');

  console.log(`✅ Generated public/llms.txt (${llmsLines.length} lines, ${(Buffer.byteLength(llmsTxtContent) / 1024).toFixed(1)} KB)`);
  console.log(`✅ Generated public/llms-full.txt (${fullLines.length} lines, ${(Buffer.byteLength(llmsFullContent) / 1024).toFixed(1)} KB)`);
}

main();
