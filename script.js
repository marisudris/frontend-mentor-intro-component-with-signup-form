import { markInvalidInputs } from './js/core.js';
import { renderInvalidInputs } from './js/ui.js';

const form = document.querySelector('.js-form');
const inputs = [...document.querySelectorAll('.js-form input')];

function handleSubmit(evt) {
    const invalidInputs = markInvalidInputs(inputs);
    if (invalidInputs.length > 0) {
        evt.preventDefault();
        renderInvalidInputs(invalidInputs);
    }
}

form.addEventListener('submit', handleSubmit);
