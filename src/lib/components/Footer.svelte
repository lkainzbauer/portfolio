<script>
	import Logo from "./Logo.svelte";

</script>
<div id="footer">
    <div id="footer-content">
          <ul class="footer-points">
                <li>
                    <a href="/">impressum</a>
                </li>
                <li>
                    <a href="/">datenschutz</a>
                </li>
            </ul>
            <div id="footer-logo">
                <Logo color="#3BCEB5" />
            </div>
            <ul class="footer-points">
                <li>
                    <a href="/contact">contact me</a>
                </li>
            </ul>
    </div>
</div>

<style lang="scss">
    @use '/src/styles/index' as *;

    #footer {
        width: 100%;
        padding-top: 6rem;
        padding-bottom: 1rem;
        position: absolute;
        bottom: 0;
        background: url("/img/footer-mobile.svg") no-repeat top center;
        background-size: cover;
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 12vh;
    }

    #footer-content {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 3.5rem;
        width: fit-content;
        background-color: $bg;
        border-radius: 12px;
        padding: 1rem 2rem;
    }

    .footer-points {
		display: flex;
		flex-direction: column;
		align-items: center;
        gap: 1rem;
        font-size: $small-font;
        list-style-type: none;
        padding: 0;

        a {
            color: $text-clr;
            text-decoration: none;
        }
	}

    #footer-logo {
        width: 2rem;
    }
</style>