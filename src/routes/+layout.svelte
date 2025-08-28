<script lang="ts">
	import MobileNav from '$lib/components/MobileNav.svelte';

	let { children } = $props();

</script>

<MobileNav/>

<div id="main-content">
	{@render children()}
</div>

<style lang="scss">
	@use '/src/styles/index' as *;

	#main-content {
		margin: 1.5rem 2rem;
	}
</style>