# Product Featured Image Authenticity & Collection Hero Invariants

Every product SKU JSON (`src/content/products/[slug].json`) and standalone L2/L3 collection page must specify a `featuredImage` that is an **authentic, photorealistic commercial product photograph**.

## Strict Invariants:

### 1. Pristine Factory & Commercial Showcase Standards:
- **Zero Debris / In-Use Soil**: Hero featured images MUST NOT depict dirty surfaces, loose animal hair/fur stuck to products, dust, or worn-out items in action. Products must appear factory-fresh, clean, and ready for commercial enterprise distribution.
- **No Obscured Silhouettes**: Avoid extreme action closeups where hands, pets, or background elements obscure more than 40% of the product. The product structure, dimensions, and craftsmanship must be crystal clear.
- **Multi-Model Customization Presentation**: When possible, hero imagery should showcase 2–3 variants/configurations (e.g., travel folding cap, eco-wheat straw composite handle, spiral-cut tear paper vs washable TPR silicone core, PMS Pantone color options) with clean OEM pad-printed corporate branding.
- **Studio Showroom Atmosphere**: Clean, uncluttered B2B commercial studio or showroom background (e.g., warm natural wood, polished light stone, subtle soft lighting) with a standard **4:3 landscape aspect ratio**.

### 2. Whole Product vs. Component/Part Invariant:
- **Never Single Component/Part Closeups as Hero**: A leaf product's primary `featuredImage` MUST NOT be an isolated micro-closeup of a webbing edge, a bare bottle lid, a circuit chip, or raw fabric swatches. Component/detail closeups belong in in-body Z-pattern feature rows (`.feature-row`), NOT as the primary SKU `featuredImage`.

### 3. L2/L3 Collection Hub Showcase Heroes:
- **Mandatory Multi-Product Arrangement**: The `featuredImage` for L2 and L3 collection pages (`custom-bags-wholesale`, `custom-backpacks-wholesale`, `custom-cooler-bags-wholesale`, `custom-pouches-wholesale`, etc.) MUST depict multiple representative product silhouettes of that family arranged together in a studio setting.
- **Never Single-Product for Hubs**: Never use a single isolated SKU photo as the hero image for a collection hub page.

### 4. Collection Card Image Synchronization:
- **Card-to-Destination Image Parity**: When presenting subcategory cards on L2/L3 hubs, the image displayed on the card (`src`) MUST match the authentic `featuredImage` of the destination product or sub-hub page.
- **Uniform Wrapper Standard**: All collection cards must wrap their image in `<div class="collection-img-wrap">` with responsive 4:3 aspect ratio fallback.

### 5. OpenGraph & Google SERP Rich Snippet Invariants:
- **Layout `ogImage` Propagation**: Every product template (`[slug].astro`) and article template (`insights/[slug].astro`) MUST pass `ogImage={product.featuredImage}` (or `post.data.featuredImage`) to `<Layout />`. Never let product pages fallback to the generic homepage logo image.
- **Structured Data Image Array**: `jsonLdProduct.image` must contain full absolute URLs of all product imagery on the page.

### 6. Single-Page Zero Duplicate Image Invariant:
- **Zero Duplicate Image URLs on Same Page**: On ANY single page (L2 collection hub, L3 sub-hub, leaf product page, or insight guide), the set of all image URLs (`heroImage`, `linkedSkus[].img`, Z-pattern `<img>`, capability rows, etc.) MUST be mutually exclusive.
- **Dedicated Craftsmanship Assets**: Never reuse the featured hero photo or child SKU card photo in subsequent Z-pattern craftsmanship, engineering, or feature breakdown rows. Dedicated craftsmanship, material macro, or manufacturing workshop assets must be used instead.

