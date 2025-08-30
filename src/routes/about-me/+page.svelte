<script>
// @ts-nocheck

    import { technologies, coding_languages } from "$lib/data/skills";
    import Carousel from "$lib/components/Carousel.svelte";
    import Icon from "@iconify/svelte";
</script>

<h1><span class="heading-light">LAURA</span> Kainzbauer</h1>

<div id="hero"></div>

<div class="about-me-section" id="about-me-intro">
    <h2 class="heading-underlined"><span class="heading-light">Hi</span> there</h2>
    <p>Lorem ipsum dolor sit amet consectetur. Gravida cursus purus eget tincidunt etiam urna. A eget vitae non est quis. Nibh at pellentesque in faucibus. In etiam gravida suspendisse at phasellus auctor enim faucibus accumsan. Mattis justo lectus interdum vivamus arcu sed et vehicula enim. Volutpat.</p>
</div>

<div class="about-me-section">
    <h2 class="outline-heading"><span class="heading-light">My</span> skills</h2>
    <p class="container-outline">Lorem ipsum dolor sit amet consectetur. Gravida cursus purus eget tincidunt etiam urna. A eget vitae non est quis. Nibh at pellentesque in faucibus. In etiam gravida suspendisse at phasellus auctor enim faucibus accumsan. Mattis justo lectus interdum vivamus arcu sed et vehicula enim. Volutpat.</p>
</div>

<div class="about-me-section" id="about-me-technologies">
    <h3>Technologies</h3>
    <div class="listing technologies">
    {#each technologies as tech, i}
        <div class="list-item">
            <Icon icon={tech.icon} style="width: {tech.icon=="file-icons:d3" ? '1rem' : '1.3rem'}; height:1.3rem"/>
            <span class="list-text">{tech.name}</span>
        </div>
    {/each}
    </div>
</div>

<div class="about-me-section" id="about-me-coding-languages">
    <h3>Coding Languages</h3>
    <div class="listing coding-languages">
    {#each coding_languages as lang, i}
        <div class="list-item">
            <Icon icon={lang.icon} style="width:1.3rem; height:1.3rem"/>
            <span class="list-text">{lang.name}</span>
        </div>
    {/each}
    </div>
</div>

<div class="about-me-section" id="about-me-experience">
    <h2 class="outline-heading"><span class="heading-light">My</span> experience</h2>
    <Carousel />
</div>

<style lang="scss">
	@use '/src/styles/index' as *;
    .about-me-section {
        margin: 2rem 0;
        width: 100%;
    }

    #about-me-intro {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    #about-me-coding-languages {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
    }

    #about-me-experience {
        margin: 4.5rem 0 2rem 0;
    }

    .coding-languages {
        justify-content: flex-end;
    }

    .technologies {
        justify-content: flex-start;
    }

    h3 {
        margin: 1rem 0;
    }

    .listing {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: 0.75rem;
        row-gap: 1rem;
    }

    .list-text {
       font-size: 0.9em;
       font-weight: bold;
    }

    .list-item {
        width: fit-content;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.2rem;
        padding: 0.35rem 0.5rem;
        background-color: $accent2;
        color: $bg;
        border-radius: 20px;
        height: 1.5rem;
    }

    #hero {
        background: url("/img/laura-kainzbauer.jpg") center/cover no-repeat #000;
        height: 80vh;
        width: 100vw;
        max-width: 120%;
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