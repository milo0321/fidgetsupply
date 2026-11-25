---
name: google-indexing-sop
description: >-
  Standard operating procedure for batch-submitting newly published, updated, or renamed URLs to the Google Indexing API using service account credentials.
  Use when the user asks to submit indexing, notify Google, update index status, or after completing a batch of SEO optimizations and pushing to remote.
---

# Google Indexing API Standard Operating Procedure (SOP)

This skill provides the standard workflow and automation script for notifying Googlebot of new or modified URLs via the Google Indexing API (`https://indexing.googleapis.com/v3/urlNotifications:publish`).

---

## 1. Prerequisites & Safety Invariants

1. **Prerequisite Push to Remote**:
   - The agent MUST NOT submit indexing requests for local-only changes. Indexing notifications should ONLY be dispatched AFTER changes are committed, pushed to `origin/main`, and live on `fidgetsupply.com` (`HTTP 200`).
2. **Strict Delta-Only Submission Invariant (`200 requests/day` Quota Protection)**:
   - Every Google Indexing API (`URL_UPDATED`) run MUST submit **ONLY newly added pages and modified pages** (detected via `git diff` or explicitly supplied via `--urls` / `--urls-file`).
   - **NEVER** pad or backfill the queue with untouched historical products, insights, collections, or static hubs.
   - For shared CSS, component, layout, or global dictionary edits, do NOT blast all routes to the Indexing API — rely on GSC Sitemap resubmission (`sitemap-index.xml` / `sitemap-0.xml`) + IndexNow (`node scripts/submit_indexnow.cjs`), or explicitly specify only the affected target URLs via `--urls=...`.
3. **Service Account Credentials**:
   - Uses the authorized service account key stored at `scratch/gsc_credentials.json`.
   - OAuth 2.0 Scopes required: `https://www.googleapis.com/auth/indexing` and `https://www.googleapis.com/auth/webmasters`.

---

## 2. Standard Submission Workflow

When requested to update Google Indexing:

### Step 1: Preview Delta URLs (`--dry-run` Mandatory)
Always preview the exact newly added/modified URLs before hitting the live quota:
```bash
# Auto-diff from lastSubmittedCommit (or HEAD~1)
node scripts/submit_google_indexing.cjs --dry-run

# Or diff from a specific base commit / tag (e.g. start of today's batch)
node scripts/submit_google_indexing.cjs --since=<git-ref> --dry-run

# Or explicitly pass targeted newly added / edited URLs
node scripts/submit_google_indexing.cjs --urls=/new-page,/insights/new-guide --dry-run
```
Verify in dry-run output that ZERO untouched historical URLs are included. Optionally pass `--locales=de,fr,...` only when localized variants of newly added/modified pages should also be pushed.

### Step 2: Execute Delta Submission Script
Run the live submission script (resubmits sitemaps via GSC `PUT` + submits delta URLs to Indexing API):
```bash
node scripts/submit_google_indexing.cjs --since=<git-ref>
# or --urls=... / --urls-file=<path>
```

### Step 3: Verify API Response & Audit Log
1. Confirm GSC Sitemaps returned `204` / `200`, and submitted delta URLs returned `200 OK` (or stop cleanly on `HTTP 429`).
2. Verify the generated output report at `scratch/google_indexing_submit_report.json` (and `scratch/google_indexing_state.json` on clean completion).
3. Report the summary of newly added/modified URLs notified to the user.
