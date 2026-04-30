## 2024-03-24 - [Avoid Role Manipulation on Buttons]
**Learning:** Changing a button's role dynamically (e.g., adding `role="alert"` when entering a confirmation state) breaks semantic interpretation for screen readers, effectively hiding its interactive nature.
**Action:** Retain standard button semantics during interactive state changes. Use `aria-expanded`, updated `aria-label`, or a visually hidden `aria-live` region instead of overriding the role.
