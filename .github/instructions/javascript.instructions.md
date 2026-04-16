---
name: "JavaScript-Structure-and-Progressive-Enhancement-Rules"
description: "Use when creating or editing JavaScript files for modular structure, robust event handling, and progressive enhancement in this project."
applyTo: "**/*.js"
---

# JavaScript Structure and Progressive Enhancement Rules

Purpose: Keep JavaScript modular, reliable, and easy for beginners to follow.

## Required Rules

1. Use modern ES6+ syntax.
2. Keep JavaScript in external files.
3. Organise code by feature, with small focused functions.
4. Avoid global variables. Use module scope and clear exports.
5. Add event listeners with named handler functions.
6. Guard against missing DOM elements before attaching listeners.
7. Prefer progressive enhancement. Pages must remain usable if JavaScript fails.
8. Use clear, descriptive names and short comments only where logic is not obvious.

## Event Handling Guidance

1. Query elements once and reuse references.
2. Use event delegation for repeated or dynamic UI items.
3. Prevent default behaviour only when required.
4. Fail safely when optional features are unavailable.

## Module Pattern Example

```javascript
const menuToggleButton = document.querySelector('.site-nav__toggle');
const siteNav = document.querySelector('.site-nav');

function toggleMenu() {
  if (!siteNav) {
    return;
  }

  siteNav.classList.toggle('site-nav--open');
}

if (menuToggleButton && siteNav) {
  menuToggleButton.addEventListener('click', toggleMenu);
}
```
