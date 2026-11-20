---
name: b2b-5w-data-cro-protocol
description: >-
  Global mandatory 5W (5-Whys) Data-Backed Root Cause Analysis & Subtraction-First CRO/SEO Protocol for all B2B manufacturing and sourcing websites (FidgetSupply, CarrySourcing, RuixingGifts, EcoPack, CafeSupplyChain, GetEIE). Activate whenever analyzing GSC, GA4, and Ubersuggest data, diagnosing why traffic has not triggered inquiries, or planning SEO/CRO optimizations.
---

# B2B 5W (5-Whys) Data-Backed Root Cause Analysis & Subtraction-First CRO/SEO Protocol

Whenever analyzing GSC (Google Search Console), GA4 (Google Analytics 4), and Ubersuggest telemetry—or diagnosing why organic clicks have not yet converted into inquiries—you MUST apply the **5W Method (Who / Where / Why / What Evidence / Which Metric)** before proposing or executing any code changes.

Never optimize blindly, never fabricate hypotheses detached from telemetry, and never pile on redundant CTA buttons.

---

## 1. The Mandatory 5W Diagnostic Framework

### W1 — WHO & WHAT QUERY INTENT (Who is clicking, and what did they actually search?)
Cross-reference GSC clicked queries and landing pages to classify traffic into three distinct intent buckets:
1. **B2C Single-Piece Hobbyist / Informational Queries** (e.g., singular product terms like `"fidget spinner"`, `"canvas tote bag"`, `"coffee dripper"` without wholesale modifiers):
   - 85%–95% of visitors searching singular generic nouns want to buy 1 piece for personal use.
   - When they land on a factory B2B page showing `MOQ 50 pcs` or `MOQ 500 pcs`, they will browse photos for 30–180 seconds out of curiosity, then leave without clicking RFQ. **This is healthy B2B MOQ qualification—do not misinterpret B2C non-conversion as a broken form.**
2. **Mid-Funnel Catalog Explorers / Evaluators**:
   - Visitors landing on `/`, `/products`, or `/collections/[slug]` who view 2–4 pages and dwell for 60–200+ seconds. They are shortlisting models and need a low-friction way to grab a **Full Catalog PDF Price Sheet** or **1-Pc Evaluation Sample** without filling out a 7-field form.
3. **True BOFU B2B Commercial Queries** (`"wholesale..."`, `"manufacturer"`, `"oem supplier"`, `"custom logo..."`, `"bulk..."`, `"factory direct"`):
   - **Sample Size Benchmark**: Industry standard B2B organic conversion rate for pure commercial queries is **2%–4% (1 inquiry per 25–50 pure B2B clicks)**. Always report the exact cumulative count of pure B2B clicks vs. this 25–50 click threshold.

---

### W2 — WHERE IN THE GA4 EVENT FUNNEL DID THEY STOP? (Exact Event Verification)
Before touching any UI or form code, query exact GA4 event counts across the funnel:

```text
[1] page_view
 └──► [2] engaged_read_8s / page_dwell (10s–200s+) / scroll_depth (50%–90%)
       └──► [3] wholesale_navigation_click (browsing between collections/SKUs)
             └──► [4] rfq_cta_click / whatsapp_direct_click / tier_cell_select (CTA Button Clicks)
                   └──► [5] rfq_form_start (Focusing an input field)
                         └──► [6] generate_lead / whatsapp_lead_capture (Completed Inquiry)
```

- **Case A (`rfq_cta_click > 0`, `rfq_form_start > 0`, `generate_lead = 0`)**:
  - Visitors clicked the CTA button and started typing, but abandoned the form. **Root Cause**: Form friction, too many required fields, or validation/submission errors.
