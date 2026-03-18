<script>
	import Project from '$lib/components/Project.svelte';
	import Reveal from '$lib/components/Reveal.svelte';
	import { isMobile } from '$lib/stores/layout.js';

    let { data } = $props();
</script>

<Reveal>
<h1>Portfolio</h1>
</Reveal>

<div id="portfolio-placeholder">
    <Reveal>
    <div class="portfolio-section gradient-outline" id="portfolio-intro">
        <div>Across my studies and collaborative work, I have developed a diverse range of projects that combine solid backend architecture, intuitive frontend design and user-centered thinking.</div>
        <div>Below is a selection of projects that best illustrate my range. From developing full-stack applications in Angular, Vue, and NestJS to creating sensor-based games, data visualization tools, and interactive storytelling environments.</div>
    </div>
    </Reveal>
    <div class="portfolio-section">
        {#each data.projects as project, i}
            <Project project={project}></Project>
            {#if i < data.projects.length - 1 && $isMobile}
                <div class="seperator gradient-background"></div>
            {/if}
        {/each}
    </div>
</div>

<style lang="scss">
    @use '/src/styles/index' as *;
    .portfolio-section {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 3rem 0;
    }

    #portfolio-intro {
        margin-top: 10rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
        line-height: 1.4em;
        font-size: 1.1em;
    }

    .seperator {
        height: 0.2rem;
        width: 80%;
        border-radius: 2rem;
    }

    @media (min-width: 768px) {
        .portfolio-section {
            margin: 4rem 0 0;
        }

        #portfolio-intro {
            width: 50%;
            margin: 10rem auto 0;
        }
    }

</style>