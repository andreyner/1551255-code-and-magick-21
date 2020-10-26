'use strict';
(function () {
  const fragment = document.createDocumentFragment();
  const PLAYER_COUNT = 4;
  const playerTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

  const playerList = document.querySelector('.setup-similar-list');

  let createDOMPlayer = function (player) {
    let newPlayer = playerTemplate.cloneNode(true);
    newPlayer.querySelector('.setup-similar-label').textContent = player.name;
    newPlayer.querySelector('.wizard-coat').style.fill = player.colorCoat;
    newPlayer.querySelector('.wizard-eyes').style.fill = player.colorEyes;
    return newPlayer;
  };

  window.render = function (wizards) {
    playerList.innerHTML = '';
    for (let i = 0; i < PLAYER_COUNT; i++) {
      fragment.appendChild(createDOMPlayer(wizards[i]));
    }
    playerList.appendChild(fragment);
    window.dialog.setup.querySelector('.setup-similar').classList.remove('hidden');
  };
})();
