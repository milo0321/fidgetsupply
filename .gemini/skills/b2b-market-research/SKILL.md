---
name: b2b-market-research
description: B2B coffee & cafe packaging market research, competitor gap analysis, search intent mining, multi-source regulatory and commodity intelligence querying, and anti-duplication validation for new product SKUs and insight articles on cafesupplychain.com.
---

# B2B Cafe Supply Chain Market Research & Intelligence Skill (/b2b-market-research)
*Powered by Cafe Supply Chain — China Coffee Industry Integrated Supply Chain Platform*

This Skill governs the research, analysis, and discovery of high-converting B2B product SKUs and compliance insight topics for cafesupplychain.com across 5 primary authoritative research sources.

---

## 🌐 1. Comprehensive Authoritative Research Data Sources (2026 Edition)

### Category 1: Official Statutory Government & Regulatory Portals
- **European Union**:
  - [EUR-Lex EU PPWR (EU) 2025/40](https://eur-lex.europa.eu/) — Packaging & Packaging Waste Regulation (Mandatory recyclability & recycled content thresholds by 2030, PFAS bans in food contact paperboard)
  - [EUR-Lex EU SUPD 2019/904](https://eur-lex.europa.eu/) — Single-Use Plastics Directive (paper cup turtle logo exemption rules for aqueous coatings)
  - [ECHA REACH Candidate List](https://echa.europa.eu/) — SVHC substances in food contact packaging materials
- **United States**:
  - [US FDA 21 CFR 176 / 177](https://www.accessdata.fda.gov/) — Paper & paperboard food contact surface notifications, PE/PET resin approvals
  - [FDA Facility Registration](https://www.fda.gov/) — Required for coffee bean export to the US market
  - [California DTSC AB 1200 / SB 54](https://dtsc.ca.gov/) — Total Organic Fluorine (TOF) <10 PPM PFAS restrictions in food packaging
  - [Washington HB 1047 / New York S4363](https://ecology.wa.gov/) — State-level PFAS bans in takeaway paper containers
- **UK**: [HMRC Gov.uk — Plastic Packaging Tax (PPT)](https://www.gov.uk/) — UK PPT £217.85/tonne threshold on paper cups with PE film lining vs rPET
- **China Export**: [GACC General Administration of Customs China](http://www.customs.gov.cn/) — Export inspection, CIQ certificates for food products (coffee beans)
- **Coffee Commodity**: [ICO International Coffee Organization](https://www.ico.org/) — Green coffee export data, price indicators, Arabica/Robusta trade statistics

### Category 2: Standards & Certification Bodies
- **Food Safety**: ISO 22000, HACCP, BRCGS Food Safety Standard, FDA Facility Registration (for commercial coffee bean export)
- **Paper Cups & Packaging**: EN 13430 (repulpability benchmarks), EN 13431 (recyclability), FSC® (Forest Stewardship Council chain of custody), BPI / Din Certco (EN 13432 compostability)
- **Coffee Industry**: SCA Specialty Coffee Association 100-point cupping protocol, SCAA Arabica grading, World Coffee Research (WCR) varieties catalog
- **Chemical & QC Testing**: TOF (Total Organic Fluorine) <10 PPM PFAS screening per California AB 1200, SGS/Intertek accredited labs
- **PET Ice Cups**: FDA 21 CFR 177.1630 (PET food contact), optical clarity standards (≥92% light transmittance)

### Category 3: Industry Trade Publications & B2B Hubs
- **Coffee Industry**: Barista Magazine, Perfect Daily Grind, Daily Coffee News (DCN), Global Coffee Report (GCR), SCA Symposium proceedings
- **Packaging**: Packaging Europe, Packaging World, Packaging Digest, Flexible Packaging Association (FPA), Sustainable Packaging Coalition (SPC)
- **B2B Directories**: Alibaba, Made-in-China, Kompass, GlobalSources (buyer search term analysis for paper cups, coffee beans)

### Category 4: GSC & GA4 First-Party Search & Behavior Mining
- **Google Search Console API**: Analyze high-impression, low-CTR queries at positions 4–25 for `sc-domain:cafesupplychain.com`.
- **GA4 Real-Time & Lead Events**: Analyzes active users, engagement duration, and RFQ form conversions by page.

### Category 5: AI Search & RAG Consensus Engines
- **ChatGPT Search / Perplexity / Google AI Overviews**: Analyze what technical sources AI engines cite when users query terms like:
  - "aqueous coated paper cup supplier China"
  - "commercial roasted coffee beans wholesale China"
  - "EU SUPD compliant paper cup manufacturer"
  - "crystal PET ice cup bubble tea factory"
  - "cold brew coffee beans bulk exporter"

---

## 🚫 2. Strict Anti-Duplication Protocol

Every proposed new item MUST pass the **Anti-Duplication Audit**:
- **Zero Keyword Overlap**: Candidate title/slug must not match existing product SKUs or insight articles.
- **Unique B2B Intent**: Must target a distinct buyer persona, product category, or regulatory jurisdiction.
- **Collision Check**: Cross-reference against `src/content/products/*.json` and `src/content/insights/*.md`.

---

## 📦 3. Recommended Product SKU Pipeline (2026 Research Expansion)

| Proposed Slug | Product Type | Target B2B Buyer | Key Differentiator |
|---|---|---|---|
| `cold-brew-commercial-coffee-beans` | Commercial Cold Brew Coffee Beans | Cold brew beverage chains, OEM bottlers | Coarse grind/whole bean, dark chocolate flavor, nitrogen valve bag |
| `rpet-recycled-ice-cups` | 100% rPET Recycled Plastic Cold Cups | European cafe chains, B-Corp brands | 100% post-consumer recycled rPET, reduces UK PPT & EU EPR tariffs |
| `bag-in-box-coffee-dispenser-bags` | Aseptic Bag-in-Box Liquid Coffee Bags | Office coffee services, hotels, catering | 3L/5L/10L aseptic barrier bag + VITOP tap for liquid coffee concentrate |
| `biodegradable-pla-coffee-cup-lids` | CPLA Heat-Resistant Coffee Cup Lids (90mm) | Eco-focused specialty coffee cafes | 90°C heat-resistant CPLA bioplastic, fits 80mm/90mm cups, replaces PS lids |

---

## 📝 4. Recommended Insight Article Pipeline (2026 Research Expansion)

| Proposed Slug | Focus Topic & Keyphrase | Target Reader | Key Sources |
|---|---|---|---|
| `yunnan-arabica-single-origin-grading-guide` | Yunnan Arabica Coffee Bean Quality Grading & Cupping SOP | Specialty coffee importers, roasteries | SCA 100-pt protocol, WCR, GACC CIQ |
| `pfas-free-paper-cup-compliance-us-eu` | PFAS-Free Paper Cup Compliance Guide: US AB 1200 & EU PPWR | US/EU packaging buyers, QSRs | EU PPWR 2025/40, US AB 1200, EN 13430 |
| `rpet-vs-virgin-pet-ice-cups-cost-analysis` | rPET vs Virgin PET Ice Cups: Recycled Content & Cost Analysis | European beverage & boba chains | UK PPT, EUR-Lex, FDA 21 CFR 177.1630 |
| `cold-brew-coffee-packaging-shelf-life-sop` | Cold Brew Liquid Coffee Packaging SOP: Nitrogen Flushing | Commercial cold brew brands | WIPF valves, ISO 22000, O₂ <0.5% SOP |

---

## 📊 5. Research Execution Workflow

1. Query Category 1–5 intelligence sources for new regulatory updates, search trends, and buyer pain points.
2. Run Anti-Duplication Verification against all existing content.
3. For new Product SKUs → invoke the [`b2b-product-authoring`](/.gemini/skills/b2b-product-authoring/SKILL.md) Skill.
4. For new Insight Articles → invoke the [`b2b-blog-authoring`](/.gemini/skills/b2b-blog-engine/SKILL.md) Skill.
