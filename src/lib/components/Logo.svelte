<script lang="ts">
    import logoSvg from '$lib/assets/logo.svg?raw';
	let { color = '#242424'} = $props();
</script>

<div class="logo" style="fill: {color}">{@html logoSvg}</div>

<style>
    :global(.logo svg) {
        width: 100%; height: auto;
    }
</style>