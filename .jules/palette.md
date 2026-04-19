## 2024-04-19 - Cart Controls Accessibility
**Learning:** Inline cart controls (`+`, `-`, `✕`) inherently lack context for screen readers when removed from their label context. Quantity text displays also aren't read dynamically when updated without proper ARIA live regions.
**Action:** Always add contextual `aria-label` attributes to icon-only control buttons, and wrap dynamic text like quantities in `aria-live="polite"` so the screen reader announces changes automatically.
