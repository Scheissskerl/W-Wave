let burger = document.querySelector('.wrap-burger-line');
let burgerMenu = document.querySelector('.header__nav-menu--burger');
let burgerLink = document.querySelectorAll('.header__menu-link');


burger.addEventListener('click', function () {
    burger.classList.toggle('active');
    burgerMenu.classList.toggle('open');
});

for (link of burgerLink) {
    link.addEventListener('click', function () {
        burger.classList.toggle('active');
        burgerMenu.classList.toggle('open');
    })
};