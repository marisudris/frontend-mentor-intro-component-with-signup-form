function renderInvalidFormGroup(formGroup, input, notificationElem) {
    const inputBlock = formGroup.querySelector('.input-block');

    notificationElem.classList.add('form__notification--visible');
    inputBlock.classList.add('input-block--invalid');
    notificationElem.setAttribute('role', 'alert');
    input.setAttribute('aria-invalid', 'true');

    input.addEventListener(
        'input',
        function () {
            notificationElem.classList.remove('form__notification--visible');
            inputBlock.classList.remove('input-block--invalid');
            notificationElem.removeAttribute('role');
            input.removeAttribute('aria-invalid');
        },
        { once: true }
    );
}

function renderEmpty(input) {
    const formGroup = input.closest('.form__group');
    const notificationElem = formGroup.querySelector('.form__notification');
    renderInvalidFormGroup(formGroup, input, notificationElem);
}

function renderInvalidEmail(input) {
    const formGroup = input.closest('.form__group');
    const notificationElem = formGroup.querySelector(
        '.form__notification--email'
    );
    renderInvalidFormGroup(formGroup, input, notificationElem);
}

function renderInvalidInputs(inputs) {
    inputs.forEach((input) => {
        if (input.empty) {
            renderEmpty(input.input);
            return;
        }
        if (input.invalidEmail) {
            renderInvalidEmail(input.input);
        }
    });
}

export { renderInvalidInputs };
