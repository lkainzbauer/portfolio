export function paint(context: any, t: any) {
	const { width, height } = context.canvas;
	const imageData = context.getImageData(0, 0, width, height);

	for (let p = 0; p < imageData.data.length; p += 4) {
		const i = p / 4;
		const y = (i / width) >>> 0;

		const green = 84 + (128 * y) / height + 44 * Math.cos(t / 1000);
		const blue = 128;

		imageData.data[p + 0] = 20;
		imageData.data[p + 1] = green;
		imageData.data[p + 2] = blue;
		imageData.data[p + 3] = 255;
	}

	context.putImageData(imageData, 0, 0);
}