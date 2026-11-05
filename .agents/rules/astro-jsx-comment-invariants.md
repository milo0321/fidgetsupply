# Astro JSX Comment Invariants

Never use HTML comments (`<!-- comment -->`) inside Astro JSX expressions `{condition && ( ... )}`.

In Astro component templates, JSX blocks follow JSX/JavaScript parsing rules. Using HTML comments inside `{...}` results in a fatal Vite compilation error: `[CompilerError] Unexpected token`.

## Rules:
1. **Inside JSX expressions (`{...}`)**: Always use JSX comments: `{/* comment */}`.
2. **Outside JSX expressions**: Standard HTML comments `<!-- comment -->` are valid.
