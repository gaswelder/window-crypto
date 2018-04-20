const process = require("process");

function getFunc() {
	if (process.env["SILLY"]) {
		console.error("Using the silly generator");
		return require("./silly").getRandomValues;
	}
	global.window = {};
	require("..");
	return window.crypto.getRandomValues;
}

const randomBytes = getFunc();
const buf = new Uint32Array(10000);

function write() {
	while (true) {
		randomBytes(buf);
		const bytes = Buffer.from(buf.buffer);
		if (!process.stdout.write(bytes)) break;
	}
}
process.stdout.on("error", function(err) {
	console.error({ err });
});
process.stdout.on("drain", function() {
	write();
});
write();
