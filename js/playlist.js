let selectField = document.querySelector('.playlist__filter-btn');
let selectText = document.querySelector('.playlist__filter-btn--text');
let filterList = document.querySelector('.playlist__filter-list');
let subgenreList = document.querySelectorAll('.filter-subgenre--list');
let options = document.querySelectorAll('.filter-subgenre--item');
let playlistCard = document.querySelectorAll('.playlists__card');

selectField.onclick = function () {
  selectField.classList.toggle('playlist__filter-btn--active');
  filterList.classList.toggle('playlist__filter-list-visible');
}

document.querySelectorAll(".playlist__filter-style").forEach(md => md.addEventListener('click', () => {
  md.querySelector(".filter-subgenre--list").classList.toggle('filter-subgenre--list-active');
}));

for (option of options) {
  option.onclick = function () {
    selectText.innerHTML = this.textContent;
    filterList.classList.toggle('playlist__filter-list-visible');
  }
}

// filter

options.forEach(option => {

  option.addEventListener('click', event => {

    let filterClass = event.target.dataset['f'];

    playlistCard.forEach(card => {
      if (!card.classList.contains(filterClass)) {
        card.remove();
      }
    })
  })
});

// snippet

function snipet() {

  let snippetAudio = document.querySelectorAll('.playlists__audio');
  let snippetButton = document.querySelectorAll('.playlist__card-snippet');
  let snippetButtonPlay = document.querySelectorAll('.playlist__card-snippet--play');
  let activeButtonInd = 0;

  snippetButton.forEach((button, index) => {
    button.addEventListener('click', () => {
      if (activeButtonInd == 0) {
        activeButtonInd = 1;
        snippetButtonPlay.item(index).innerHTML = "&#9208;";
        snippetAudio.item(index).play();
      } else {
        activeButtonInd = 0;
        snippetButtonPlay.item(index).innerHTML = "&#9658;";
        snippetAudio.item(index).pause();
      }
    })
  });


};

snipet()

// stop song

let snippetAudio = document.querySelectorAll('.playlists__audio');
let snippetButtonPlay = document.querySelectorAll('.playlist__card-snippet--play');


snippetAudio = Array.prototype.slice.call(snippetAudio);

snippetAudio.forEach(addEventListener);

function addEventListener(item) {
  item.addEventListener('play', pauseAllExceptThis);
}

function pauseAllExceptThis(event) {
  snippetAudio.forEach(function (item) {
    if (event.srcElement == item || event.target == item || item.paused)
      return;
    item.pause();
    item.currentTime = 0;
    snippetButtonPlay.item(index).innerHTML = "&#9658;";
  });
}

// show more button

const playListCardMore = document.querySelector('.playlist__button');
const cardLength = document.querySelectorAll('.playlists__card').length;

let card = 12;

playListCardMore.addEventListener('click', () => {
  card += 8;
  const array = Array.from(document.querySelector('.playlists__list').children);
  const visCard = array.slice(0, card);

  visCard.forEach(el => el.classList.add('card-visible'));

  if (visCard.length === cardLength) {
    playListCardMore.style.display = 'none';
  }
})