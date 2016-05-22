import React from 'react';
import { render } from 'react-dom';
import {hasTouch} from 'detect-touch';

function App() {

  function toString(value) {
    return typeof value === 'undefined' ? 'undefined' : value.toString();
  }

  const checks = {
    "'ontouchstart' in window": toString('ontouchstart' in window),
    "window.navigator.maxTouchPoints": toString(window.navigator.maxTouchPoints),
    "window.navigator.msMaxTouchPoints": toString(window.navigator.msMaxTouchPoints),
    "window.DocumentTouch && document instanceof DocumentTouch": toString(window.DocumentTouch && document instanceof DocumentTouch)
  }
  console.log(checks);

  return (
    <div>
      <h1>Detect Touch Device</h1>
      <div>
        This device {hasTouch ? 'has a touch interface' : 'does not have a touch interface'}
      </div>
      <div>Ths touch interface tests returned as follows:</div>
      <ul>
        {Object.keys(checks).map((key, i) =>
          <li key={i}>{key}: {checks[key].toString()}</li>
        )}
      </ul>
    </div>

  );
}


render(<App />, document.getElementById('root'));
