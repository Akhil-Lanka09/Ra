## 2024-06-25 - Avoid changing roles for inline confirmations
**Learning:** Changing a button's role to `role="alert"` mid-interaction to show an inline confirmation is an accessibility anti-pattern.
**Action:** Use `aria-live` or keep the native button role and update its `aria-label` instead.
