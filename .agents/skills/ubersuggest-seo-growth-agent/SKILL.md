---
name: ubersuggest-seo-growth-agent
description: >-
  Standard operating procedure and execution blueprint for the autonomous Ubersuggest SEO & Growth Intelligence Agent.
  Leverages 10 data intelligence pillars (competitor top pages reverse engineering, Google autocomplete fan-out, viral content mining, SERP position 0 sniping, Core Web Vitals, backlink intersection hunting, striking-distance keyword interception, 12-month seasonality forecasting, high-CPC commercial targeting, and Generative AI LLM citation monitoring) to optimize and scale FidgetSupply.com.
---

# Ubersuggest SEO & Growth Intelligence Agent (SOP & Architecture)

This document defines the operational architecture, standard workflows, and execution protocols for the **Ubersuggest SEO & Growth Intelligence Agent** (`ubersuggest_seo_growth_agent`).

---

## 1. The 10 Core Data Pillars & API Arsenal

```
+-------------------------------------------------------------------------------------------------------+
|                             10 UBERSUGGEST DATA INTELLIGENCE PILLARS                                  |
+----+------------------------------------+-----------------------------------+-------------------------+
| #  | Intelligence Pillar                | Ubersuggest API MCP Tools         | Strategic B2B Objective |
+----+------------------------------------+-----------------------------------+-------------------------+
| 1  | Competitor Top Pages Reverse Eng.  | domain_top_pages, competitors     | Deconstruct top funnels |
| 2  | Google Autocomplete Intent Matrix  | google_suggestions, match_keywords| Capture long-tail intent|
| 3  | Viral & Social Content Mining      | content_ideas, page_shares        | Trendspotting & shares  |
| 4  | SERP Features & CTR Optimization   | serp_analysis, estimate_serp_clicks| Snipe Position 0 & PAA  |
| 5  | Real-World Core Web Vitals Audit   | pagespeed_audit                   | LCP <2.5s, CLS <0.1     |
| 6  | Backlink Opportunity & Gap Hunting | backlink_opportunity, linking_dom.| High-DR industry links  |
| 7  | Striking-Distance Rank Boost       | domain_keywords, project_position | Push Pos 11-20 to Top 3 |
| 8  | 12-Month Search Seasonality Curves | keyword_overview (trend analysis) | 60-day early wave lead  |
| 9  | High-CPC Commercial Value Targeting| traffic_value, keyword_metrics    | Displace $10+ paid ads  |
| 10 | Generative AI Search Visibility    | brand_visibility, brand_prompts   | LLM & AI Overview RAG   |
+----+------------------------------------+-----------------------------------+-------------------------+
```

---

## 2. Standard Operating Procedure (SOP) Workflows

### Workflow A: Striking-Distance Ranking Interception (Positions 11–20 to Top 3)
1. **Fetch Position Data**: Call `project_position_info` or `domain_keywords` to extract all ranking URLs currently situated in positions 11 to 20.
2. **On-Page Semantic Injection**:
   - Front-load primary target keyword into `metaTitle` (under 60 chars).
   - Craft high-CTR `metaDescription` (150–160 chars) with concrete specs (GSM, MOQ, FOB pricing, DDP).
   - Inject keyword-rich H2/H3 headings and structured comparison tables.
3. **Internal Link Equity Flow**: Link from top-ranking contextual hubs (`/custom-bags-wholesale`, `/catalog`) to the target URL with exact/partial anchor text.

### Workflow B: High-CPC Skyscraper Guide Creation ($5–$25+ CPC Displacement)
1. **Keyword Intent Validation**: Call `keyword_metrics` and `keyword_suggestions` to identify high-volume commercial keywords with high CPC ($> \$5.00$).
2. **SERP Competitor Audit**: Call `serp_analysis` to evaluate top 10 SERP results, word counts, content structure, and featured snippet types.
3. **Draft Skyscraper Content**:
   - Target 2,000–3,500 words with 1–3 sentence paragraphs.
   - Include 3+ `.table-narrow` data tables (Specs, Volume Pricing, Quality Standards).
   - Include $\ge 2$ `<figure class="article-figure">` WebP figures with `<figcaption>`.
   - Embed 7-item Schema.org `FAQPage` compatible accordion section.
   - Embed dark `#0f172a` `.sourcing-cta-box`.

