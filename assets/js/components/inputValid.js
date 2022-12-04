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
                input.value.replace(/\D/g, "").length >= 11
                    ? input.classList.remove("valid-error")
                    : input.classList.add("valid-error");
                break;
            case "email":
                input.value.length >= 5
                    ? input.classList.remove("valid-error")
                    : input.classList.add("valid-error");
                break;
        }
    });
};

export default inputValid;
