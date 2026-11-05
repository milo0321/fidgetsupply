# Strict String Matching for Data Operations

When writing scripts to match, migrate, or associate data between JSON files, CMS exports, and Astro slugs, **NEVER use fuzzy matching like `slug.includes()` or `indexOf()`**.

Always default to **exact strict equality (`===`)** or strictly scoped regex to prevent false positives where a parent or hub page incorrectly captures all child variants sharing a generic keyword (e.g., "products").
