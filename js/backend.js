'use strict';
(function () {
  let URL = 'https://21.javascript.pages.academy/code-and-magick/data';
  let StatusCode = {
    OK: 200
  };
  let TIMEOUT_IN_MS = 10000;

  window.backend = {
    load: function (onSuccess, onError) {
      let xhr = new XMLHttpRequest();
      xhr.responseType = 'json';
      xhr.addEventListener('load', function () {
        if (xhr.status === StatusCode.OK) {
          onSuccess(xhr.response);
        } else {
          onError('Статус ответа: ' + xhr.status + ' ' + xhr.statusText);
        }
      });
      xhr.addEventListener('error', function () {
        onError('Произошла ошибка соединения');
      });
      xhr.addEventListener('timeout', function () {
        onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
      });
      xhr.timeout = TIMEOUT_IN_MS;
      xhr.open('GET', URL);
      xhr.send();
    },
    save: function (data, onSuccess, onError) {
      let xhr = new XMLHttpRequest();
      xhr.responseType = 'json';
      xhr.addEventListener('load', function () {
        if (xhr.status === StatusCode.OK) {
          onSuccess(xhr.response);
        } else {
          onError('Статус ответа: ' + xhr.status + ' ' + xhr.statusText);
        }
      });
      xhr.addEventListener('error', function () {
        onError('Произошла ошибка соединения');
      });
      xhr.addEventListener('timeout', function () {
        onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
      });
      xhr.timeout = TIMEOUT_IN_MS;
      xhr.open('POST', URL);
      xhr.send(data);
    }
  };
})();