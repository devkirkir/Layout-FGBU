const formValid = (formSelector, submitSelector) => {
    const form = document.getElementById(formSelector),
        submitBtn = document.getElementById(submitSelector);

    form.addEventListener("input", () => {
        let data = new FormData(form);

        let name = data.get("name").length,
            number = data.get("number").length,
            email = data.get("email").length,
            text = data.get("text").length,
            checkbox = data.get("checkbox");

        name >= 2 && number >= 12 && email >= 5 && text >= 2 && checkbox == "on"
            ? (submitBtn.disabled = false)
            : (submitBtn.disabled = true);
    });
};

export default formValid;
