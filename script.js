const inputs = document.querySelectorAll(".code");

// Focus first input on load
inputs[0].focus();

inputs.forEach((input, index) => {

    input.addEventListener("keydown", (e) => {

        // Allow only digits
        if (e.key >= "0" && e.key <= "9") {
            input.value = "";

            setTimeout(() => {
                if (index < inputs.length - 1) {
                    inputs[index + 1].focus();
                }
            }, 10);
        }

        // Backspace behavior
        if (e.key === "Backspace") {
            if (input.value === "" && index > 0) {
                inputs[index - 1].value = "";
                inputs[index - 1].focus();
            }
        }
    });

});
