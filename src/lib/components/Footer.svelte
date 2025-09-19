<script>
	import { isMobile } from "$lib/stores/layout";
	import AnimatedLogo from "./AnimatedLogo.svelte";
	import Logo from "./Logo.svelte";

</script>
<div id="footer"
    style={`background-image: url('/img/${$isMobile ? 'footer-mobile' : 'footer'}.svg')`}
>
    <div id="footer-content">
            <a href="/legal">imprint & privacy</a>
            <div id="info">
                <a href="/" id="footer-logo">
                    <AnimatedLogo />
                </a>
            </div>
            <a href="/contact">contact me</a>
    </div>
</div>

<style lang="scss">
    @use '/src/styles/index' as *;

    #footer {
        width: 100%;
        padding-top: 6rem;
        padding-bottom: 1rem;
        position: static;
        bottom: 0;
        background-repeat: no-repeat;
        background-position: top center;
        background-size: cover;
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 12vh;
        margin-top: auto;
    }

    #footer-content {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        width: 100%;
        margin: 0 1.2rem;
        background-color: $bg;
        border-radius: 12px;
        padding: 1rem 1.5rem;
    }

    #footer-content > * {
        flex: 1;                 // make each child take equal space
        text-align: center;      // center text inside each child
    }

    a {
        color: $text-clr;
        text-decoration: none;
        font-size: $mobile-s-font;
    }

    #info {
        width: fit-content;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    #footer-logo {
        width: 1.5rem;
    }

    @media (min-width: 768px) {
        #footer-content {
            margin: 0 12rem;
        }

        a {
            font-size: $desktop-s-font;
        }
    }
</style>