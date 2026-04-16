/**
 * form.js
 * Handles contact form submission: validates input, saves data to
 * localStorage, and redirects the user to the thank you page.
 */

const contactForm = document.querySelector('#contact-form');

/**
 * Collect field values from the submitted form.
 *
 * @param {HTMLFormElement} form
 * @returns {{ firstName: string, email: string, comments: string }}
 */
function getFormData(form) {
  const data = new FormData(form);

  return {
    firstName: data.get('firstName').trim(),
    email: data.get('email').trim(),
    comments: data.get('comments').trim(),
  };
}

/**
 * Save the form submission object to localStorage.
 *
 * @param {{ firstName: string, email: string, comments: string }} submission
 */
function saveSubmission(submission) {
  localStorage.setItem('contactFormSubmission', JSON.stringify(submission));
}

/**
 * Handle form submit event: validate, save, and redirect.
 *
 * @param {SubmitEvent} event
 */
function handleSubmit(event) {
  event.preventDefault();

  // Use the browser's built-in constraint validation before proceeding.
  if (!contactForm.checkValidity()) {
    contactForm.reportValidity();
    return;
  }

  const submission = getFormData(contactForm);
  saveSubmission(submission);

  window.location.href = 'thankyou.html';
}

if (contactForm) {
  contactForm.addEventListener('submit', handleSubmit);
}
