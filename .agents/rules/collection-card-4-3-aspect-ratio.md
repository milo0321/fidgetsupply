# Collection Card 4:3 Image Aspect Ratio Standard

All product images displayed on Collection Cards (`.collection-card`, `.collection-img-wrap`, `.collection-img`) across all Category Hub and Collection pages MUST strictly enforce a **4:3 aspect ratio** (`aspect-ratio: 4 / 3`).

## Invariants:

1. **Standard HTML Container Markup**:
   Every collection card MUST wrap its product image inside `<div class="collection-img-wrap">`:
   ```html
   <a href="/products/..." class="collection-card">
     <div class="collection-img-wrap">
       <img src="/wp-content/uploads/..." alt="Product Title" class="collection-img" />
     </div>
     <div class="collection-content">
       <h3>Product Title</h3>
       <p>Description...</p>
       <span class="view-link">View Product &rarr;</span>
     </div>
   </a>
   ```

2. **Strict CSS Aspect Ratio Invariant**:
   - `.collection-img-wrap` MUST have `aspect-ratio: 4 / 3 !important; width: 100%; overflow: hidden; background: #f8fafc;`.
   - `.collection-img` MUST have `width: 100% !important; height: 100% !important; aspect-ratio: 4 / 3 !important; object-fit: cover !important; object-position: center !important;`.
   - NEVER specify fixed pixel heights (e.g., `height: 180px`) or restrictive `max-height` values (e.g., `max-height: 220px`) that crush or distort the image away from the 4:3 proportion on wider desktop grid layouts.

3. **Image Crop & Centering**:
   - All collection images MUST use `object-fit: cover !important; object-position: center !important;` to ensure edge-to-edge aesthetic cropping without stretching.

4. **Hub vs. Leaf Imagery Standards**:
   - Cards linking to **L3 / L4 Collection Hubs** MUST display **Multi-Product Family Group Flat-Lays** (全家福组合静物展陈，4:3 比例，严禁真人模特).
   - Cards linking to **Leaf SKUs** MUST display **Single-Product Hero Photography** (单品聚焦特写，4:3 比例) with distinct visual silhouettes across sibling product lines.
