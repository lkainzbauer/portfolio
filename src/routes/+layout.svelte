<script lang="ts">
	import Background from '$lib/components/Background.svelte';
	import MobileNav from '$lib/components/MobileNav.svelte';
	import { page } from '$app/state';
	import Footer from '$lib/components/Footer.svelte';
	import { nav } from './nav.svelte';

	let { children } = $props();

	let path = $state('/');

	$effect(() => {
	path = page.route.id || '';
	// disable overflow when menu is opened
    if (!nav.showMenu) return;
		const prev = document.body.style.overflow;
		document.body.style.overflow = 'hidden';
		return () => { document.body.style.overflow = prev; };
	});

</script>

<div id="app">

	{#if !nav.showMenu}
		<Background --background-size={path === '/' ? '80vh' : '50vh'} />
	{/if}

	<MobileNav />

	<div id="main-content">
		{@render children()}
	</div>

	<Footer />

</div>

<style lang="scss">
	@use '/src/styles/index' as *;

	#app {
		position: relative;
		min-height: 100dvh; 
	}

	#main-content {
		margin: 1.5rem 2rem;
	}
</style>