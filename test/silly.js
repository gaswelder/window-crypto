// Silly function compatible with getRandomBytes
// for testing and comparison.
function sillyBytes(typedArray) {
  for (let i = 0; i < typedArray.length; i++) {
    typedArray[i] = rand(typedArray.BYTES_PER_ELEMENT);
  }
}

function rand(size) {
  if (size < 1 || size > 16) {
    throw new Error("Invalid size argument: " + size);
  }
  let result = 0;
  while (size > 0) {
    size--;
    result = (result << 8) | getByte();
  }
  return result;
}

function getByte() {
  return Math.round(Math.random() * 255);
}

module.exports = sillyBytes;
