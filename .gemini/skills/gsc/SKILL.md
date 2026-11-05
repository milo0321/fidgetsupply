---
name: gsc
description: Main Google Search Console skill for Cafe Supply Chain
---

# Google Search Console & GA4 Unified Analytics Skill (/gsc)

This is the main skill for interacting with Google Search Console & Google Analytics 4 (GA4) Data API for Cafe Supply Chain Co., Ltd.

## Configuration & Credentials:
- Target GSC Domain: `sc-domain:cafesupplychain.com`
- Target GA4 Property: Configured via `GA4_PROPERTY_ID` in `.env`
- Service Account Email: `gsc-analytics-bot@ecopack-sourcing.iam.gserviceaccount.com` (Requires Owner in GSC & Viewer in GA4 Property Access Management)
- Dynamic Unified Engine: `python3 scratch/gsc_ga4_unified_analytics.py`
- Mandatory Policy: Refer to rule `gsc_strict_real_data.md` for 100% authentic data enforcement.
- Report Artifact: Log unified metrics in `scratch/gsc_ga4_unified_report.json` & `CafeSupplyChain_GSC_GA4_Master_Playbook_Report.md`.
