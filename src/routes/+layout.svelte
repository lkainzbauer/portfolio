<script lang="ts">
	import { Menu } from '@lucide/svelte';
	import Logo from '$lib/components/Logo.svelte';

	let { children } = $props();
	let showMenu = $state(false);

	function onclick() {
		showMenu = !showMenu;
	}
</script>

<nav>
	<div id="menu-bar">
		<a href="/">
			<div id="nav-logo">
				<Logo />
			</div>
		</a>
		<button {onclick}>
			<Menu />
		</button>
	</div>
	{#if showMenu}
	<ul id="main-menu">
		<a href="/portfolio">Portfolio</a>
		<a href="/about-me">About Me</a>
		<a href="/contact">Contact</a>
	</ul>
	{/if}
</nav>

{@render children()}

<style>
	#nav-logo {
		width: 2rem;
	}

	#menu-bar {
		display: flex;
		align-items: center;
		justify-content: space-around;
	}

	#main-menu {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

</style>