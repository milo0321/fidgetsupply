# Navigation Dropdown & Mega Menu Hover Invariants

To guarantee pixel-perfect responsiveness, zero false hover triggers, and rock-solid sub-item navigation across all header dropdowns and mega menus:

## 1. No Global-Width Hover Bridges on Static Containers
- **Strict Boundary Scoping**: NEVER attach a `width: 100%` pseudo-element (`::after` or `::before`) to a `position: static` dropdown container. When a container is `static`, `width: 100%` attaches to the nearest positioned ancestor (the entire header container), creating an invisible full-width trigger zone that pops the menu open unexpectedly across the whole navigation bar.
- **Scope to Button Width**: Any hover bridge MUST be attached directly to the positioned trigger element (`.dropdown-toggle` with `position: relative`), ensuring its width matches only the actual button/link text.

## 2. Zero-Gap Vertical Continuity
- **Full Header Height Containers**: Dropdown parent wrappers (`.nav-item-dropdown`) and desktop nav lists (`.nav-desktop`) MUST have `height: 100%` (spanning the full vertical height of the header, e.g., 80px).
- **Eliminate Dead Zones**: When `.nav-item-dropdown` spans `height: 100%`, the mouse cursor remains continuously inside the parent container's `:hover` bounds during the entire downward travel from the centered link text into the menu at `top: 100%`.

## 3. Seamless Top Safety Buffer
- **Sub-Pixel Edge Overlap**: All dropdown panels (`.mega-menu`, `.insights-menu`) MUST include an invisible safety buffer on their top edge:
  ```css
  .dropdown-menu::before {
    content: '';
    position: absolute;
    top: -16px;
    left: 0;
    right: 0;
    height: 16px;
  }
  ```
- **Prevent Animation Replay**: This prevents microsecond hover drops when navigating between columns, cards, or child links inside the dropdown, eliminating menu flickering and repeated `@keyframes fadeIn` triggers.
