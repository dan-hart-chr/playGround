---
name: "HTML-Structure-and-Asset-Rules"
description: "Use when creating or editing HTML pages that require HTML5 semantic layout, external CSS and JavaScript files, and deferred script loading from the head element."
applyTo: "**/*.html"
---

# HTML Structure and Asset Rules

Purpose: Keep page structure semantic and keep assets modular.

## Required Rules

1. Use HTML5 for every page.
2. Use semantic structural elements for layout.
3. Keep all CSS in separate stylesheet files.
4. Keep all JavaScript in separate JavaScript files.
5. Add JavaScript file links in the head element.
6. Add the defer attribute to every script tag in the head.

## Semantic Layout Guidance

Use structural tags such as:

1. header
2. nav
3. main
4. section
5. article
6. aside
7. footer

Do not build layout with generic wrappers when a semantic element fits the content purpose.

## Asset Linking Example

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Page Title</title>
  <link rel="stylesheet" href="styles.css">
  <script src="app.js" defer></script>
</head>
<body>
  <header>
    <h1>Example</h1>
  </header>
  <main>
    <article>
      <p>Content goes here.</p>
    </article>
  </main>
  <footer>
    <p>Footer</p>
  </footer>
</body>
</html>
```