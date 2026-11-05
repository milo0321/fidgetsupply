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
   - The agent MUST NOT submit indexing requests for local-only changes. Indexing notifications should ONLY be dispatched AFTER the user has manually executed `git push` and changes are live on the production domain (`ruixinggifts.com`).
2. **Service Account Credentials**:
   - Uses the authorized service account key stored at `scratch/gsc_credentials.json`.
   - OAuth 2.0 Scope required: `https://www.googleapis.com/auth/indexing`.

---

## 2. Standard Submission Workflow

When requested to update Google Indexing:

### Step 1: Collect Target URLs
Identify all high-priority URLs modified in the recent session, categorized into:
- New Trend Reports & Sourcing Guides (`/insights/[slug]`)
- New or Refactored Product SKUs (`/products/[slug]`)
- Category Collection Hubs (`/[hub-slug]`)
- URLs with updated Meta Titles / Descriptions (CTR Optimization)

### Step 2: Update and Execute Batch Script
Run the automated submission script:
```bash
python3 scratch/submit_google_indexing.py
```

### Step 3: Verify API Response & Audit Log
1. Ensure all submitted URLs return `200 OK` from Google Indexing API.
2. Verify the generated output report at `scratch/google_indexing_submit_report.json`.
3. Report the summary of successfully notified URLs to the user.
