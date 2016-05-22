# Detect Touch Devices
&nbsp;

[Live touch detection test][liveTest]  

`detect-touch` will detect if a device has a touch interface. It provides both a boolean one time touch detection on import, as well as a function to run the touch detection at any time.

`detect-touch` will detect touch devices that implement:
- The standard W3C Touch Events (this is a vast majority of touch devices)
- Microsoft's Pointer Events
- Firefox's legacy `documentTouch` which is now obsolete

For details see the [detection tests](#detection-tests) section below.

Better than Modernizr's touch device detection, which only detects support for the W3C Touch Events API, and leaves detection of Microsoft's Pointer Events API to a different category (and even then it fails to detect if the `pointerType` is touch or something else), which is frustrating, because all we really want is to know is if a device has a touch interface or not.

WARNING: There is no absolute way to detect a touch interface,  and `detect-touch` will not correctly detect a touch interface 100% of the time, but very close to it, try the [live touch detection test][liveTest] with different devices to test out its reliability. Also, just because a device has a touch interface doesn't mean that it doesn't have a mouse as well (this is why you should only set touch event listeners in addition to click event listeners, but never instead of click event listeners).

[liveTest]: http://detect-touch.rafrex.com

&nbsp;
## Installing `detect-touch`
```terminal
$ npm install detect-touch
```
&nbsp;
## Importing `detect-touch`
Import only the `hasTouch` boolean:
```javascript
import { hasTouch } from 'detect-touch';
// or
var hasTouch = require('detect-touch').hasTouch;
```

Import only the `detectTouch` function:
```javascript
import { detectTouch } from 'detect-touch';
// or
var detectTouch = require('detect-touch').detectTouch;
```

Import both the `hasTouch` boolean and the `detectTouch` function:
```javascript
import { hasTouch, detectTouch } from 'detect-touch';
// or
var hasTouch = require('detect-touch').hasTouch;
var detectTouch = require('detect-touch').detectTouch;
```

&nbsp;
## Using `detect-touch`

The `hasTouch` boolean is established at the time it is imported, and the function to detect a touch device runs only one time. In most cases this is all you need as either a device has touch capabilities or it does not.
```javascript
// Using the hasTouch boolean:
hasTouch === true;
// or
hasTouch === false;
```

The `detectTouch` function attempts to detect a touch device each time it is called and can be used to check or recheck for a touch device at a specific time. Returns a boolean.
```javascript
// Using the detectTouch function:
detectTouch() === true;
// or
detectTouch() === false;
```

&nbsp;
## Detection Tests
