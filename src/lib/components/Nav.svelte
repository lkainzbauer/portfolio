<script lang="ts">
	import { page } from '$app/stores';
	import Logo from '$lib/components/Logo.svelte';
	import Socials from './Socials.svelte';
</script>

<nav id="nav">
    <div class="nav-container" id="main-links">
        <a href="/portfolio" class:active={$page.url.pathname === '/portfolio'}>portfolio</a>
        <a href="/about-me" class:active={$page.url.pathname === '/about-me'}>about me</a>
        <a href="/contact" class:active={$page.url.pathname === '/contact'}>contact me</a>
    </div>
    <div class="nav-container">
        <a href="/" id="nav-logo">
            <Logo color='#242424'/>
        </a>
    </div>
    <div class="nav-container" id="social-links">
       <Socials --socials-size="1.6rem" --socials-color="#ffffff"/>
    </div>
</nav>

<style lang="scss">
	@use '/src/styles/index' as *;

    #nav {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 1.5rem 7rem;
    }

    #nav-logo {
		width: 2.5rem;
		display: inline-flex;
	}

    .nav-container {
        display: flex;
        gap: 1rem;
        flex: 1;
        justify-content: center;

        a {
            color: $text-clr;
            text-decoration: none;

            &.active {
                color: $accent1;
            }
        }
    }

    #main-links {
        justify-content: flex-start;
        font-size: 1.1em;
    }

    #social-links {
        justify-content: flex-end;
    }

</style>