<script>
// @ts-nocheck
    import Carousel from "$lib/components/Carousel.svelte";
    import Icon from "@iconify/svelte";
    import Reveal from "$lib/components/Reveal.svelte";
	import { isMobile } from "$lib/stores/layout";
    let { data } = $props();
</script>

<Reveal>
<h1><span class="heading-light">LAURA</span> Kainzbauer</h1>
</Reveal>

<div id="about-me-top">
    {#if $isMobile}
        <div id="hero"></div>
    {:else}
        <Reveal>
            <div id="hero"></div>
        </Reveal>
    {/if}

    {#if !$isMobile}
        <div id="about-me-seperator">
            <div class="seperator gradient-background"></div>
        </div>
    {/if}

    <div class="about-me-section" id="about-me-intro">
        <Reveal>
        <h2 class="heading-underlined"><span class="heading-light">Hi</span> there</h2>
        </Reveal>
        <Reveal>
        <p>Lorem ipsum dolor sit amet consectetur. Gravida cursus purus eget tincidunt etiam urna. A eget vitae non est quis. Nibh at pellentesque in faucibus. In etiam gravida suspendisse at phasellus auctor enim faucibus accumsan. Mattis justo lectus interdum vivamus arcu sed et vehicula enim. Volutpat.</p>
        </Reveal>
    </div>
</div>

<div class="about-me-section" id="about-me-skills">
    <Reveal>
    <h2 class="outline-heading"><span class="heading-light">My</span> skills</h2>
    </Reveal>
    <Reveal>
    <p class="gradient-outline">Lorem ipsum dolor sit amet consectetur. Gravida cursus purus eget tincidunt etiam urna. A eget vitae non est quis. Nibh at pellentesque in faucibus. In etiam gravida suspendisse at phasellus auctor enim faucibus accumsan. Mattis justo lectus interdum vivamus arcu sed et vehicula enim. Volutpat.</p>
    </Reveal>
</div>

<div class="about-me-section" id="about-me-tags">
    <div class="about-me-section" id="about-me-technologies">
        <Reveal>
        <h3>Technologies</h3>
        </Reveal>
        <Reveal>
        <div class="listing technologies">
        {#each data.technologies as tech, i}
            <div class="list-item">
                <Icon icon={tech.icon} style="width: {tech.icon=="file-icons:d3" ? '1rem' : '1.3rem'}; height:1.3rem"/>
                <span class="list-text">{tech.name}</span>
            </div>
        {/each}
        </div>
        </Reveal>
    </div>

    <div class="about-me-section" id="about-me-coding-languages">
        <Reveal>
        <h3>Coding Languages</h3>
        </Reveal>
        <Reveal>
        <div class="listing coding-languages">
        {#each data.coding_languages as lang, i}
            <div class="list-item">
                <Icon icon={lang.icon} style="width:1.3rem; height:1.3rem"/>
                <span class="list-text">{lang.name}</span>
            </div>
        {/each}
        </div>
        </Reveal>
    </div>
</div>

<div class="about-me-section" id="about-me-experience">
    <Reveal>
    <h2 class="outline-heading"><span class="heading-light">My</span> experience</h2>
    </Reveal>
    <Reveal>
    <Carousel>
            {#each data.experiences as exp, i}
                <div class="embla__slide">
                    <h3>{exp.company}</h3>
                    <div class="gradient-outline carousel-outline">
                        <span class="experience-description">
                            {exp.description}
                        </span>
                    </div>
                    <span class="experience-timeframe">
                        {exp.timeframe}
                    </span>
                </div>
            {/each}
    </Carousel>
    </Reveal>
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
        width: calc(100% - 4rem);
        margin: 0 2rem;
    }

    #about-me-coding-languages {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
    }

    #about-me-experience {
        margin: 4.5rem 0 2rem 0;
        display: flex;
        flex-direction: column;
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

    .embla__slide {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .carousel-outline {
        border-radius: 50px;
        width: 70%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0.75rem 0;
        padding: 1.1rem 0;
    }

    .experience-description {
        font-size: 1em;
    }

    .experience-timeframe {
        font-family: $heading-text;
        margin: 1rem 0;
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

    @media (min-width: 768px) {

        #about-me-top {
            display: flex;
            margin-top: 12rem;
            margin-bottom: 4rem;
            gap: 3rem;
        }

        #about-me-intro {
            width: fit-content;
            justify-content: center;
            margin-bottom: 2rem;
        }

        #hero {
            max-width: none;
            width: 25rem;
            height: 40rem;
            margin-bottom: 0;
            margin-right: 3rem;

            // fade lengths
            --top-fade: 120px;
            --bottom-fade: 120px;
            --left-fade: 70px;
            --right-fade: 120px;


            -webkit-mask-image: 
            linear-gradient(to bottom,
                transparent 0,
                #000 var(--top-fade),
                #000 calc(100% - var(--bottom-fade)),
                transparent 100%
            ),
            linear-gradient(to right,
                transparent 0,
                #000 var(--left-fade),
                #000 calc(100% - var(--right-fade)),
                transparent 100%
            );
            -webkit-mask-composite: destination-in;
            mask-composite: intersect;

            mask-image: 
            linear-gradient(to bottom,
                transparent 0,
                #000 var(--top-fade),
                #000 calc(100% - var(--bottom-fade)),
                transparent 100%
            ),
            linear-gradient(to right,
                transparent 0,
                #000 var(--left-fade),
                #000 calc(100% - var(--right-fade)),
                transparent 100%
            );
            mask-composite: intersect;
        }

        #about-me-seperator {
            display: flex;
            align-items: center;
        }

        .seperator {
            height: 60%;
            width: 0.2rem;
            border-radius: 2rem;
        }

        #about-me-skills, #about-me-experience {
            width: 80%;
        }

        #about-me-tags {
            display: flex;
            gap: 2rem;
        }

        :global(#about-me-experience > div:nth-child(2)) {
            align-self: center;
        }
    }
</style>