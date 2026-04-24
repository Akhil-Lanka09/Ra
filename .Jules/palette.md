## 2026-04-24 - [Inline Confirmations vs Native Dialogs]
**Learning:** Using blocking native dialogs like `window.confirm` for destructive actions (e.g., clearing a cart) interrupts the user flow and hurts the smooth, interactive feel of the app.
**Action:** Use inline, animated confirmation states with CSS transitions and React state to ensure the UI remains smooth and non-blocking.
