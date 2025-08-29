<script>
	import { paint } from "$lib/assets/gradient";

	/**
	 * @type {HTMLCanvasElement}
	 */
	let canvas;

	// TODO: try using animated gradient like in border instead
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
        width: 1.5rem;
		height: 2rem;
    }

	canvas {
		width: 1.5rem;
		height: 2rem;
		background-color: #666;
		mask: url($lib/assets/logo.svg) 50% 50% no-repeat;
		mask-size: 1.5rem;
		-webkit-mask: url($lib/assets/logo.svg) 50% 50% no-repeat;
		-webkit-mask-size: 1.5rem;
	}
</style>