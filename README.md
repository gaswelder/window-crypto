# window-crypto

This is a `window.crypto` polyfill based on ChaCha20 stream cipher.

Some libraries out there require `window.crypto`, but there are still browsers that don't have it. React Native environment also lacks this API at the moment, thus this polyfill.

## Security note

If some library needs `window.crypto`, the general recommendation is to not use that library in environments where this API is missing. Use a polyfill only if really necessary.

This polyfill uses ChaCha20 stream cipher to obtain pseudo-random numbers, which seems to be the industry standard now. But this polyfill has not been reviewed by a cryptography specialist, so use it as your own risk. And feedback is welcome.

## Usage

Either import it in the source as a side effect:

```js
import "window-crypto";
```

or simply include as a script:

```html
<script src="https://unpkg.com/window-crypto"></script>
```
