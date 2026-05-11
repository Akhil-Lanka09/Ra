## 2024-05-11 - [Inline Confirmation UX Pattern]
**Learning:** For destructive actions like "Clear all" in a cart, using a smooth, time-based inline confirmation ("Click to confirm") provides a less jarring experience than standard browser modals while preventing accidental clicks.
**Action:** Always favor inline confirmation states using `useState` and timeouts for primary destructive actions, ensuring to manage timeout cleanup correctly via `useRef` and `useEffect` to avoid race conditions.