### Workflow C: Backlink Opportunity & Industry Outreach Gap Discovery
1. **Competitor Link Intersection**: Call `backlink_opportunity` comparing `fidgetsupply.com` against top industry leaders (`4imprint.com`, `everythingpromo.com`, `halo.com`).
2. **Filter High-Authority Domains**: Extract domains with Domain Rating ($DR \ge 40$) in industry associations (PPAI, ASI, PSI), trade show directories (Canton Fair, Magic Show), sustainable certifications (Textile Exchange, FSC, GOTS), and supply chain journals.
3. **Linkable Asset Crafting**: Produce downloadable spec sheets, technical compliance calculators, or comprehensive benchmark reports to pitch editorial inclusions.

### Workflow D: 12-Month Procurement Seasonality Prediction (60-Day Advance Launch)
1. **Extract Monthly Search Curves**: Call `keyword_overview` to plot 12-month volume distributions.
2. **Execute 60-Day Lead Publishing**:
   - **Q1 Publishing (Jan–Feb)**: Summer Drinkware, Beach Towels, Cooler Bags, Festival Wristbands.
   - **Q2 Publishing (Apr–May)**: Back-to-School Backpacks, Fall Outerwear, College Mascot Plush.
   - **Q3 Publishing (Jul–Aug)**: Corporate Holiday Gift Sets, Vacuum Thermal Flasks, Fleece Jackets, Knitted Scarves.
   - **Q4 Publishing (Oct–Nov)**: Trade Show Welcome Kits, Eco Lanyards, New Year Executive Swag Boxes.

### Workflow E: GSC 24-Hour Rolling Window & 5-Tier Query Clustering
1. **Extract 24-Hour GSC Real Search Queries**: Extract live queries via GSC API or GSC export.
2. **Classify Queries into 5 Strategic Tiers**:
   - **Tier 1: Top 1–3 (Golden Conversion Zone)**: Retain dominance; embed contextual `.sourcing-cta-box` and direct product leaf links to maximize conversion.
   - **Tier 2: Top 4–10 (First-Page CTR Snipes)**: Front-load high-intent commercial modifiers (`OEM Factory Direct`, `Wholesale MOQs`) in `metaTitle` and `metaDescription` to convert high impressions into clicks.
   - **Tier 3: Top 11–20 (Striking-Distance Page 2 Elevation)**: Inject high-relevance H2 headings, 500–20,000 pcs volume pricing tables, and AQL 2.5 QC parameters to push onto Page 1.
   - **Tier 4: Top 21–50 (Development Cluster)**: Build contextual internal links from Top 1–10 parent hubs.
   - **Tier 5: Top 51+ (Emerging Wave Index)**: Monitor initial Googlebot indexing and expand semantic depth.

---

## 3. How to Invoke the Agent

```json
{
  "TypeName": "ubersuggest_seo_growth_agent",
  "Role": "Autonomous SEO & Growth Intelligence Specialist",
  "Prompt": "Execute an end-to-end SEO growth audit for [domain / category / keyword]. Reverse-engineer top competitor funnels, intercept striking-distance keywords (pos 11-20), discover high-DR backlink gaps, and author Backlinko-grade skyscraper assets for high-CPC commercial opportunities."
}
```

---

## 4. Invariants & Deterministic Guardrails

1. **100% Full English Invariant (Rule 17)**: All code, metadata, markdown, and JSON must contain 0 Chinese characters.
2. **Backlinko Editorial Standard (Rule 16)**: Reading time $\ge 8$ minutes, 1–3 sentence paragraphs, bold lead-in bullet items, $\ge 2$ inline WebP figures ($<150$KB), 10-item FAQ (9–12 FAQs Invariant), dark `#0f172a` CTA box.
3. **B2B Realistic Volume Pricing (Rule 10)**: Monotonic volume decay curves strictly bounded between 15% and 38%.
4. **Zero Duplicate Images (Rule 13)**: 100% unique image paths per page.
5. **Deterministic Verification**: All executions must pass `node scripts/verify_all_rules.cjs` (17/17 checks) and `npm run build` (0 errors).
