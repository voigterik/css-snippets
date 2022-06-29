const icon = document.querySelector(".js-icon");
const menu = document.querySelector(".js-menu");

const toggleMenu = () => {
    menu.classList.toggle("m-active");
    icon.classList.toggle("m-active");
};

icon.addEventListener("click", toggleMenu);