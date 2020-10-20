'use strict';

(function () {
  const userDialog = document.querySelector('.setup');
  const setupOpen = document.querySelector('.setup-open');
  const setupClose = userDialog.querySelector('.setup-close');
  const dialogHandle = userDialog.querySelector('.upload');
  const form = userDialog.querySelector('.setup-wizard-form');
  const SETUP_START_POSITION =
  {
    x0: userDialog.offsetTop,
    y0: userDialog.offsetLeft
  };
  window.dialog = {
    setup: userDialog,
    handle: dialogHandle
  };

  const onPopupEscPress = function (evt) {
    if (evt.key === 'Escape' && (document.activeElement.name === undefined
      || (document.activeElement.name !== undefined && document.activeElement.name !== "username"))) {
      evt.preventDefault();
      closeSetupWindow();
    }
  };
  const onPopupEnterPress = function (evt) {
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

  let isFirstRun = true;
  const openSetupWindow = function () {
    userDialog.classList.remove('hidden');
    if (isFirstRun) {
      SETUP_START_POSITION.x0 = userDialog.offsetLeft;
      SETUP_START_POSITION.y0 = userDialog.offsetTop;
      isFirstRun = false;
    } else {
      userDialog.style.top = SETUP_START_POSITION.y0 + 'px';
      userDialog.style.left = SETUP_START_POSITION.x0 + 'px';
    }
    document.addEventListener('keydown', onPopupEscPress);
    document.addEventListener('keydown', onPopupEnterPress);

  };

  const closeSetupWindow = function () {
    userDialog.classList.add('hidden');
    document.removeEventListener('keydown', onPopupEscPress);
    document.removeEventListener('keydown', onPopupEnterPress);
  };


  form.addEventListener('submit', function (evt) {
    window.backend.save(new FormData(form), function () {
      userDialog.classList.add('hidden');
    }, window.util.errorHandler);
    evt.preventDefault();
  });

})();
