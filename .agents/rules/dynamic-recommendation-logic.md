# Taxonomy Cluster Dynamic Recommendation Logic

When implementing "Related Capabilities" or "Related Products" recommendation sections in UI templates (`src/components/RelatedProducts.astro`), you MUST enforce **Taxonomy Cluster Isolation** rather than relying solely on naive keyword matching or broad top-level category strings.

## Strict Invariants:

1. **Predefined Product Clusters (`CLUSTERS`)**:
   Every leaf product SKU MUST map to a specific domain cluster:
   - `lanyards`: Eco, event, full-color, phone, safety, smart, wrist lanyards & wristbands.
   - `pins`: Hard enamel, soft enamel, die struck pins.
   - `keychains`: Metal, PVC, leather, fabric keychains.
   - `headwear_neckwear`: Seamless magic headwear, eco gaiters, fleece gaiters, reflective gaiters, bandanas, hats, scarves.
   - `apparel`: T-shirts, polo shirts, hoodies, fleece jackets, softshell jackets, windbreakers, socks, gloves.
   - `tote_bags`: Canvas, organic cotton, hemp, jute, Tyvek, kraft paper, vegan leather totes.
   - `backpacks`: Anti-theft laptop backpacks, canvas backpacks, foldable backpacks, drawstring cinch bags.
   - `coolers`: Insulated cooler totes, backpack coolers, Tyvek lunch bags, neoprene lunch bags, neoprene can coolers.
   - `pouches_packaging`: Canvas zipper pouches, cosmetic bags, tech organizers, cotton drawstring pouches, jute gift bags, dust bags.
   - `drinkware`: Stainless tumblers, coffee tumblers, mugs, vacuum sports bottles, copper thermal bottles, Tritan bottles, glass bottles.
   - `towels`: Cotton towels, microfiber beach towels.
   - `pet_products`: Pet bandanas, pet blankets, dog food bowls, pet toys, travel bowls, lint rollers.
   - `corporate_gifts`: VIP executive gift sets.

2. **Scoring Priority Hierarchy**:
   - **Tier 1 (Same Cluster Boost +100)**: Candidate products belonging to the exact same cluster are prioritized first.
   - **Tier 2 (Logical Adjacent Cluster Boost +30)**: If additional recommendations are needed, candidates from strictly defined adjacent clusters (e.g. `headwear_neckwear` ↔ `apparel`, `coolers` ↔ `drinkware`) are selected.
   - **Tier 3 (Semantic Keyword Boost +15 / +10)**: Keyword overlap within the same or adjacent cluster refines the rank order.

3. **Zero Cross-Cluster Pollution**:
   Never allow non-adjacent cross-category jumps (e.g. Headwear recommending Coffee Mugs, Water Bottles, or Dog Bowls).
