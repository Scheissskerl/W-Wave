// active communicatuon like and like count

let li = document.querySelectorAll('.like');
let likeCount = document.querySelectorAll('.podcasts__communication-count--like');
let likeIcon = document.querySelectorAll('.icon-like');

li.forEach((like, index) => {

  like.addEventListener('click', () => {
    console.log(like)
    likeIcon.item(index).classList.toggle('icon-like--active');
    let current = Number(likeCount.item(index).innerHTML);
    let count = likeIcon.item(index).classList.contains('icon-like--active') ? 1 : -1;
    likeCount.item(index).innerHTML = current + count;
  })
});

// to send

let toSend = document.querySelectorAll('.podcasts__communication-item--links');
let toSendMenu = document.querySelectorAll('.podcasts__toSend-list');

toSend.forEach((send, index) => {
  send.addEventListener('click', () => {
    toSendMenu.item(index).classList.toggle('open-toSend-list')
  })
});

for (toSendItem of toSendMenu) {
  toSendItem.addEventListener('click', () => {
    toSendMenu.classList.toggle('open-toSend-list')
  })
};

// show more

const showMore = document.querySelector('.podcasts__button');
const itemsLength = document.querySelectorAll('.podcasts__card').length;

let items = 8;

showMore.addEventListener('click', () => {
  items += 4;
  const array = Array.from(document.querySelector('.podcasts__list').children);
  const visItems = array.slice(0, items);

  visItems.forEach(el => el.classList.add('items-visible'));

  if (visItems.length === itemsLength) {
    showMore.style.display = 'none';
  }
})