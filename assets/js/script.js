import collapse from "./components/collapse.js";
import fixedMenu from "./components/fixedHeader.js";
import inputValid from "./components/inputValid.js";
import hiddenMenu from "./components/hiddenMenu.js";
import phoneValid from "./components/phoneValid.js";
import formValid from "./components/formValid.js";

function yandexMap() {
    ymaps.ready(init);

    function init() {
        var myMap = new ymaps.Map("map", {
            center: [54.895626, 83.111267],

            zoom: 17,
        });

        myMap.geoObjects.add(new ymaps.Placemark([54.895626, 83.111267]));
    }
}

window.addEventListener("DOMContentLoaded", () => {
    hiddenMenu(
        ".burger",
        "burger--active",
        ".hidden-header-navigation",
        "hidden-header-navigation--active"
    );

    hiddenMenu(
        ".burger-fixed",
        "burger-fixed--active",
        ".hidden-header-navigation",
        "hidden-header-navigation--active"
    );

    collapse(".collapse-link", "collapse-link--active", ".collapse-block");

    fixedMenu(".header-fixed", "header-fixed--active", ".container");

    phoneValid(".input-phone");

    inputValid(".input-name", "text");
    inputValid(".input-phone", "tel");
    inputValid(".input-email", "email");
    inputValid(".input-text", "text");

    formValid("form", "submit");

    yandexMap();
});
