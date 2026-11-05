# WhatsApp Widget & Instant Chat Invariants

## 1. Environment Variable Conditional Rendering
- Floating WhatsApp widgets, modal dialogs, and direct chat links MUST be conditionally controlled by `PUBLIC_WHATSAPP_NUMBER` (e.g. `import.meta.env.PUBLIC_WHATSAPP_NUMBER`).
- If `PUBLIC_WHATSAPP_NUMBER` is unset, empty, or lacks valid digits, the widget wrapper, button, and scripts MUST NOT be rendered to the DOM at all (0 DOM footprint).
- Contact pages must gracefully fall back to standard telephone or email desks when WhatsApp is disabled.

## 2. WhatsApp URL Pre-fill Formatting & Markdown
- **WhatsApp Native Markdown**: Always format inquiry field labels using native WhatsApp bold syntax (`*Product Needed:* [Value]`).
- **Double Newline Paragraph Separation**: Separate each inquiry field with explicit double newlines (`\n\n`) before URL encoding. Single linebreaks get collapsed into a single mashed paragraph by WhatsApp Web and mobile apps.
- **Carriage Return Normalization**: Always normalize line breaks prior to `encodeURIComponent`:
  ```javascript
  const cleanMessage = rawText.trim().replace(/\r\n/g, "\n").replace(/\r/g, "\n");
  const url = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(cleanMessage)}`;
  ```
