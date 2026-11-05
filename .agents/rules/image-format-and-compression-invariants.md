# Image Format, WebP Optimization & File Size Invariants

To guarantee ultra-fast page load performance, Lighthouse 100 SEO speed scores, and consistent asset conventions across the entire site:

## 1. WebP Format Mandate
- **Mandatory WebP Format**: All visual assets (Hero images, product photography, collection cards, blog illustrations, and infographics) deployed to `public/wp-content/uploads/` MUST use modern `.webp` format.
- **No Raw JPG/PNG in Production Content**: Never leave uncompressed `.jpg`, `.jpeg`, or large `.png` files in `public/wp-content/uploads/` or content collections.

## 2. File Size & Resolution Limits
- **Strict File Size Ceiling**: Every deployed image MUST be under **150 KB** (ideal range: **40 KB – 120 KB**).
- **Responsive Dimensions**:
  - Hero & Collection Cards (4:3): Max width **1200px** (e.g. 1200x900).
  - Editorial & Blog Illustrations (4:3 / 16:9): Max width **1000px – 1200px**.
  - Specification icons & trust badges: Under **30 KB** (SVG or WebP).

## 3. Mandatory Automated Image Conversion Pipeline
When using AI generation tools (`generate_image`) or downloading external assets (which default to `.jpg`/`.png` in artifact directories):
1. **Never copy raw `.jpg` files directly to `public/`**.
2. Run automated conversion and compression with Node `sharp`:
   ```javascript
   await sharp(inputBuffer)
     .resize({ width: 1200, withoutEnlargement: true })
     .webp({ quality: 82, effort: 6 })
     .toFile(outputPath);
   ```
3. Verify that the output `.webp` file size is < 150 KB before referencing it in `.astro`, `.json`, or `.md` files.
