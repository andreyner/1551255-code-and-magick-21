'use strict';
const CLOUD_X0 = 100;
const CLOUD_Y0 = 10;
const CLOUD_H = 270;
const CLOUD_W = 420;
const SHADOW_SHIFT = 10;
const HISTOGRAM_W = 40;
const HISTOGRAM_H = 150;
const HISTOGRAM_SPAN = 50;
const CLOUD_BORDER = 10;
const FONT_HEIGHT = 20;
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

var renderStatistics = function (ctx, names, times) {

  ctx.fillStyle = "rgba(0, 0, 0, 0.7)";
  ctx.fillRect(CLOUD_X0 + SHADOW_SHIFT, CLOUD_Y0 + SHADOW_SHIFT, CLOUD_W, CLOUD_H);
  ctx.fillStyle = "rgba(255, 255, 255, 1)";
  ctx.fillRect(CLOUD_X0, CLOUD_Y0, CLOUD_W, CLOUD_H);
  ctx.font = "16px PT Mono";
  ctx.fillStyle = "rgba(0, 0, 0, 1)";
  ctx.fillText('Ура вы победили!', CLOUD_X0 + CLOUD_BORDER, CLOUD_Y0 + FONT_HEIGHT, CLOUD_W);
  ctx.fillText('Список результатов:', CLOUD_X0 + CLOUD_BORDER, CLOUD_Y0 + FONT_HEIGHT * 2, CLOUD_W);
  let maxtime = Math.max.apply(null, times);
  for (let index = 0; index < names.length; index++) {
    let coefficient = times[index] / maxtime;
    if (names[index] === "Вы") {
      ctx.fillStyle = "rgba(255, 0, 0, 1)";
    }
    else {
      ctx.fillStyle = "hsl(235," + getRandomInt(0, 100) + "%, 50%)";
    }
    ctx.fillRect(CLOUD_X0 + CLOUD_BORDER + HISTOGRAM_W + index * HISTOGRAM_SPAN, CLOUD_Y0 + HISTOGRAM_H + FONT_HEIGHT * 3, HISTOGRAM_W, -HISTOGRAM_H * coefficient);
    ctx.fillStyle = "rgba(0, 0, 0, 1)";
    ctx.fillText(names[index], CLOUD_X0 + CLOUD_BORDER + index * HISTOGRAM_SPAN + HISTOGRAM_W, CLOUD_Y0 + HISTOGRAM_H + FONT_HEIGHT * 4, CLOUD_W);
    ctx.fillText(Math.round(times[index]), CLOUD_X0 + CLOUD_BORDER + index * HISTOGRAM_SPAN + HISTOGRAM_W, CLOUD_Y0 + HISTOGRAM_H + FONT_HEIGHT * 3 - HISTOGRAM_H * coefficient, CLOUD_W);
  }
};
