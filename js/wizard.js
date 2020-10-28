'use strict';

const COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
const EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
const FIRE_BALL_COLOR = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];


const setupWizard = document.querySelector('.setup-wizard');
const wizardCoat = document.querySelector('.setup-wizard .wizard-coat');
const wizardEyes = document.querySelector('.setup-wizard .wizard-eyes');
const fireball = document.querySelector('.setup-fireball-wrap');

const wizardCoatHidden = document.querySelector('.setup-wizard-appearance').querySelector('input[name="coat-color"]');
const wizardEyesHidden = document.querySelector('.setup-wizard-appearance').querySelector('input[name="eyes-color"]');
const fireBallHidden = document.querySelector('.setup-fireball-wrap').querySelector('input[name="fireball-color"]');


function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

let wizard = {
  onEyesChange: function () { },
  onCoatChange: function () { }
};

setupWizard.addEventListener('click', function (evt) {
  if (evt.target.matches("use")) {
    if (evt.target.className.animVal === wizardCoat.className.animVal) {
      const newColor = COAT_COLOR[getRandomInt(0, COAT_COLOR.length)];
      wizardCoat.style.fill = newColor;
      wizardCoatHidden.value = wizardCoat.style.fill;
      wizard.onCoatChange(newColor);
    } else {
      if (evt.target.className.animVal === wizardEyes.className.animVal) {
        const newColor = EYES_COLOR[getRandomInt(0, EYES_COLOR.length)];
        wizardEyes.style.fill = newColor;
        wizardEyesHidden.value = wizardEyes.style.fill;
        wizard.onEyesChange(newColor);
      }
    }
  }
});
fireball.addEventListener('click', function () {
  fireball.style.background = FIRE_BALL_COLOR[getRandomInt(0, FIRE_BALL_COLOR.length)];
  fireBallHidden.value = FIRE_BALL_COLOR[getRandomInt(0, FIRE_BALL_COLOR.length)];
});

window.wizard = {
  setCoatChangeHandler: function (cb) {
    wizard.onCoatChange = cb;
  },
  setEyesChangeHandler: function (cb) {
    wizard.onEyesChange = cb;
  }
};
