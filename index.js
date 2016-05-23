import React from 'react';
import { render } from 'react-dom';
import { hasTouch } from 'detect-touch';

function App() {

  function runTest(test) {
    const result = eval(test);
    const color = result ? 'green' : 'red';
    const resultAsString =
      typeof result === 'undefined' ? 'undefined' : result.toString();
    return (
      <code>{test}: <span style={{color: color}}>{resultAsString}</span></code>
    );
  }

  return (
    <div>
      <h1>Touch Device Detection</h1>

      <div><a href="https://github.com/rafrex/detect-touch">
        https://github.com/rafrex/detect-touch
      </a></div>
      <code id="npm">$ npm install --save detect-touch</code>
      <h2>
        <code>detect-touch</code> determined that this device
        {hasTouch ? ' has a ' : ' does not have a '} touch interface.
      </h2>
      <h3>Here are the results of the touch interface tests:</h3>

      <div className="touch-test">
        <h4>Test for the standard W3C Touch Events API (vast majority of touch devices):</h4>
        {runTest("'ontouchstart' in window")}
      </div>

      <div className="touch-test">
        <h4>Tests for Microsoft's Pointer Events API running on a touch device:</h4>
        <div>{runTest("window.navigator.maxTouchPoints")}</div>
        <div>{runTest("window.navigator.msMaxTouchPoints")}</div>
      </div>

      <div className="touch-test">
        <h4>Test for Firefox's legacy touch implemntation (which is now obsolete):</h4>
        {runTest("window.DocumentTouch && document instanceof DocumentTouch")}
      </div>
    </div>

  );
}

render(<App />, document.getElementById('root'));
