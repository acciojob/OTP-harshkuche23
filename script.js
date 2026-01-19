const inputs = document.querySelectorAll('.code');

inputs[0].focus();

inputs.forEach((input, index) => {

    input.addEventListener('input', () => {
        // Allow only digits
        input.value = input.value.replace(/[^0-9]/g, '');

        if (input.value && index < inputs.length - 1) {
            inputs[index + 1].focus();
        }
    });

    input.addEventListener('keydown', (e) => {
        if (e.key === 'Backspace' && input.value === '' && index > 0) {
            inputs[index - 1].focus();
        }
    });

});
