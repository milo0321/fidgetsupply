---
name: seo-geo-growth-engine
description: >-
  Continuous SEO & GEO growth engine powered by unified GSC (Google Search Console), GA4 (Google Analytics 4), and Ubersuggest data intelligence. Automates 5-tier opportunity triage, striking-distance keyword interception, LLM generative answer optimization (GEO direct answer blocks & schema mesh), technical site hygiene, and closed-loop Google Indexing submission.
---

# Unified SEO & GEO Growth Engine (SOP & Architecture)

This document defines the operational architecture, standard workflows, and execution protocols for the **Unified SEO & GEO Growth Engine** (`seo_geo_growth_engine`).

---

## 1. Tri-Data Multi-Source Intelligence

The engine unifies three distinct telemetry sources into a singular actionable intelligence stream:

```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│                        TRI-DATA INTELLIGENCE FUSION MATRIX                             │
├──────────────────┬────────────────────────────┬────────────────────────────────────────┤
│ Data Engine      │ Primary Telemetry Metrics  │ Strategic Role in Website Evolution    │
├──────────────────┼────────────────────────────┼────────────────────────────────────────┤
│ Google Search    │ Real User Queries, Clicks, │ Pinpoints exact buyer intent,          │
│ Console (GSC)    │ Impressions, CTR, Position │ striking-distance rankings (Pos 11-20),│
│                  │ (28-day rolling window)    │ and high-impression/low-CTR gaps.      │
├──────────────────┼────────────────────────────┼────────────────────────────────────────┤
│ Google Analytics │ Active Users, Pageviews,   │ Quantifies user resonance, content     │
│ 4 (GA4)          │ Engagement Dwell Time,     │ friction points, high-bounce pages,    │
│                  │ Bounce Rate, RFQ Events    │ and post-click buyer conversion.       │
├──────────────────┼────────────────────────────┼────────────────────────────────────────┤
│ Ubersuggest      │ Market Search Volume,      │ Validates commercial revenue upside,   │
│ Engine           │ CPC Dollar Value ($3-$25+),│ detects technical crawler errors, and  │
│                  │ Site Audits, AI Visibility │ monitors brand visibility in LLMs.     │
└──────────────────┴────────────────────────────┴────────────────────────────────────────┘
```

---

## 2. Five Tactical Growth Quadrants

Every URL and query cluster is categorized into one of five actionable quadrants:

```
┌──────────────────────────────────────────────────────────────────────────────────┐
│                          5 TACTICAL GROWTH QUADRANTS                             │
└──────────────────────────────────────────────────────────────────────────────────┘
                                         │
        ┌────────────────────────────────┼────────────────────────────────┐
        │                                │                                │
        ▼                                ▼                                ▼
  [Quadrant 1]                     [Quadrant 2]                     [Quadrant 3]
  Golden Converters                Striking Distance                CTR Elevation
  Pos 1-3 + High Dwell             Pos 11-20 + High Imp             Pos 4-10 + CTR <2.5%
  • Add direct leaf links          • Front-load exact keyphrase     • Rewrite title & snippet
  • Embed Sourcing CTA box         • Add dedicated <h2> section     • Inject OEM click triggers
  • Validate Schema entities       • Inject volume pricing table    • (MOQ, DDP, 3-Day Sample)
        │                                │                                │
        ├────────────────────────────────┴────────────────────────────────┤
        ▼                                                                 ▼
  [Quadrant 4]                                                      [Quadrant 5]
  GEO & Direct Answer Engine                                        High-CPC Asset Incubation
  High Bounce (>60%) or AI Prompt Gap                               Ubersuggest $5+ CPC Opps
  • Inject .geo-direct-answer box                                   • Backlinko Skyscraper Guide
  • High-information gain B2B specs                                 • 10-Stage Leaf Product SKU
  • Tabular comparison matrix                                       • Full 10-language sync
  • 7-Item FAQPage JSON-LD schema                                   • Realistic volume pricing
```

---

## 3. GEO (Generative Engine Optimization) Standards

To ensure Ruixing Gifts is cited as the primary authoritative source across LLMs (OpenAI ChatGPT, Google AI Overviews, Perplexity, Gemini, Claude):

