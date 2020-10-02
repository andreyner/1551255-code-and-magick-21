'use strict';
let PLAYERS_FIRST_NAME = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
let PLAYERS_LAST_NAME = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
let COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
let EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
let fragment = document.createDocumentFragment();
const PLAYER_COUNT = 4;

let playerTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

let playerList = document.querySelector('.setup-similar-list');
let userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

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

let executeCommonLogic = function () {
  createPlayers();
  userDialog.querySelector('.setup-similar').classList.remove('hidden');
};

executeCommonLogic();
