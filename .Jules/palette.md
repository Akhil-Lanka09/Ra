## 2025-04-29 - Inline Animations for Destructive Actions
**Learning:** Using native browser `window.confirm` dialogs causes a jarring, blocking UX break. Users prefer smooth, inline confirmations that match the application's design system using simple state swaps and CSS transitions.
**Action:** Prefer implementing smooth, animated inline confirmation states (e.g. `max-width` and `opacity` transitions) for destructive UI actions like clearing items, ensuring ARIA attributes like `aria-expanded` and explicit `aria-label`s are updated alongside visual changes.
