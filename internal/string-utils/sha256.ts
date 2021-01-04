import stream = require("stream");
import crypto = require("crypto");

export const sha256 = {
	sync(str: string): string {
		return crypto.createHash("sha1").update(str).digest("hex");
	},

	async(input: NodeJS.ReadableStream): Promise<string> {
		const hash = crypto.createHash("sha1");

		return new Promise((resolve, reject) => {
			stream.pipeline(
				input,
				hash,
				(err) => {
					if (err == null) {
						resolve(hash.digest("hex"));
					} else {
						reject(err);
					}
				},
			);
		});
	},
};
