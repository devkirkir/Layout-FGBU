const collapse = (trigger, activeClass, expandBlock) => {
    const elem = document.querySelector(trigger),
        block = document.querySelector(expandBlock);

    elem.addEventListener("click", (event) => {
        event.preventDefault();

        elem.classList.toggle(activeClass);

        elem.classList.contains(activeClass)
            ? (block.style.height = block.scrollHeight + "px")
            : (block.style.height = 0);
    });
};

export default collapse;
