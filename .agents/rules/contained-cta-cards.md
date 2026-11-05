# Contained Floating CTA Cards

Never style bottom conversion CTAs as full-bleed, full-screen width (`100vw`) bars on category hub pages, insights pages, or product pages.

Full-bleed CTA sections create harsh contrast breaks and awkward adjacencies with footers.

## Invariants:
1. **Contained Floating Card Layout**:
   - Wrap bottom CTAs inside a contained floating card with `max-width` (e.g. `1000px`), `margin: 0 auto`, rounded corners (`border-radius: 24px`), and a soft glow/drop shadow (`box-shadow: 0 12px 36px rgba(0,0,0,0.12)`).
2. **Light Section Backing**:
   - Place the contained CTA card inside a light section container (`.section-light` / `#f8fafc`) with subtle top/bottom borders (`border-top: 1px solid #e2e8f0`) to ensure contrast separation from adjacent footer sections.
