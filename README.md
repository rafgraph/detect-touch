# Detect Touch Devices
&nbsp;

[Live touch detection test][liveTest]  

`detect-touch` will detect if a device has a touch interface. It provides both a boolean one time touch detection on import, as well as a function to run the touch detection at any time.

Better than Modernizr's touch device detection, which only detects support for the W3C Touch Events API, and leaves detection of Microsoft's Pointer Events API to a different category (and even then it fails to detect if it's running on a touch device), which can be frustrating when all you really want to know is if a device has a touch interface or not. For details on how `detect-touch` works see the [detection tests](#detection-tests) section below.

WARNING: There is no absolute way to detect a touch interface,  and `detect-touch` will not correctly detect a touch interface 100% of the time, but very close to it, try the [live touch detection test][liveTest] with different devices to test out its reliability. Also, just because a device has a touch interface doesn't mean that it doesn't have a mouse as well.

[liveTest]: http://detect-touch.rafrex.com

&nbsp;
## Installing `detect-touch`
```terminal
$ npm install --save detect-touch
```
&nbsp;
## Importing `detect-touch`
Importing only the `hasTouch` boolean:
```javascript
import { hasTouch } from 'detect-touch';
// or
var hasTouch = require('detect-touch').hasTouch;
```

Importing only the `detectTouch` function:
```javascript
import { detectTouch } from 'detect-touch';
// or
var detectTouch = require('detect-touch').detectTouch;
```

Importing both the `hasTouch` boolean and the `detectTouch` function:
```javascript
import { hasTouch, detectTouch } from 'detect-touch';
// or
var hasTouch = require('detect-touch').hasTouch;
var detectTouch = require('detect-touch').detectTouch;
```

&nbsp;
## Using `detect-touch`

The `hasTouch` boolean is established at the time it is imported, and the function to detect a touch device runs only one time. In most cases this is all you need.
```javascript
// Using the hasTouch boolean:
hasTouch === true;
// or
hasTouch === false;
```

The `detectTouch` function attempts to detect a touch device each time it is called and can be used to check or recheck for a touch device at a specific time. Returns a boolean. For example, if `detect-touch` doesn't have access to the `window` when it is imported you'll need to wait until it does before checking if a device has a touch interface.
```javascript
// Using the detectTouch function:
detectTouch() === true;
// or
detectTouch() === false;
```

&nbsp;
## Detection Tests
`detect-touch` checks to see if the browser implements any of the following:  

The standard [W3C Touch Events API][w3cTE] (this is the vast majority of touch devices), by checking for:
```javascript
'ontouchstart' in window
```
[Microsoft's Pointer Events API running on a touch device][maxTP], by checking for:
```javascript
window.navigator.maxTouchPoints > 0 ||
window.navigator.msMaxTouchPoints > 0 // pre IE 11
```
[Firefox's legacy `DocumentTouch`][docT] (which is now obsolete), by checking for:
```javascript
window.DocumentTouch && document instanceof DocumentTouch
```

[w3cTE]: https://www.w3.org/TR/touch-events/
[maxTP]: https://msdn.microsoft.com/en-us/library/dn433244(v=vs.85).aspx#feature_detection_and_touch_support_testing
[docT]: https://developer.mozilla.org/en-US/docs/Web/API/DocumentTouch
