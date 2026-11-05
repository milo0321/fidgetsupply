# Grid Image Aspect Ratio Parity

When building Product Cards or Image Grids using a fixed container height and `object-fit: cover`, you MUST ensure that all source images fed into the grid share a **similar aspect ratio** (e.g., all ~4:3, or all 1:1).

Never mix ultra-wide banner images (16:9) with square images in the same constrained grid. The `object-fit: cover` crop will cause the ultra-wide image's subject to appear visually misaligned and disproportionately scaled. Select appropriately cropped source images instead of relying purely on CSS.
