const fixedMenu = (fixedHeaderSelector, activeClass, basicHeaderSelector) => {
    const fixedHeader = document.querySelector(fixedHeaderSelector),
        basicHeader = document.querySelector(basicHeaderSelector);

    window.addEventListener("scroll", (e) => {
        if (window.pageYOffset > 200 && window.innerWidth >= 768) {
            basicHeader.style.display = "none";
            fixedHeader.classList.add(activeClass);
        }

        if (window.pageYOffset <= 200) {
            basicHeader.style.display = "flex";
            fixedHeader.classList.remove(activeClass);
        }
    });

    window.addEventListener("resize", () => {
        if (window.innerWidth <= 768 && window.pageYOffset >= 200) {
            basicHeader.style.display = "flex";
            fixedHeader.classList.remove(activeClass);
        }
    });
};

export default fixedMenu;
