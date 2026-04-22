## 2024-04-22 - Cart Accessibility
**Learning:** Icon-only buttons for quantity controls and removing items require aria-labels for proper screen reader support, as the visual icons (+, -, ✕) do not have intrinsic semantic meaning. Adding aria-live to the quantity span allows screen readers to announce updates dynamically without requiring focus.
**Action:** Always add aria-labels referencing the specific item being affected to icon-only buttons in list interfaces.
