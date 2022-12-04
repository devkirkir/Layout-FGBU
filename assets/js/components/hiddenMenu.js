const hiddenMenu = (
    trigger,
    triggerActiveClass,
    menuSelector,
    menuActiveClass
) => {
    const burger = document.querySelector(trigger),
        menu = document.querySelector(menuSelector),
        body = document.querySelector("body");

    function toggleMenu() {
        burger.classList.toggle(triggerActiveClass);
        menu.classList.toggle(menuActiveClass);
        body.classList.toggle("overflow-hidden");
    }

    burger.addEventListener("click", toggleMenu);
};

export default hiddenMenu;
