<script lang="ts">
	import Background from '$lib/components/Background.svelte';
	import MobileNav from '$lib/components/MobileNav.svelte';
	import { page } from '$app/state';
	import Footer from '$lib/components/Footer.svelte';
	import { showMenu } from '$lib/stores/nav';
	import { afterNavigate } from '$app/navigation';
	import Nav from '$lib/components/Nav.svelte';
	import { isMobile } from '$lib/stores/layout';

	let { children } = $props();

	let path = $state('/');

	afterNavigate(() => {
		window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
	});

	$effect(() => {
	path = page.route.id || '';
	// disable overflow when menu is opened
    if (!$showMenu) return;
		const prev = document.body.style.overflow;
		document.body.style.overflow = 'hidden';
		return () => { document.body.style.overflow = prev; };
	});

</script>

<div id="app">

	{#if !$showMenu}
		<Background --background-size={path === '/' ? '40rem' : $isMobile ? '28rem' : '32rem'} />
	{/if}

	{#if $isMobile}
		<MobileNav />
	{:else}
		<Nav />
	{/if}

	<div id="main-content">
		{@render children()}
	</div>

	<Footer />

</div>

<style lang="scss">
	@use '/src/styles/index' as *;

	#app {
		min-height: 100vh;
		display: flex;
  		flex-direction: column;
	}

	#main-content {
		flex: 1 0 auto;
		margin: 0 2rem 1.5rem 2rem;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	@media (min-width: 768px) {
		#main-content {
			margin: 0 7rem 1.5rem 7rem;
		}
	}
</style>