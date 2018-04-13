const process = require("process");

global.window = {};
require("..");

//const sillyBytes = require("./silly");
const randomBytes = window.crypto.getRandomBytes;

const buf = new Uint32Array(10000);

function write() {
  while (true) {
    randomBytes(buf);
    const bytes = Buffer.from(buf.buffer);
    if (!process.stdout.write(bytes)) break;
  }
}
process.stdout.on("drain", function() {
  write();
});
write();
