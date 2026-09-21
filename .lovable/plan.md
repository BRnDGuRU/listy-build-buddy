# Recreate the ListKit homepage

## Scope
- Replace the blank page with a faithful, responsive recreation of the current ListKit homepage.
- Match the blue-and-navy visual system, announcement bar, navigation, oversized headline, calls to action, trust metrics, product demonstration, pricing, proof, process, comparison, feature, and closing sections.
- Recreate key product visuals locally so the page does not depend on hotlinked website assets.
- Add responsive navigation and functional page interactions such as the pricing volume selector and ROI calculator.
- Add ListKit-specific page metadata and retain accessible focus, reduced-motion, and mobile behavior.

## Technical details
- Build the page in the existing TanStack Start home route.
- Define all colors, shadows, typography, and reusable visual treatments as semantic tokens in the global design system.
- Use local React/CSS artwork for the product interface preview and Lucide icons for familiar interface symbols.
- Keep external buttons pointed at the matching ListKit destinations where the source site exposes them.
- Verify the rendered page at desktop and mobile widths, checking layout, interactions, console errors, and overflow.
