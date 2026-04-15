## 2024-05-18 - Toast Exit Animation UX
**Learning:** Toast notifications that disappear instantly break the user's focus and make the UI feel jittery, especially when they have an entry animation. A brief exit animation helps the user's eye track the disappearance smoothly. Handling this in React requires transitioning state before unmounting.
**Action:** When adding toast or modal components, always verify both entry and exit animations are implemented. Use a two-step state process (e.g. `isClosing`) to trigger CSS exit animations before removing the element from the DOM.
