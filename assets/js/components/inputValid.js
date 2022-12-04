const inputValid = (inputSelector, type) => {
    const input = document.querySelector(inputSelector);

    input.addEventListener("input", () => {
        switch (type) {
            case "text":
                input.value.length >= 2
                    ? input.classList.remove("valid-error")
                    : input.classList.add("valid-error");
                break;
            case "tel":
                input.value.length >= 8
                    ? input.classList.remove("valid-error")
                    : input.classList.add("valid-error");
                break;
        }
    });
};

export default inputValid;
