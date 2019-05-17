# Thumbor-Lite

Thumbor client for Node JS or browser (not recommended).

Forked from [thumbor](https://www.npmjs.com/package/thumbor), but does not rely on node.js builtins.

## Usage

```sh
# Install thumbor module

npm install thumbor-lite
```

```javascript
// Declare thumbor-url-builder in JS
// Your encryption key is not required, but your link will be unsafe.

var Thumbor = require('thumbor-lite');
var thumbor  = new Thumbor('MY_KEY', 'http://myserver.thumbor.com');

// Generate your url :

var thumborUrl = thumbor.setImagePath('00223lsvrnzeaf42.png').resize(50,50).buildUrl();
```
