---
name: ubersuggest-next-action-optimizer
description: >-
  Standard operating procedure and execution blueprint for optimizing the website based on Ubersuggest Next Actions (Site Audit issues and Keyword Opportunities). Guides end-to-end triage, code fixes, Google Indexing submission, and dual-track state tracking to mark actions as Done or Ignore.
---

# Ubersuggest Next Action Optimizer (SOP & Architecture)

This document defines the operational architecture, standard workflows, and execution protocols for the **Ubersuggest Next Action Optimizer** (`ubersuggest_next_action_optimizer`).

---

## 1. Operational Architecture & Lifecycle

```
┌──────────────────────────────────────────────────────────────────────────────────┐
│                   UBERSUGGEST NEXT ACTION OPTIMIZER WORKFLOW                     │
└──────────────────────────────────────────────────────────────────────────────────┘
                                         │
                   1. Fetch Opportunities via MCP
           [call_mcp_tool: ubersuggest -> seo_opportunities]
                                         │
                                         ▼
                   2. Triage & Filter Unprocessed Items
         (Cross-check with scripts/data/ubersuggest_actions_state.json)
                                         │
        ┌────────────────────────────────┼────────────────────────────────┐
        │                                │                                │
        ▼                                ▼                                ▼
  [SITE_AUDIT]               [EXISTING_CONTENT]                    [NEW_CONTENT]
  Technical Fixes            Striking-Distance Interception        High-CPC Skyscraper
  - Duplicate Titles         - Pos 11-20 Keyword Sniping           - New Leaf Product SKU
  - Duplicate Meta           - Title / Meta Front-loading          - Backlinko-grade Guide
  - Missing H1 / 4xx         - H2 / Pricing Table Injection        - 10-Stage Golden Flow
        │                                │                                │
        └────────────────────────────────┼────────────────────────────────┘
                                         │
                                         ▼
                   3. Verification & Code Compliance
                 - node scripts/verify_all_rules.cjs (18/18 PASS)
                 - npm run build (0 errors)
                                         │
                                         ▼
                   4. Google Indexing Push (Batch SOP)
                   - python3 scripts/submit_google_indexing.py
                                         │
                                         ▼
                   5. Mark as Done / Ignore Protocol
         ┌───────────────────────────────┴───────────────────────────────┐
         │                                                               │
   [Mark as DONE]                                                 [Mark as IGNORE]
   • Record in ubersuggest_actions_state.json                     • Record with justification
   • Bind Git commit hash & deploy status                         • Sync to Web UI "Dismiss"
   • Trigger site_audit re-crawl (for audits)                     • Exclude from future runs
```

---

## 2. Ingestion & Triage Protocol

### Step 1: Query Live Next Actions
Query project opportunities using the Ubersuggest MCP:
```json
{
  "ServerName": "ubersuggest",
  "ToolName": "seo_opportunities",
  "Arguments": {
    "project_id": "c2a619d77b2103f0af2a090f0a364c28d384e6428d3a8338a2133fac248e83b2"
  }
}
```

### Step 2: Categorize Opportunities into Action Types
1. **`SITE_AUDIT` (Technical Hygiene)**:
   - High SEO impact errors: `have_title_duplicates`, `duplicate_meta_descriptions`, `absent_h1_tags`, `response_code_4xx`, `have_broken_links_anchor`.
   - Query detailed affected URLs using `site_audit_results(domain: 'fidgetsupply.com', issue: '<issue_id>')`.
2. **`KEYWORD_OPPORTUNITY -> existing_content` (Striking-Distance Interception)**:
   - Keywords ranking in positions 11–20 with established URLs.
   - High commercial intent ($CPC \ge \$3.00$).
3. **`KEYWORD_OPPORTUNITY -> new_content` (Commercial Skyscraper Assets)**:
   - Unmet commercial queries with high volume or high CPC requiring a dedicated Leaf Product SKU (Rule 4) or Backlinko Guide (Rule 16).
4. **`KEYWORD_OPPORTUNITY -> quick_win`**:
   - Low SEO difficulty ($SD \le 30$) with immediate first-page potential.

### Step 3: Filter by Local Ledger
Always check `scripts/data/ubersuggest_actions_state.json` or run:
```bash
node scripts/ubersuggest_next_action.cjs list
```
Only proceed with items whose status is NOT `done` and NOT `ignored`.

---

## 3. Codebase Optimization Guidelines

### A. Technical Site Audit Fixes
- **Duplicate Titles / Meta Descriptions**:
  Check `src/i18n/translations/` for missing multilingual translations. Localize all 9 languages (`de`, `fr`, `es`, `pt`, `ja`, `ko`, `it`, `ar`, `ru`) so that no localized route falls back to the exact English meta title or description.
- **Missing H1 / Heading Hierarchy**:
  Ensure exactly one semantic `<h1>` exists on the page. Section headers must use `<h2>`, and card titles must use `<h3>`.
- **Broken Links / 4xx Errors**:
  Configure mandatory 301 redirects in `astro.config.mjs` (Rule 18) and update internal link anchors.

