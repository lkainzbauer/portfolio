<script lang="ts">
	import Logo from '$lib/components/Logo.svelte';
    import { showMenu } from '$lib/stores/nav';
    import Icon from "@iconify/svelte";
	import Socials from './Socials.svelte';

    function toggleMenu() {
		showMenu.update(value => !value);
	}

	function closeMenu() {
		showMenu.set(false);
	}

</script>

<nav id="mobile-menu" class:menu-active={$showMenu}>
	<div id="menu-bar">
		<a href="/">
			<button id="nav-logo" onclick={closeMenu}>
				<Logo color={$showMenu ? '#ffffff' : '#242424'}/>
            </button>
		</a>

        <button onclick={toggleMenu}>
            {#if $showMenu}
			    <Icon icon="mdi:close" class="menu-icon menu-active-icon" />
            {:else} 
                <Icon icon="mdi:menu" class="menu-icon" />
            {/if}
		</button>
	</div>

	{#if $showMenu}
        <div id="mobile-menu-panel">
            <ul id="menu-points">
                <li>
                    <a href="/portfolio" onclick={closeMenu}>portfolio</a>
                </li>
                <li>
                    <a href="/about-me" onclick={closeMenu}>about me</a>
                </li>
                <li>
                    <a href="/contact" onclick={closeMenu}>contact me</a>
                </li>
            </ul>

            <Socials />
        </div>
	{/if}
</nav>

<style lang="scss">
	@use '/src/styles/index' as *;

    #mobile-menu {
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
		padding: 1.5rem 2rem;
	}

	#nav-logo {
		width: 2rem;
		display: inline-flex;
	}

    :global(.menu-icon) {
        height: 1.5rem;
        width: 1.5rem;
        color: $bg;
    }

    :global(.menu-active-icon) {
        color: $text-clr;
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
        font-size: $m-font;
        list-style-type: none;
        padding: 0;

        a {
            color: $text-clr;
            text-decoration: none;
        }
	}

</style>
