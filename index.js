'use strict';

function detectTouch() {
  if (
    'ontouchstart' in window ||
    window.navigator.maxTouchPoints > 0 ||
    window.navigator.msMaxTouchPoints > 0 ||
    window.DocumentTouch && document instanceof DocumentTouch
  ) {
    return true;
  } else {
    return false;
  }
}

exports.detectTouch = detectTouch;
exports.hasTouch = detectTouch();
