'use strict';

(function () {
  const userDialog = document.querySelector('.setup');
  const setupOpen = document.querySelector('.setup-open');
  const setupClose = userDialog.querySelector('.setup-close');
  const dialogHandle = userDialog.querySelector('.upload');

  window.dialog = {
    setup: userDialog,
    handle: dialogHandle
  };

  var onPopupEscPress = function (evt) {
    if (evt.key === 'Escape' && (document.activeElement.name === undefined
      || (document.activeElement.name !== undefined && document.activeElement.name !== "username"))) {
      evt.preventDefault();
      closeSetupWindow();
    }
  };
  var onPopupEnterPress = function (evt) {
    if (evt.key === `Enter` && document.activeElement !== undefined && document.activeElement.className === setupClose.className) {
      evt.preventDefault();
      closeSetupWindow();
    }
  };

  setupOpen.addEventListener('click', function () {
    openSetupWindow();
  });

  setupOpen.addEventListener('keydown', function (evt) {
    if (evt.key === 'Enter') {
      openSetupWindow();
    }
  });

  setupClose.addEventListener('click', function () {
    closeSetupWindow();
  });

  let openSetupWindow = function () {
    userDialog.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);
    document.addEventListener('keydown', onPopupEnterPress);

  };

  let closeSetupWindow = function () {
    userDialog.classList.add('hidden');
    document.removeEventListener('keydown', onPopupEscPress);
    document.removeEventListener('keydown', onPopupEnterPress);
  };
})();
