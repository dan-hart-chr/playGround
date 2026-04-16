---
name: "Accessibility-WCAG-2.1-AA-Rules"
description: "Use when creating or editing HTML, CSS, or JavaScript that must meet WCAG 2.1 AA accessibility expectations in this project."
applyTo:
  - "**/*.html"
  - "**/*.css"
  - "**/*.js"
---

# Accessibility WCAG 2.1 AA Rules

Purpose: Ensure interfaces are usable, perceivable, and operable for all users.

## Required Rules

1. Use semantic HTML elements and correct heading order.
2. Ensure every form control has an associated label.
3. Provide meaningful alt text for informative images.
4. Preserve keyboard navigation for all interactive controls.
5. Ensure visible focus states for keyboard users.
6. Meet WCAG 2.1 AA contrast requirements for text and UI components.
7. Do not rely on colour alone to communicate state or meaning.
8. Respect reduced motion preferences for animation and transitions.
9. Announce dynamic status changes appropriately when needed.

## Keyboard and Focus Guidance

1. Use native interactive elements first.
2. If custom controls are required, include correct roles and keyboard support.
3. Do not remove focus outlines without providing a clear replacement style.

## Motion Preference Example

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```