### B. Existing Content Optimization (Striking Distance)
- **Title Tag Front-Loading**: Place the exact target keyword in the first 35 characters of `metaTitle` (under 60 characters total).
- **Compelling Meta Description**: 150–160 characters containing the target keyword, MOQ, lead time, and core specification.
- **H2 Semantic Section**: Add a dedicated `<h2>` covering the keyword intent with realistic B2B parameters.
- **Volume Pricing & Specs**: Ensure realistic tiered pricing tables (`.procurement-table`) conforming to Rule 10 (15%–38% discount curve).

### C. New Content Creation
- **New Leaf SKU**:
  Adhere strictly to [Product SKU Page Tank Architecture](file:///Users/vivi/Desktop/Milo/Code/ruixing/.agents/skills/product-sku-page/SKILL.md) and Rules 1–18 (10-stage flow, monotonic pricing, zero Chinese characters).
- **New Skyscraper Guide**:
  Adhere strictly to [Insights & Blog Article Architecture](file:///Users/vivi/Desktop/Milo/Code/ruixing/.agents/skills/insights-blog-article/SKILL.md) (Backlinko standards, 6-question protocol, 10-Item FAQ Schema (9–12 FAQs Invariant), dark `#0f172a` CTA box).

---

## 4. Verification & Google Indexing SOP

Every code fix must execute the following deterministic verification chain:
1. **Rule Engine Verification**:
   ```bash
   node scripts/verify_all_rules.cjs
   ```
   Must pass all 18 rules with 0 errors.
2. **Production Build**:
   ```bash
   npm run build
   ```
   Must build cleanly with 0 errors.
3. **Google Indexing API Batch Push**:
   Submit modified/new URLs to Google Indexing API:
   ```bash
   python3 scripts/submit_google_indexing.py
   ```

---

## 5. Dual-Track State Management Protocol: Mark as Done / Ignore

Because Ubersuggest operates with a web-centric task management interface, this skill employs a **Dual-Track Protocol**:

### Track 1: Local Deterministic Ledger (`scripts/data/ubersuggest_actions_state.json`)
The local state file acts as the source of truth for the autonomous development lifecycle.
- **Mark as Done**:
  ```bash
  node scripts/ubersuggest_next_action.cjs done <item_id_or_keyword> --commit <git_hash> --note "Fixed duplicate titles across 9 languages"
  ```
  Transitions status to `done`, locks the resolution timestamp, and records the Git commit hash.
- **Mark as Ignored**:
  ```bash
  node scripts/ubersuggest_next_action.cjs ignore <item_id_or_keyword> --reason "Irrelevant consumer B2C query with zero OEM commercial intent"
  ```
  Transitions status to `ignored`, preserving full auditability.

### Track 2: Ubersuggest Cloud Platform Synchronization
1. **Site Audit Technical Issues**:
   - Call `site_audit(domain: 'fidgetsupply.com')` via Ubersuggest MCP to initiate a re-crawl.
   - Upon crawler verification, Ubersuggest automatically removes resolved errors and recalculates the Health Score.
2. **Keyword Opportunities (Done / Ignore)**:
   - When using Chrome DevTools MCP or manual browser navigation at `https://app.neilpatel.com/en/next-actions`:
     - **Mark as Done**: Click the checkbox / "Mark as Done" button on the target opportunity card.
     - **Ignore**: Click the card's menu icon (`...`) and select "Dismiss" / "Ignore".
   - Once marked in Ubersuggest Web, the item moves into `done_opportunities` or `dismissed_opportunities` in the `seo_opportunities` API response.

---

## 6. CLI Command Reference

The companion script `scripts/ubersuggest_next_action.cjs` provides the following commands:

| Command | Purpose |
| :--- | :--- |
| `node scripts/ubersuggest_next_action.cjs list` | List active Next Actions sorted by priority & ROI |
| `node scripts/ubersuggest_next_action.cjs status` | Display summary counts of Done, Ignored, and Pending actions |
| `node scripts/ubersuggest_next_action.cjs detail <id>` | Show deep diagnostic metrics and affected URLs for an action |
| `node scripts/ubersuggest_next_action.cjs done <id> [options]` | Mark an action as completed in the local ledger |
| `node scripts/ubersuggest_next_action.cjs ignore <id> [options]`| Mark an action as ignored with mandatory justification |
| `node scripts/ubersuggest_next_action.cjs sync` | Synchronize live MCP opportunities with local state |

---

## 7. Deterministic Guardrails & Invariants

1. **Rule 17 Invariant**: Zero Chinese characters in Astro templates, JSON content, or English markdown.
2. **Rule 18 Invariant**: Zero duplicate or trailing slash redirects in `astro.config.mjs`.
3. **No Blind Dismissals**: Every `ignore` action MUST include a business or technical rationale.
4. **Zero Unverified Commits**: Never mark an action as `done` without passing `verify_all_rules.cjs` and `npm run build`.
