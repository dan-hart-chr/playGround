// FAQ Accordion
// Toggles answer visibility and updates aria-expanded on each button click.

const faqButtons = document.querySelectorAll('.faq__question');

function toggleFaq(button) {
    const isExpanded = button.getAttribute('aria-expanded') === 'true';
    const answerId = button.getAttribute('aria-controls');
    const answer = document.getElementById(answerId);

    if (!answer) {
        return;
    }

    button.setAttribute('aria-expanded', String(!isExpanded));
    answer.hidden = isExpanded;
}

faqButtons.forEach(function (button) {
    button.addEventListener('click', function () {
        toggleFaq(button);
    });
});
