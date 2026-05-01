## 2024-05-01 - [Animated Inline Confirmation for Destructive Actions]
**Learning:** Using `tabIndex={isClearing ? 0 : -1}` is crucial for animated elements that start visually hidden (opacity 0 / maxWidth 0) to prevent screen readers and keyboard navigation from focusing on them prematurely.
**Action:** Always pair visual hiding (like opacity or width changes) with `tabIndex` manipulation to maintain proper keyboard accessibility flow for interactive elements.
