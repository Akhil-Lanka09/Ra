# Bolt's Journal
## 2024-04-14 - Next.js Image Optimization
**Learning:** Some components in this codebase (`ProductCard`, `HoneyCard`) use standard HTML `<img>` tags for displaying images, while others (`PantryCard`, `MangoCard`) correctly use the Next.js `<Image>` component. Standard `<img>` tags bypass Next.js built-in image optimizations (like automatic WebP/AVIF conversion, lazy loading, and responsive sizing), which is a significant performance anti-pattern in a Next.js application, especially given the large size of some local image assets.
**Action:** Replace `<img>` tags with `next/image` components (`<Image fill />`) to take advantage of automatic image optimization, ensuring consistent performance across all product cards.
