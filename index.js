'use strict';

function detectTouch() {
  return !!(
    'ontouchstart' in window ||
    window.navigator.maxTouchPoints > 0 ||
    window.navigator.msMaxTouchPoints > 0 ||
    window.DocumentTouch && document instanceof DocumentTouch
  );
}

exports.detectTouch = detectTouch;
exports.hasTouch = detectTouch();
