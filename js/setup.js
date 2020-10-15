'use strict';
const PLAYERS_FIRST_NAME = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
const PLAYERS_LAST_NAME = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
const COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
const EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
const FIRE_BALL_COLOR = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
const fragment = document.createDocumentFragment();
const PLAYER_COUNT = 4;


const playerTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

const playerList = document.querySelector('.setup-similar-list');

const setupWizard = document.querySelector('.setup-wizard');

const wizardCoat = document.querySelector('.setup-wizard .wizard-coat');
const wizardEyes = document.querySelector('.setup-wizard .wizard-eyes');
const fireball = document.querySelector('.setup-fireball-wrap');

const wizardCoatHidden = document.querySelector('.setup-wizard-appearance').querySelector('input[name="coat-color"]');
const wizardEyesHidden = document.querySelector('.setup-wizard-appearance').querySelector('input[name="eyes-color"]');
const fireBallHidden = document.querySelector('.setup-fireball-wrap').querySelector('input[name="fireball-color"]');

setupWizard.addEventListener('click', function (evt) {
  if (evt.target.matches("use")) {
    if (evt.target.className.animVal === wizardCoat.className.animVal) {
      wizardCoat.style.fill = COAT_COLOR[getRandomInt(0, COAT_COLOR.length)];
      wizardCoatHidden.value = wizardCoat.style.fill;
    } else {
      if (evt.target.className.animVal === wizardEyes.className.animVal) {
        wizardEyes.style.fill = EYES_COLOR[getRandomInt(0, EYES_COLOR.length)];
        wizardEyesHidden.value = wizardEyes.style.fill;
      }
    }
  }
});
fireball.addEventListener('click', function () {
  fireball.style.background = FIRE_BALL_COLOR[getRandomInt(0, FIRE_BALL_COLOR.length)];
  fireBallHidden.value = FIRE_BALL_COLOR[getRandomInt(0, FIRE_BALL_COLOR.length)];
});


function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
let сreatePlayer = function () {
  return {
    'firstName': PLAYERS_FIRST_NAME[getRandomInt(0, PLAYERS_FIRST_NAME.length)],
    'lastName': PLAYERS_LAST_NAME[getRandomInt(0, PLAYERS_LAST_NAME.length)],
    'coatColor': COAT_COLOR[getRandomInt(0, COAT_COLOR.length)],
    'eyesColor': EYES_COLOR[getRandomInt(0, EYES_COLOR.length)]
  };
};

let createDOMPlayer = function (player) {
  let newPlayer = playerTemplate.cloneNode(true);
  newPlayer.querySelector('.setup-similar-label').textContent = player.firstName + ` ` + player.lastName;
  newPlayer.querySelector('.wizard-coat').style.fill = player.coatColor;
  newPlayer.querySelector('.wizard-eyes').style.fill = player.eyesColor;
  return newPlayer;
};

let createPlayers = function () {
  for (let index = 0; index < PLAYER_COUNT; index++) {
    let jsPlayer = сreatePlayer();
    fragment.appendChild(createDOMPlayer(jsPlayer));
  }
  playerList.appendChild(fragment);
};

(function () {
  createPlayers();
  window.dialog.setup.querySelector('.setup-similar').classList.remove('hidden');
})();


