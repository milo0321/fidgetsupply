---
name: B2B Deep Research & Skyscraper Intelligence SOP
description: >-
  Standard operating procedure and workflow for conducting exhaustive, data-backed B2B supply chain investigations, material science analysis, international testing compliance (ASTM/EN71/FDA/GRS/GOTS), and authoring 6-question Backlinko-grade skyscraper guides.
---

# B2B Deep Research & Skyscraper Intelligence SOP

This skill defines the standard methodology and operational procedure for conducting deep industrial research and authoring Backlinko-grade procurement guides using the specialized subagent `b2b_deep_researcher` aligned with the **6-Question Calibration Framework**.

---

## 1. The 6-Question Research Pillars

```
+-----------------------------------------------------------------------------------+
|                        6 AUTHORITATIVE B2B RESEARCH PILLARS                       |
+-----------------------------------------------------------------------------------+
| 1. Persona & Purchasing KPI  | Corporate Procurement, Promo Distributors, Brands  |
| 2. Failure Modes (FMEA)      | Seam pull failures, toxic leaching, plating rust   |
| 3. Material Science (TDS)    | GSM density, tensile (N), DuPont Tyvek, SUS 304    |
| 4. Factory Floor SOPs        | AQL 2.5, needle detection 0.8mm, rub fastness      |
| 5. Tiered Economics          | 500 - 20,000 pcs volume pricing, DDP container CBM |
| 6. Risk-Controlled Action    | Tiered BOM quote, sample fee 100% refundable       |
+-----------------------------------------------------------------------------------+
```

---

## 2. Research Workflow

1. **Step 1: Buyer Persona & Regulatory Scan (Who & Compliance)**
   - Identify mandatory certifications for US, EU, UK, and APAC markets (CE, UKCA, FDA, LFGB, CPSIA, Prop 65, GRS TC).
2. **Step 2: Failure Mode & Manufacturing Physics (What & Why)**
   - Uncover exact commercial shortcuts: recycled resin brittleness, reduced fabric GSM (e.g. 9oz masquerading as 12oz), non-reinforced seam tear-out under payload.
3. **Step 3: Material Science & Factory SOPs (How & Testing)**
   - Document exact physical specs: GSM weight, denier count, tensile strength (N), hydrostatic head (mm), AQL 2.5 sampling plans, and 0.8mm needle detection protocols.
4. **Step 4: Tiered Volume Pricing & Lead Times (How Much & When)**
   - Calculate realistic factory MOQs (500 pcs), 4-tier progressive price curves (500, 1,000, 5,000, 20,000 pcs), physical sample turnarounds (3–5 days), and mass turnaround (12–18 days).
5. **Step 5: Anti-Freeloading Conversion Protocol (Action)**
   - Enforce authentic B2B risk controls: Custom sample setup fees are **100% fully refundable** against the mass production order; existing material swatches/stock samples are provided free with freight collect; 24-hour formal BOM quote and engineering proof require vector artwork (AI/EPS) and target quantity. No unconditional freebies.
6. **Step 6: Backlinko Skyscraper Assembly (100% Full English Invariant)**
   - All written markdown, HTML tags, frontmatter, image alt text, and FAQ sections MUST be written in **100% pure, native English** (zero non-English or Chinese characters).
   - Structure into 1–3 sentence paragraphs, bold lead-ins, 2–4 `.table-narrow` responsive tables, $\ge 2$ `<figure class="article-figure">` image blocks, dark `#0f172a` `.sourcing-cta-box`, and 7–12 item FAQ with `FAQPage` schema.

---

## 3. How to Invoke the Subagent

Invoke the subagent using `invoke_subagent`:

```json
{
  "TypeName": "b2b_deep_researcher",
  "Role": "B2B Supply Chain & Sourcing Research Specialist",
  "Prompt": "Conduct deep technical research on [Topic/Material/Product] using the 6-Question Calibration Framework. Extract international compliance standards (ASTM/EN/FDA), physical material specs, failure modes, factory quality control SOPs, tiered volume pricing (500 to 20,000 pcs), anti-freeloading refundable sampling policies, and compile a Backlinko-grade skyscraper guide."
}
```