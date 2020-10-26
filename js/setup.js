'use strict';
(function () {
  let wizards = [];
  let coatColor = 'rgb(101, 137, 164)';
  let eyesColor = 'black';

  const successHandler = function (data) {
    wizards = data;
    updateWizards();
  };
  const getRank = function (wizard) {
    let rank = 0;

    if (wizard.colorCoat === coatColor) {
      rank += 2;
    }
    if (wizard.colorEyes === eyesColor) {
      rank += 1;
    }

    return rank;
  };
  const namesComparator = function (left, right) {
    if (left > right) {
      return 1;
    } else if (left < right) {
      return -1;
    } else {
      return 0;
    }
  };
  window.wizard.setEyesChangeHandler(function (color) {
    window.wizard.onEyesChange(color);
  });
  window.wizard.setCoatChangeHandler(function (color) {
    window.wizard.onCoatChange(color);
  });

  window.wizard.onEyesChange = window.debounce(function (color) {
    eyesColor = color;
    updateWizards();
  });

  window.wizard.onCoatChange = window.debounce(function (color) {
    coatColor = color;
    updateWizards();
  });

  const updateWizards = function () {
    window.render(wizards.slice().sort(function (left, right) {
      let rankDiff = getRank(right) - getRank(left);
      if (rankDiff === 0) {
        rankDiff = namesComparator(left.name, right.name);
      }
      return rankDiff;
    }));
  };

  window.backend.load(successHandler, window.util.errorHandler);

})();
