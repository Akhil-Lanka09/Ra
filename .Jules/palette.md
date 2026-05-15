## 2024-05-15 - [Destructive Action Inline Confirmation]
**Learning:** For destructive actions (like clearing a cart), standard `window.confirm` dialogs are disruptive. Replacing them with an inline, timed "Click to confirm" state provides a much smoother user experience, particularly when avoiding custom CSS.
**Action:** When implementing similar inline confirmations, always tie the interactive state text clearly to an updated `aria-label` attribute on the button to preserve accessibility, and utilize a `useRef` to safely track and clear the reset timeout if the component unmounts.
