---
name: CSS Transform Animation Conflict
description: Guidelines on preventing FOUC (Flash of Unstyled Content) or visual glitches when combining CSS transforms with animations.
---

# CSS Transform Animation Conflicts

When building dynamic UI elements like dropdown menus or modals, it is common to use `transform: translate(...)` for positioning (e.g., `left: 50%; transform: translateX(-50%)`).
It is also common to use CSS animations (like `@keyframes fadeIn`) that use `transform: translateY(...)` to slide elements into view.

## The Bug
Applying an `animation` that modifies the `transform` property **overrides** any existing `transform` defined on the element for the duration of the animation.
Once the animation completes, the animation's `transform` is removed, and the element's base `transform` abruptly applies. This causes the element to "flash" or jump horizontally/vertically.

**Bad Example:**
```css
.menu {
  left: 50%;
  transform: translateX(-50%); /* Base positioning */
  animation: slideUp 0.3s ease;
}

@keyframes slideUp {
  from { opacity: 0; transform: translateY(10px); } /* Overrides translateX! */
  to { opacity: 1; transform: translateY(0); } /* Still overrides translateX! */
}
```

## The Solution
Never animate the `transform` property if the element already relies on `transform` for its layout positioning.

**Option 1: Animate a different property (e.g., margin or top/bottom)**
```css
@keyframes slideUp {
  from { opacity: 0; margin-top: 10px; }
  to { opacity: 1; margin-top: 0; }
}
```

**Option 2: Include the base transform in the keyframes**
```css
@keyframes slideUp {
  from { opacity: 0; transform: translateX(-50%) translateY(10px); }
  to { opacity: 1; transform: translateX(-50%) translateY(0); }
}
```

**Option 3: Use nested DOM elements**
Apply the layout `transform` to the parent wrapper, and apply the animation `transform` to the child element.
