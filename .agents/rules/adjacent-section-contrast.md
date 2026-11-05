---
name: Adjacent Section Contrast
description: Prevent dark-on-dark layout bleeding and white-on-white section boundary blurring.
trigger: always_on
---
# Adjacent Section Contrast

Never place two full-bleed sections with identical or similar heavy background colors (e.g., dark CTA and dark Footer) adjacent to each other. 

Never use top-to-bottom gradients where adjacent sections meet at the same color (e.g., `#ffffff` meeting `#ffffff`), as this erases the visual boundary between sections.

To ensure clear visual boundaries between sections:
1. Use solid alternating backgrounds (zebra-striping: e.g., `#ffffff` vs `#f8fafc`).
2. Add subtle top and bottom borders (`border-top: 1px solid #e2e8f0; border-bottom: 1px solid #e2e8f0;`) to `.section-light` / `.light-bg` containers.
3. If necessary, convert one section into a contained Card (with `max-width`, margins, `border-radius`, and `box-shadow`) to create visual separation.