- **Case B (`engaged_read_8s > 0`, `page_dwell > 30s`, `scroll_depth > 0`, but `rfq_cta_click = 0` and `rfq_form_start = 0`)**:
  - Visitors read and scrolled for a long time, **but never clicked a single CTA button**. **Root Cause**: Either (1) Intent Mismatch (B2C visitor filtered by MOQ), (2) Passive Browsing Inertia (no exposed input field on screen—everything is hidden behind a button click), or (3) Choice Paralysis from button clutter.

---

### W3 — WHY DID THEY DO (OR NOT DO) IT? (Root Motivation vs. Visual Noise)
Ask "Why?" five times until hitting the behavioral root cause:
1. *Why are there 0 inquiries despite 10 clicks?* → Because `rfq_cta_click = 0` (no one clicked a CTA button).
2. *Why did no one click a CTA button despite 49s–220s dwell time?* → Check the landing page + query AND check the UI button density.
3. *Why didn't the catalog browser (who spent 129s on `/products`) leave their email?* → Because there was no exposed email input box on `/products`, and passive browsers rarely click a "Contact Us" button that navigates away from the catalog.
4. *Why didn't the product page visitor click any of the buttons on the PDP?* → Because piling 15–20 clickable buttons/chips/CTAs (3 WhatsApp buttons, 3 Request Quote buttons, calculator buttons, micro-links) into one column causes **Choice Paralysis (选择瘫痪)** and visual dilution.
5. *Why did the price or button wrap awkwardly?* → Because cramming a long localized button (`Lock Price on WhatsApp`) inside a 3-column calculator row squeezes the price display (`$196.00 USD`).

---

### W4 — WHAT EVIDENCE JUSTIFIES THE OPTIMIZATION? (Subtraction-First CRO & Precision SEO)
Every action item in your execution plan MUST cite the exact GA4 event count or GSC query row that justifies it:

1. **Subtraction-First PDP UI (Less Clutter = Higher Focus)**:
   - **NEVER** place more than **1 primary CTA button row** (`Request Wholesale Quote` + `WhatsApp Inquiry`) and **1 already-exposed 1-field instant input box** (`[ Enter Work Email or WhatsApp... ] [ ⚡ Get Quote & PDF → ]`) in the Product Detail Page (PDP) right column.
   - **NEVER** put a duplicate top action strip above the product overview or a third WhatsApp button inside the price calculator summary row.
   - Keep the price calculator summary row strictly **2 columns (`Unit Factory Price` on the left, `Est. Batch Subtotal` on the right)** with `white-space: nowrap` so prices never wrap across 2 lines in any of the 18+ languages.
   - Make the left product gallery `position: sticky; top: 86px;` on desktop with an engineering & compliance summary card underneath so left and right columns stay visually balanced during scrolling.
2. **Zero-Click Exposed Input + Non-Intrusive Proactive Capture**:
   - Embed a clean, single-field inline capture bar (`.inline-quick-sheet-form`) above catalog grids (`/products`, `/collections/[slug]`) and on PDPs so buyers can type their email/WhatsApp with **0 preliminary clicks**.
   - Use a session-capped (max 1x per session) **24-second Engaged-Reader + Desktop Exit-Intent** modal prompt for visitors who read deeply (`>24s` + scroll) without clicking.
3. **B2B Query Consolidation & Striking-Distance Sniping**:
   - When GSC reveals new commercial queries at Pos 6–20 (e.g., `"wholesale affordable fidget spinners with logos"`, `"custom logo..."`, `"manufacturer"`), consolidate them onto the highest-converting Category Hub or BOFU Guide with exact 40-word GEO Direct Answers and EXW price bands.

---

### W5 — WHICH METRIC VALIDATES SUCCESS IN THE NEXT COHORT?
Every optimization report must conclude with clear, falsifiable telemetry targets for the next 24–72 hours:
- Track whether `proactive_rfq_prompt`, `rfq_form_start`, or inline `.inline-quick-sheet-form` submissions (`generate_lead`) trigger on engaged sessions (`>24s`).
- Track the ranking movement (`Pos`) and CTR of the newly sniped B2B commercial queries in GSC.
