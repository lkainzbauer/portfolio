<script>
	import AnimatedLogo from "./AnimatedLogo.svelte";
	import Logo from "./Logo.svelte";

</script>
<div id="footer">
    <div id="footer-content">
            <a href="/legal">imprint & privacy</a>
            <div id="info">
                <div id="footer-logo">
                    <AnimatedLogo />
                </div>
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
        background: url("/img/footer-mobile.svg") no-repeat top center;
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
        width: 80%;
        background-color: $bg;
        border-radius: 12px;
        padding: 1rem 2rem;
    }

    #footer-content > * {
        flex: 1;                 // make each child take equal space
        text-align: center;      // center text inside each child
    }

    a {
        color: $text-clr;
        text-decoration: none;
        font-size: $s-font;
    }

    #info {
        width: fit-content;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    #footer-logo {
        width: 2rem;
    }
</style>