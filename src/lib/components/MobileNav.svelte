<script lang="ts">
    import { RiCloseLine, RiMenuLine, RiLinkedinBoxFill, RiGithubFill, RiAtLine } from 'svelte-remixicon';
	import Logo from '$lib/components/Logo.svelte';

	let showMenu = $state(false);

	function onclick() {
		showMenu = !showMenu;
	}

	// prevent background scroll while menu is open
	$effect(() => {
		if (!showMenu) return;
		const previous = document.body.style.overflow;
		document.body.style.overflow = 'hidden';
		return () => { document.body.style.overflow = previous; };
	});
</script>

<nav id="mobile-menu" class:menu-active={showMenu}>
	<div id="menu-bar">
		<a href="/">
			<div id="nav-logo">
				<Logo />
			</div>
		</a>

        <button {onclick}>
            {#if showMenu}
			    <RiCloseLine class="menu-icon" />
            {:else} 
                <RiMenuLine class="menu-icon" />
            {/if}
		</button>
	</div>

	{#if showMenu}
        <div id="mobile-menu-panel">
            <ul id="menu-points">
                <li>
                    <a href="/portfolio">Portfolio</a>
                </li>
                <li>
                    <a href="/about-me">About Me</a>
                </li>
                <li>
                    <a href="/contact">Contact</a>
                </li>
            </ul>

            <div id="menu-socials">
                <RiAtLine class="menu-social" />
                <RiGithubFill class="menu-social" />
                <RiLinkedinBoxFill class="menu-social" />
            </div>
        </div>
	{/if}
</nav>

<style lang="scss">
	@use '/src/styles/index' as *;

    #mobile-menu {
        background-color: $bg;
        display: flex;
        flex-direction: column;
    }

    .menu-active {
        height: 100vh;
    }
    
	#menu-bar {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: .75rem 1.5rem;
        border-bottom: 1px solid black;
	}

	#nav-logo {
		width: 2rem;
		display: inline-flex;
	}

    :global(.menu-icon) {
        height: 2.5rem;
        width: 2.5rem;
    }

    #mobile-menu-panel {
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 5rem;
        margin-bottom: 5rem;
    }

    #menu-points {
		display: flex;
		flex-direction: column;
		align-items: center;
        gap: 2rem;
        font-size: $med-font;
        list-style-type: none;
        padding: 0;

        a {
            color: $text-clr;
            text-decoration: none;
        }
	}

    #menu-socials {
        display: flex;
        gap: 1.5rem;
    }

    :global(.menu-social) {
        height: 2rem;
        width: 2rem;
        color: $primary;
    }

</style>
