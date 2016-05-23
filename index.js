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
      <div id="npm"><code>$ npm install --save detect-touch</code></div>

      <div><a id="repo-link" href="https://github.com/rafrex/detect-touch">
        https://github.com/rafrex/detect-touch
      </a></div>

      <h2 style={hasTouch ? {color: 'green'} : {color: 'red'}}>
        <code>detect-touch</code> determined that this device
        {hasTouch ? ' has a ' : ' does not have a '} touch interface.
      </h2>

      <h3>Touch interface test results:</h3>

      <div className="touch-test">
        <div>Test for the standard W3C Touch Events API (vast majority of touch devices):</div>
        <div className="test-result">{runTest("'ontouchstart' in window")}</div>
      </div>

      <div className="touch-test">
        <h4>
          Tests for number of touch points (required to detect Microsoft's
          Pointer Events API running on a touch device, however, devices not
          implmenting Pointer Events may also indicate this):
        </h4>
        <div className="test-result">{runTest("window.navigator.maxTouchPoints")}</div>
        <div className="test-result">{runTest("window.navigator.msMaxTouchPoints")}</div>
      </div>

      <div className="touch-test">
        <h4>Test for Firefox's legacy touch implemntation (which is now obsolete):</h4>
        <div className="test-result">{runTest("window.DocumentTouch && document instanceof DocumentTouch")}</div>
      </div>
    </div>

  );
}

render(<App />, document.getElementById('root'));
