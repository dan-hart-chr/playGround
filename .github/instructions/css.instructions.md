---
name: "CSS-Responsive-and-Layout-Rules"
description: "Use when creating or editing CSS files for responsive layouts, maintainable styling, and accessible visual design in this project."
applyTo: "**/*.css"
---

# CSS Responsive and Layout Rules

Purpose: Keep styles clean, responsive, and easy to maintain.

## Required Rules

1. Use mobile-first styling as the default approach.
2. Use Flexbox or Grid for layout.
3. Do not use floats for page layout unless maintaining legacy code.
4. Keep CSS in external stylesheet files.
5. Group related selectors and keep specificity low.
6. Use BEM class naming: block__element--modifier.
7. Include responsive breakpoints only when layout needs them.

## Responsive Guidance

1. Write base styles for small screens first.
2. Add media queries progressively for larger screens.
3. Avoid fixed widths that break small viewports.

## Maintainability Guidance

1. Prefer reusable utility and component classes over duplicated rules.
2. Keep spacing, type scale, and colour usage consistent.
3. Remove unused selectors and dead declarations.

## Naming Example

1. Block: card
2. Element: card__title
3. Modifier: card--featured

## Layout Example

```css
/* Mobile first base styles */
.cards {
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr;
}

@media (min-width: 48rem) {
  .cards {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (min-width: 64rem) {
  .cards {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}
```