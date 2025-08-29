<h1><span class="heading-light">LAURA</span> Kainzbauer</h1>

<div id="hero"></div>

<h2 class="heading-underlined"><span class="heading-light">Hi</span> there</h2>
<p>Lorem ipsum dolor sit amet consectetur. Gravida cursus purus eget tincidunt etiam urna. A eget vitae non est quis. Nibh at pellentesque in faucibus. In etiam gravida suspendisse at phasellus auctor enim faucibus accumsan. Mattis justo lectus interdum vivamus arcu sed et vehicula enim. Volutpat.</p>

<style lang="scss">
	@use '/src/styles/index' as *;

    #hero {
        background: url("/img/laura-kainzbauer.jpg") center/cover no-repeat #000;
        height: 80vh;
        width: 100vw;
        margin-bottom: 2rem;

        // fade lengths
        --top-fade: 140px;
        --bottom-fade: 200px;

        // gradient into background
        -webkit-mask-image: linear-gradient(
            to bottom,
            transparent 0,
            #000 var(--top-fade),
            #000 calc(100% - var(--bottom-fade)),
            transparent 100%
        );
        mask-image: linear-gradient(
            to bottom,
            transparent 0,
            #000 var(--top-fade),
            #000 calc(100% - var(--bottom-fade)),
            transparent 100%
        );
    }
</style>