---
name: GPU Hardware Acceleration for Heavy CSS
description: Prevent scroll lag by hardware accelerating heavy CSS composite operations.
trigger: always_on
---
# GPU Hardware Acceleration for Heavy CSS

When applying heavy CSS composite operations—specifically the combination of `overflow: hidden`, `border-radius`, and `box-shadow` on large containers, or when using `backdrop-filter: blur()`—you MUST add `transform: translateZ(0);` (or `will-change: transform;`) to the element to force GPU hardware acceleration. 

This prevents CPU software rendering and severe scroll lag (jank).
