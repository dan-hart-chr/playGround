---
name: "Design-Tokens-Consistency-Rules"
description: "Use when creating or editing CSS that should use shared design tokens for colour, spacing, and typography consistency."
applyTo: "**/*.css"
---

# Design Tokens Consistency Rules

Purpose: Keep visual styling consistent and scalable through shared tokens.

## Required Rules

1. Define reusable tokens with CSS custom properties in :root.
2. Use tokens for colours, spacing, typography, radius, and shadows.
3. Avoid raw colour values and one-off spacing values in component rules.
4. Use a consistent spacing scale and type scale.
5. Name tokens by purpose, not by specific component names.
6. Keep token names stable to prevent avoidable regressions.

## Token Naming Guidance

1. Prefer semantic names such as --colour-text-primary.
2. Use predictable groups such as --space-*, --font-size-*, --radius-*.
3. Keep naming style consistent across all stylesheets.

## Token Example

```css
:root {
  --colour-text-primary: #1f2937;
  --colour-surface-default: #ffffff;
  --colour-accent-primary: #0b6e4f;

  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-4: 1rem;
  --space-6: 1.5rem;

  --font-size-1: 0.875rem;
  --font-size-2: 1rem;
  --font-size-3: 1.25rem;

  --radius-2: 0.5rem;
}

.card {
  color: var(--colour-text-primary);
  background-color: var(--colour-surface-default);
  padding: var(--space-4);
  border-radius: var(--radius-2);
}
```
