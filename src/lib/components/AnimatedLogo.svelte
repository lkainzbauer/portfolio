<script>
	import { paint } from "$lib/assets/gradient";

	/**
	 * @type {HTMLCanvasElement}
	 */
	let canvas;

	$effect(() => {
		const context = canvas.getContext('2d');

		let frame = requestAnimationFrame(function loop(t) {
			frame = requestAnimationFrame(loop);
			paint(context, t);
		});

		return () => {
			cancelAnimationFrame(frame);
		};
	});
</script>

<div class="animated-logo">
    <canvas bind:this={canvas} width={32} height={32}></canvas>
</div>

<style>
    .animated-logo {
        width: 2rem;
		height: 3rem;
    }

	canvas {
		width: 2rem;
		height: 3rem;
		background-color: #666;
		mask: url($lib/assets/logo.svg) 50% 50% no-repeat;
		mask-size: 2rem;
		-webkit-mask: url($lib/assets/logo.svg) 50% 50% no-repeat;
		-webkit-mask-size: 2rem;
	}
</style>