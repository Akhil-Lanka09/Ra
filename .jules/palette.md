## 2024-05-08 - [Destructive Action Confirmations]
**Learning:** Native `window.confirm` dialogs are jarring and interrupt the smooth flow. In Next.js applications, inline confirmation states using React state (`useState`) and existing CSS classes or simple inline style animations (like `fadeUp`) offer a much more delightful and integrated user experience.
**Action:** Default to inline, animated state changes for destructive actions (like clearing a cart or deleting an item) instead of native browser popups, maintaining focus and context.
