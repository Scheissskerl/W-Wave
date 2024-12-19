// catalog

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
})


// show more

const guestsShowMore = document.querySelector('.guests__button');
const guestsItemsLength = document.querySelectorAll('.guests__card').length;

let guestsItems = 3;

guestsShowMore.addEventListener('click', () => {
    guestsItems += 3;
    const array = Array.from(document.querySelector('.guests__list').children);
    const guestsVisItems = array.slice(0, guestsItems);

    guestsVisItems.forEach(el => el.classList.add('guests__items-visible'));

    if (guestsVisItems.length === guestsItemsLength) {
        guestsShowMore.style.display = 'none';
    }
})