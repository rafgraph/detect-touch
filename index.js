import React from 'react';
import { render } from 'react-dom';
import {hasTouch} from 'detect-touch';

function App() {

  function toString(value) {
    return typeof value === 'undefined' ? 'undefined' : value.toString();
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
        <code>'ontouchstart' in window: {toString('ontouchstart' in window)}</code>
        <div className="note">Test for the standard W3C Touch Events implemntation of touch.</div>
      </div>

      <div className="touch-test">
        <div><code>window.navigator.maxTouchPoints: {toString(window.navigator.maxTouchPoints)}</code></div>
        <div><code>window.navigator.msMaxTouchPoints: {toString(window.navigator.msMaxTouchPoints)}</code></div>
        <div className="note">Pointer events test for Microsoft Internet Explorer and Edge.</div>
      </div>

      <div className="touch-test">
        <code>window.DocumentTouch && document instanceof DocumentTouch: {toString(window.DocumentTouch && document instanceof DocumentTouch)}</code>
        <div className="note">Test for legacy Firefox implemntation which is now obsolete.</div>
      </div>
    </div>

  );
}

render(<App />, document.getElementById('root'));
