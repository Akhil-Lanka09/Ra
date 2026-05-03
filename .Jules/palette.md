## 2026-05-03 - [Inline Cart Confirmation]
**Learning:** Found that inline CSS transformations combined with `useState` provide a fast and accessible way to handle destructive confirmations without relying on blocking `window.confirm` dialogs, maintaining a smoother flow.
**Action:** Always prefer inline animated confirmations over native browser dialogs for intermediate destructive actions, ensuring ARIA labels update dynamically to reflect the changed requirement for confirmation.
