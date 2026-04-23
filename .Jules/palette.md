## 2024-05-14 - Prevent Accidental Cart Clearing (Animated)
**Learning:** Destructive actions like clearing the entire cart were previously missing confirmation dialogs, which could lead to frustrating user experiences if clicked accidentally. Native `window.confirm` dialogs provide friction but offer a jarring, blocking user experience.
**Action:** Implemented a smooth, custom animated inline confirmation state for the `clearCart` function using React state and CSS inline transitions to provide a friction point that maintains a pleasant, non-blocking UI feel.
