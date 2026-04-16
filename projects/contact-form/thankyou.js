/**
 * thankyou.js
 * Reads the contact form submission from localStorage and renders
 * the user's details inside the thank you panel.
 */

const panel = document.querySelector('#thankyou-panel');

/**
 * Retrieve and parse the saved submission from localStorage.
 *
 * @returns {{ firstName: string, email: string, comments: string } | null}
 */
function loadSubmission() {
  const raw = localStorage.getItem('contactFormSubmission');

  if (!raw) {
    return null;
  }

  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

/**
 * Safely create a text node so no HTML injection is possible.
 *
 * @param {string} text
 * @returns {Text}
 */
function safeText(text) {
  return document.createTextNode(text);
}

/**
 * Build and return a single summary row element.
 *
 * @param {string} label
 * @param {string} value
 * @returns {HTMLDivElement}
 */
function buildSummaryRow(label, value) {
  const row = document.createElement('div');
  row.className = 'summary__row';

  const labelEl = document.createElement('span');
  labelEl.className = 'summary__label';
  labelEl.appendChild(safeText(label));

  const valueEl = document.createElement('p');
  valueEl.className = 'summary__value';
  valueEl.appendChild(safeText(value));

  row.appendChild(labelEl);
  row.appendChild(valueEl);

  return row;
}

/**
 * Render the submission details into the thank you panel.
 *
 * @param {{ firstName: string, email: string, comments: string }} submission
 */
function renderSubmission(submission) {
  const message = document.createElement('p');
  message.className = 'thankyou-panel__message';
  message.appendChild(safeText(`Thank you, ${submission.firstName}!`));

  const intro = document.createElement('p');
  intro.className = 'thankyou-panel__intro';
  intro.appendChild(safeText('Here is a summary of the details you submitted:'));

  const summary = document.createElement('div');
  summary.className = 'summary';
  summary.setAttribute('role', 'region');
  summary.setAttribute('aria-label', 'Submission summary');

  summary.appendChild(buildSummaryRow('First name', submission.firstName));
  summary.appendChild(buildSummaryRow('Email address', submission.email));
  summary.appendChild(buildSummaryRow('Comments', submission.comments));

  const backLink = document.createElement('a');
  backLink.className = 'thankyou-panel__back-link';
  backLink.href = 'index.html';
  backLink.appendChild(safeText('Submit another message'));

  panel.appendChild(message);
  panel.appendChild(intro);
  panel.appendChild(summary);
  panel.appendChild(backLink);
}

/**
 * Render a fallback notice when no submission data is found.
 */
function renderFallback() {
  const notice = document.createElement('p');
  notice.className = 'notice';
  notice.appendChild(
    safeText('No submission data was found. Please go back and fill in the form.')
  );

  const backLink = document.createElement('a');
  backLink.className = 'thankyou-panel__back-link';
  backLink.href = 'index.html';
  backLink.appendChild(safeText('Go to the contact form'));

  panel.appendChild(notice);
  panel.appendChild(backLink);
}

if (panel) {
  const submission = loadSubmission();

  if (submission) {
    renderSubmission(submission);
  } else {
    renderFallback();
  }
}
