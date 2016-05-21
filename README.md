# Detect Touch Devices

<br>
[Live touch detection demo](http://detect-touch.rafrex.com)  

`detect-touch` will detect if a device has a touch interface. It provides both a boolean one time touch detection on import, as well as a function to run the touch detection at any time.

Better than Modernizr's touch device detection, which only detects support for the W3C Touch Events API, and leaves detection of Microsoft's Pointer Events API to a different category (and even then it fails to detect if the `pointerType` is touch or something else), which is frustrating, because all we really want is to know is if a device has a touch interface or not.

WARNING: There is no absolute way to detect a touch device, and just because a device has a touch interface doesn't mean that it doesn't have a mouse as well (this is why you should only set touch event listeners in addition to click event listeners, but never instead of click event listeners).

&nbsp;
## Installing `detect-touch`
```terminal
$ npm install detect-touch
```
&nbsp;
## Importing `detect-touch`
<br>
Import only the `hasTouch` boolean:
```js
import hasTouch from 'detect-touch';
```
<br>
Import only the `detectTouch` function:
```js
import { detectTouch } from 'detect-touch';
```
<br>
Import both the `hasTouch` boolean and the `detectTouch` function:
```js
import hasTouch { detectTouch } from 'detect-touch';
```

&nbsp;
## Using `detect-touch`
<br>
The `hasTouch` boolean is established at the time it is imported, and the function to detect a touch device runs only one time. In most cases this is all you need as either a device has touch capabilities or it does not.
```js
// Using the hasTouch boolean:
hasTouch === true;
// or
hasTouch === false;
```
<br>
The `detectTouch` function attempts to detect a touch device each time it is called and can be used to check or recheck for a touch device at a specific time. Returns a boolean.
```js
// Using the detectTouch function:
detectTouch() === true;
// or
detectTouch() === false;
```
