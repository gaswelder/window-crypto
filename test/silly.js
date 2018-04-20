// Silly function compatible with getRandomBytes
// for testing and comparison.
const sillyCrypto = {
	getRandomValues(typedArray) {
		const size = typedArray.BYTES_PER_ELEMENT;
		const N = typedArray.length;

		const buf = Array(N * size)
			.fill(0)
			.map(() => Math.round(Math.random() * 256));
		buf.readIntBE = function(offset, size) {
			return this.slice(offset, offset + size).reduce(
				(result, byte) => (result << 8) | byte,
				0
			);
		};
		for (let i = 0; i < typedArray.length; i++) {
			typedArray[i] = buf.readIntBE(i * size, size);
		}
	}
};

module.exports = sillyCrypto;
