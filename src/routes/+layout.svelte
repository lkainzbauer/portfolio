<script lang="ts">
	import Background from '$lib/components/Background.svelte';
	import MobileNav from '$lib/components/MobileNav.svelte';
	import { page } from '$app/state';

	let { children } = $props();

	let showMenu = $state(false);
	let path = $state('/');

	function toggleMenu() {
		showMenu = !showMenu;
	}

	function closeMenu() {
		showMenu = false;
	}

	$effect(() => {
	path = page.route.id || '';
    if (!showMenu) return;
		const prev = document.body.style.overflow;
		document.body.style.overflow = 'hidden';
		return () => { document.body.style.overflow = prev; };
	});

</script>


{#if !showMenu}
  <Background --background-size={path === '/' ? '80vh' : '50vh'} />
{/if}

<MobileNav {showMenu} {toggleMenu} {closeMenu} />

<div id="main-content">
	{@render children()}
</div>

<style lang="scss">
	@use '/src/styles/index' as *;

	#main-content {
		margin: 1.5rem 2rem;
	}
</style>