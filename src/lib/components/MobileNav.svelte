<script lang="ts">
    import { RiCloseLine, RiMenuLine, RiLinkedinBoxFill, RiGithubFill, RiAtLine } from 'svelte-remixicon';
	import Logo from '$lib/components/Logo.svelte';

    let { showMenu, toggleMenu, closeMenu } = $props();

</script>

<nav id="mobile-menu" class:menu-active={showMenu}>
	<div id="menu-bar">
		<a href="/">
			<div id="nav-logo" onclick={closeMenu}>
				<Logo color={showMenu ? '#ffffff' : '#242424'}/>
			</div>
		</a>

        <button onclick={toggleMenu}>
            {#if showMenu}
			    <RiCloseLine class="menu-icon menu-active-icon" />
            {:else} 
                <RiMenuLine class="menu-icon" />
            {/if}
		</button>
	</div>

	{#if showMenu}
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
        height: 2rem;
        width: 2rem;
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
