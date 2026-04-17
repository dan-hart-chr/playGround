# Visual-to-Web Conversion Skill

A skill for converting flat image designs, sketches, or wireframes into semantic HTML and accessible CSS.

## Step-by-Step Process

### 1. Visual Analysis
- **Identify Layout Pattern**: Determine if the design uses Flexbox, Grid, or absolute positioning for specific elements.
- **Extract Dimensions**: Catalog widths, heights, margins, and paddings from the design or requirements.
- **Identify Assets**: List required images, icons, and fonts.
- **Color Extraction**: Identify background and foreground colors (HEX/RGB).

### 2. Semantic Mapping
- Map visual components to HTML5 elements:
    - Main container -> `<main>` or `<section>`
    - Titles -> `<h1>` to `<h6>`
    - Body text -> `<p>`
    - Functional sections -> `<nav>`, `<footer>`, `<header>`
    - Images -> `<img>` with descriptive `alt` text.

### 3. Implementation (Mobile-First)
- **Base Styles**: Set up global resets and base typography (follow `css.instructions.md`).
- **File Organization**: Ensure all assets are contextually linked to their corresponding subfolders within the project parent folder (e.g., `projects/marketing-banner/`):
    - Scripts -> `js/` (e.g., `marketing-banner/js/`)
    - Styles -> `css/` (e.g., `marketing-banner/css/`)
    - Images -> `images/` (e.g., `marketing-banner/images/`)
- **Layout Shell**: Create the outer container and verify dimensions.
- **Internal Components**: Build out internal elements from top to bottom.
- **Accessibility**: Ensure logical heading order and sufficient color contrast (follow `accessibility.instructions.md`).

### 4. Technical Refinement
- **Responsive Design**: If the design is a single fixed size, ensure it still behaves reasonably on smaller screens or centers itself.
- **Design Tokens**: Use variables for consistent colors and spacing (follow `design-tokens.instructions.md`).

## Completion Criteria
- [ ] HTML is semantic and contains no inline styles.
- [ ] CSS follows PSR-like structure or project-specific conventions.
- [ ] Images have descriptive alt tags.
- [ ] The final result matches the provided image/sketch dimensions exactly.
- [ ] Accessibility standards (WCAG 2.1 AA) are met.

## Example Prompts
- "Create a responsive webpage from this sketch: [link to image]"
- "Replicate this marketing banner design [image] using a fixed-width container of 300x600."
- "Convert this UI wireframe into a semantic HTML/CSS template."
