let guestsCatItems = document.querySelectorAll('.guests__catalog-item--wrap');
let guestsList = document.querySelectorAll('.guests__list--wrap');
let guestsArrow = document.querySelectorAll('.guests__catalog-arrow');

guestsCatItems.forEach((el) => {
    el.addEventListener('click', () => {
        let content = el.nextElementSibling;
        if (content.style.maxHeight) {
            guestsList.forEach((el) => el.style.maxHeight = null)

        } else {
            guestsList.forEach((el) => el.style.maxHeight = null)
            content.style.maxHeight = content.scrollHeight + 'px'
        }
    })
});