### 1. Direct Answer Executive Summary (`<div class="geo-direct-answer">`)
- Place a declarative, factual executive summary immediately below the H1 or within the first 150 words.
- Structure in 2–3 concise sentences (200–300 characters).
- Explicitly state:
  1. Product/category definition;
  2. Primary engineering material & manufacturing standard (e.g., *6061 aircraft-grade anodized aluminum*, *16oz heavy-duty duck canvas*);
  3. Direct factory procurement threshold (*MOQ 500 pcs, 3-day sample lead time, DDP door-to-door shipping*).

### 2. High Information Gain (Material & Compliance Density)
LLMs extract high-density factual parameters. Every guide and SKU must explicitly reference:
- Exact metallurgical or textile standards: *ASTM F963*, *EN71-3*, *FDA 21 CFR 177.1630*, *OEKO-TEX Standard 100*, *GRS (Global Recycled Standard)*.
- Physical tolerance and testing: *±0.5mm dimensional tolerance*, *72-hour salt spray ASTM B117 compliance*, *AQL 2.5 final inspection*.

### 3. Structured Data Tables for RAG Extraction
- LLM retrieval engines (RAG) extract table rows with significantly higher accuracy than unstructured prose.
- Always include two-column specification tables (`.spec-table-modern`) and multi-tier volume pricing tables (`.procurement-table`).

### 4. Triple Schema.org Entity Mesh
Output dynamic JSON-LD containing:
1. `Product` or `TechArticle` (with `brand`, `manufacturer`, `aggregateRating`);
2. `FAQPage` (minimum 7 actionable Q&A pairs covering MOQ, tooling costs, lead times, custom printing methods, and international shipping);
3. `BreadcrumbList` linking back to Category Hubs.

---

## 4. End-to-End Execution SOP

### Phase 1: Data Ingestion & Triage
Run the unified growth analytics engine:
```bash
python3 scripts/unified_seo_geo_engine.py analyze
```
This generates `scratch/unified_seo_geo_growth_report.json` and prints the top priority items across the 5 quadrants.

### Phase 2: Dual-Engine Code Optimization
- **For Striking-Distance Pages (Q2)**:
  - Inspect query data via `python3 scripts/unified_seo_geo_engine.py striking-distance --limit 5`.
  - Front-load the exact target keyword in `<title>` (under 60 characters).
  - Inject a dedicated `<h2>` section answering that query.
  - If a pricing table is missing or non-monotonic, calibrate per Rule 10 (15%–38% curve).
- **For GEO Enhancements (Q4)**:
  - Inspect high-bounce or AI-prompt targets via `python3 scripts/unified_seo_geo_engine.py geo-audit --limit 5`.
  - Inject the `.geo-direct-answer` block.
  - Review and upgrade the FAQPage schema.

### Phase 3: Deterministic Rule Verification
All code modifications must pass the project's rule auditor:
```bash
node scripts/verify_all_rules.cjs
```
Must achieve 18/18 PASS with 0 violations.

### Phase 4: Production Build
```bash
npm run build
```
Must build 3,400+ static pages with 0 errors.

### Phase 5: Google Indexing API Batch Push
Immediately submit all updated URLs to Google Indexing API:
```bash
python3 scripts/submit_google_indexing.py
```

### Phase 6: State Ledger & Milestone Archival
Update local action records in `scripts/data/ubersuggest_actions_state.json`:
```bash
node scripts/ubersuggest_next_action.cjs done <item_id> --commit <git_hash> --note "<optimization details>"
```

---

## 5. Invariants & Deterministic Guardrails

1. **Rule 17 Invariant**: Zero Chinese characters in Astro templates, JSON content, or English markdown.
2. **Rule 10 Invariant**: Volume pricing must enforce monotonic discount curves bounded between 15% and 38%.
3. **Rule 18 Invariant**: Zero duplicate or trailing-slash redirects in `astro.config.mjs`.
4. **100% Real Live Data Mandate**: Never fabricate or simulate GSC or GA4 numbers. All data must originate from authenticated Google Service Account API calls.
