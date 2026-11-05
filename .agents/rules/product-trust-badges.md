# Product Trust Badges & Spotlight Card Invariants

To guarantee high commercial conversion, visual integrity, and authentic B2B buyer trust across product cards and article recommendations (`ArticleRelatedProducts.astro`):

## 1. Dynamic Product-Specific USPs over Generic Certifications
- **No Generic Badges**: NEVER hardcode generic placeholders like `ISO 9001`, `Factory Direct Sourcing`, or `OEM/ODM Partner` across all cards.
- **Extract Tailored Value Propositions**:
  - **Drinkware**: `99.99% UV-C Sterilization`, `Food-Grade 18/8 Steel`, `Copper-Lined Vacuum 24h`, `100% BPA-Free Tritan™`, `Thermal Shock Resistant Glass`, `Smart Touch Temp Display`.
  - **Pins & Badges**: `Cloisonné Hard Enamel`, `Die-Struck Soft Enamel`, `3D Relief Metal Stamping`, `REACH & Prop 65 Compliant`.
  - **Bags & Totes**: `100% Natural Golden Jute`, `Reinforced Heavy Canvas`, `GOTS Organic Certified`, `DuPont™ Tyvek® Eco Paper`, `German Washable Kraft Paper`.
  - **Lanyards & Wristbands**: `NFC / RFID Smart Encrypted`, `High-Definition Jacquard/Dye-Sub`, `Medical Grade Silicone`.

## 2. Spotlight Card Image & Badge Layout Invariants
- **Full-Bleed Image Coverage**: Card image containers (`.card-image-column`) MUST enforce `display: block; width: 100%; height: 100%; position: relative; overflow: hidden;` with inner images styled as `.spotlight-prod-img { width: 100%; height: 100%; object-fit: cover; display: block; }`.
- **Absolute Glassmorphism Overlay**: Trust badges (`.badge-direct-mfg`) MUST use absolute positioning (`position: absolute; top: 0.85rem; left: 0.85rem; z-index: 2; backdrop-filter: blur(4px);`) to overlay the image seamlessly, preventing unstyled text spill below images.
