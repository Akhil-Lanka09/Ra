## 2024-05-18 - Missing ARIA Labels on Qty Controls
**Learning:** Found an opportunity to improve the accessibility of cart quantity buttons (`+` and `-`). Because they use plain text characters `+` and `-` inside an aural context, screen readers might not correctly interpret them.
**Action:** Add descriptive ARIA labels to the increment and decrement buttons in `app/cart/page.tsx` for better screen reader accessibility. Also, I'll review other buttons to ensure they have accessible labels.
