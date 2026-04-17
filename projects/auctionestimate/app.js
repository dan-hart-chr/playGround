// FAQ Accordion
// Handles expand/collapse of individual FAQ items.
// Each item is independent — multiple can be open at once.

const accordionTriggers = document.querySelectorAll('.accordion__trigger');

function toggleAccordionItem(trigger) {
  const panel = document.getElementById(trigger.getAttribute('aria-controls'));

  if (!panel) {
    return;
  }

  const isExpanded = trigger.getAttribute('aria-expanded') === 'true';

  trigger.setAttribute('aria-expanded', String(!isExpanded));

  if (isExpanded) {
    panel.hidden = true;
  } else {
    panel.hidden = false;
  }
}

accordionTriggers.forEach(function (trigger) {
  trigger.addEventListener('click', function () {
    toggleAccordionItem(trigger);
  });
});
