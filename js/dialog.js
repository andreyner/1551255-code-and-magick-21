'use strict';

(function () {
  const userDialog = document.querySelector('.setup');
  const setupOpen = document.querySelector('.setup-open');
  const setupClose = userDialog.querySelector('.setup-close');
  const dialogHandle = userDialog.querySelector('.upload');
  const SETUP_START_POSITION =
  {
    x0: userDialog.offsetTop,
    y0: userDialog.offsetLeft
  };
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

  let IsFirstRun = true;
  let openSetupWindow = function () {
    userDialog.classList.remove('hidden');
    if (IsFirstRun) {
      SETUP_START_POSITION.x0 = userDialog.offsetLeft;
      SETUP_START_POSITION.y0 = userDialog.offsetTop;
      IsFirstRun = false;
    } else {
      userDialog.style.top = SETUP_START_POSITION.y0 + 'px';
      userDialog.style.left = SETUP_START_POSITION.x0 + 'px';
    }
    document.addEventListener('keydown', onPopupEscPress);
    document.addEventListener('keydown', onPopupEnterPress);

  };

  let closeSetupWindow = function () {
    userDialog.classList.add('hidden');
    document.removeEventListener('keydown', onPopupEscPress);
    document.removeEventListener('keydown', onPopupEnterPress);
  };
})();
