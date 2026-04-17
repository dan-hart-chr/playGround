# Explaining: const contactForm = document.querySelector('#contact-form');

## Overview

This line queries the DOM to find an HTML element with the `id` attribute set to `contact-form` and stores a reference to it in a variable called `contactForm`. This reference is used throughout the script to access and manipulate the form element.

## Step by Step Logic

1. The `document.querySelector()` method is called, which searches the DOM starting from the root document
2. The selector `'#contact-form'` tells the method to look for an element with `id="contact-form"` (the `#` prefix means "find by ID")
3. If a matching element is found, a reference to that element is returned
4. This reference is stored in the `const` variable `contactForm` for reuse later in the script

## Syntax and Function Notes

- **`document.querySelector()`**: A browser API method that returns the first element matching a CSS selector. It returns `null` if no match is found.
- **`#contact-form`**: A CSS ID selector. The `#` indicates "match elements by their ID attribute."
- **`const`**: Creates a constant variable that cannot be reassigned (though the element object it references can be modified).

## Overall Output

After this line executes, `contactForm` holds a reference to the DOM element `<form id="contact-form">` (if it exists). This allows the script to later attach event listeners to the form and access its methods like `checkValidity()`.

## Potential Pitfalls

- **Null reference**: If no element with `id="contact-form"` exists in the HTML, `contactForm` will be `null`. The script guards against this at line 55 with `if (contactForm) { ... }`, preventing errors when calling methods on a null value.
- **Timing issue**: This query runs as soon as the script loads. If the script executes before the HTML is parsed, the element will not exist yet and `contactForm` will be `null`. This is why modern practice is to load scripts with the `defer` attribute (which delays execution until after HTML parsing completes).
