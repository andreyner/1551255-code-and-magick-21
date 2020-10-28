
'use strict';

window.dialog.handle.addEventListener('mousedown', function (evt) {
  evt.preventDefault();
  let startCoords = {
    x: evt.clientX,
    y: evt.clientY
  };
  let onMouseMove = function (moveEvt) {
    moveEvt.preventDefault();
    dragged = true;
    let shift = {
      x: startCoords.x - moveEvt.clientX,
      y: startCoords.y - moveEvt.clientY
    };
    startCoords = {
      x: moveEvt.clientX,
      y: moveEvt.clientY
    };
    window.dialog.setup.style.top = (window.dialog.setup.offsetTop - shift.y) + 'px';
    window.dialog.setup.style.left = (window.dialog.setup.offsetLeft - shift.x) + 'px';
  };
  let onMouseUp = function (upEvt) {
    upEvt.preventDefault();
    if (dragged) {
      let onClickPreventDefault = function (clickEvt) {
        clickEvt.preventDefault();
        window.dialog.handle.removeEventListener('click', onClickPreventDefault);
      };
      window.dialog.handle.addEventListener('click', onClickPreventDefault);
    }
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);
  };
  document.addEventListener('mousemove', onMouseMove);
  document.addEventListener('mouseup', onMouseUp);
  let dragged = false;
});

