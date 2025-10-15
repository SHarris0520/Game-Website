'use strict';

const letterDiv = document.querySelector('.letter-div');
const hintButton = document.querySelector('.hint-btn');
const resetButton = document.querySelector('.reset-btn');
const hintDiv = document.querySelector('.hint-div');
const hintText = document.querySelector('.hint-txt');
const liveSpan = document.querySelector('.lives');
const wordDiv = document.querySelector('.word-div');
const notif = document.querySelector('.notif');
const notifContent = document.querySelector('.notif-content');
const notifSpan = document.querySelector('.notif-span');
const playAgain = document.querySelector('.notif-btn');


let letters;

let lives;

const words = new Map([
 ['strawberry', 'Popularly paired with bananas.'],
 ['apple', 'What fell on Issac Newtons head?'],
 ['dragonfruit', 'Hot-pink fruit'],
 ['grape', 'Used to make an alcoholic drink.'],
 ['orange', 'Vitamin C'],
 ['kiwi', 'Half of the Capri-Sun flavor strawberry-____.'],
 ['banana', 'You can make a bread with it.'],
 ['raspberry', 'They mold fast.'],
 ['blackberry', 'Similar to raspberries.'],
 ['blueberry', 'They are small and can be really tart or really sweet.'],
 ['corn', 'Eaten on a cob sometimes.'],
 ['carrot', 'Used as apart of British WW2 propaganda.'],
 ['potato', 'Versatile stem vegetable that grows underground.'],
 ['beans', 'In ancient Greece public officials were elected by counting what?'],
 ['lettuce', 'You can buy a head of what at the grocery store?'],
 ['peas', 'Grow in a pod.'],
 ['zucchini', 'Also called a courgette.'],
 ['spinach', 'Best eaten sautéed in my opinion.'],
 ['onion', 'They make you cry.'],
 ['mushroom', 'Some are poisonous.'],
]);


const word_list = [...words.keys()];


const getRandomWord = function (list) {
  return list[Math.floor(Math.random() * word_list.length)];
};


let select_word;

const init = function (state){
  wordDiv.innerHTML = '';
  if (state === 'start') {
    for (const i of 'abcdefghijklmnopqrstuvwxyz') {
      const html = `<button class="alpha">${i.toUpperCase()}</button>`;
      letterDiv.insertAdjacentHTML('beforeend', html);
    }
  } else if (state === 'reset') {
    letters.forEach(btn => {
      btn.classList.remove('disabled');
      hintDiv.classList.add('hidden');
      notif.classList.add('hidden');
    });
  }
  select_word = getRandomWord(word_list);
  lives = 5;

  
  letters = document.querySelectorAll('.alpha');
  liveSpan.textContent = lives;
  for (let i = 0; i < select_word.length; i++) {
    const html = `<p class="word">_</p>`;
    wordDiv.insertAdjacentHTML('beforeend', html);
  }
};

init('start');

const showNotif = function (msg) {
  notif.classList.remove('hidden');
  notifSpan.textContent = select_word;
  notifContent.textContent = `You ${msg}`;

};


const decreaseLife = function () {
  lives--;
  liveSpan.textContent = lives;
  if (lives === 0) {
    showNotif('Lost!');
  }
};


const getindexes = function (letter) {
  let indexes = [];
  [...select_word].forEach((val, i) => {
    if (val === letter) {
      const index = i;
      indexes.push(index);
    }
  });

  return indexes;
};


const checkWord = function () {
  let val = true;
  for (let i = 0; i < wordDiv.children.length; i++) {
    if (wordDiv.children[i].textContent === '_') {
      val = false;
    }
  }
  return val;
};


const letterPress = function () {
  const letter = this.textContent.toLowerCase();

  if (select_word.includes(letter)) {
    const indexes_list = getindexes(letter);
    indexes_list.forEach((val, i) => {
      wordDiv.children[val].textContent = this.textContent;
    });
    if (checkWord()) showNotif('Won!');
  } else {
    decreaseLife();
  }
  this.classList.add('disabled');
};


letters.forEach(btn => {
  btn.addEventListener('click', letterPress);
});


hintButton.addEventListener('click', function () {
  hintDiv.classList.remove('hidden');
  hintText.textContent = words.get(select_word);
});


resetButton.addEventListener('click', function () {
  init('reset');
});


playAgain.addEventListener('click', function () {
  init('reset');
});