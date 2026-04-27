## 2026-04-27 - [Inline Destructive Action Confirmation]
**Learning:** For destructive actions like clearing the cart, native browser dialogs (`window.confirm`) can feel abrupt and block the UI thread, breaking the flow of a modern, smooth web app. Inline animated confirmation states with clear "Yes/Cancel" options provide a much more pleasant and non-blocking UX, keeping the user in the context of the app.
**Action:** Always prefer implementing inline, state-driven confirmation dialogs with smooth CSS transitions for destructive actions instead of relying on native browser prompts.
