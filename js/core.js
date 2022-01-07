import { isEmpty, isValidEmail } from './utilities.js';

function markInvalidInputs(inputs) {
    return inputs
        .map((input) => {
            if (isEmpty(input.value)) {
                return { input, invalid: true, empty: true };
            }
            if (input.type === 'email') {
                return {
                    input,
                    invalid: !isValidEmail(input.value),
                    invalidEmail: !isValidEmail(input.value),
                };
            }

            return { input, invalid: false };
        })
        .filter((input) => input.invalid);
}

export { markInvalidInputs };
