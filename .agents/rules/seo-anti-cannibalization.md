# SEO Keyword Anti-Cannibalization & Pre-Creation Verification

Before proposing or creating any new product landing page (`/products/[slug]/`), collection hub (`/[slug]/`), or insight guide (`/insights/[slug]/`), the agent MUST perform a strict pre-creation duplication audit across `src/content/products/`, `src/content/insights/`, and `src/pages/`.

---

## 1. The Core Principle: Upgrade Existing Over Duplicate Creation
- **Prohibition**: NEVER create a new article or product that targets the same core search query or semantic intent as an existing file. Doing so causes **Keyword Cannibalization (关键词自相残杀)**, splits internal/external PageRank, and depresses Google search rankings.
- **Mandatory Audit Workflow**:
  1. Use `find_by_name` or `grep_search` across `src/content/` to inspect all existing slugs, titles, and target keywords.
  2. **If a matching/similar page already exists**:
     - 🛑 **DO NOT** create a new file.
     - ✅ **DO** update and strengthen the existing document (e.g. adding new high-impression GSC query keywords into existing H2 subheadings, updating the metaTitle, or enriching the pricing/specs).
  3. **If NO matching page exists (True White Space)**:
     - Proceed with net-new file creation following the corresponding Skill architecture.

---

## 2. Meta Title & Meta Description Golden Length Limits

To prevent SERP truncation on Google (mobile and desktop) and eliminate Ubersuggest technical SEO audit warnings:

| Meta Field | Golden Character Range | Key Structural Invariants | Prohibitions |
| :--- | :--- | :--- | :--- |
| **`metaTitle`** | **40 ~ 53 characters** (Strict Max: 58) | Primary keyword frontloaded + ` \| FidgetSupply` suffix. | No keyword stuffing; no generic ellipses; no repeating brand name twice. |
| **`metaDescription`** | **135 ~ 150 characters** (Strict Max: 155) | Frontloaded B2B purchase intent: MOQ (e.g., `Low MOQ 300 pcs`), DDP global shipping, factory direct value proposition. | No ending with trailing conjunctions (`&`, `and`); no generic robotic filler words (`Click here`). |

