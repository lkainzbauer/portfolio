<script>
	import Project from '$lib/components/Project.svelte';
	import Reveal from '$lib/components/Reveal.svelte';

    let { data } = $props();
</script>

<Reveal>
<h1>Portfolio</h1>
</Reveal>

<div id="portfolio-placeholder">
    <Reveal>
    <div class="portfolio-section gradient-outline" id="portfolio-intro">
        Lorem ipsum dolor sit amet consectetur. Gravida cursus purus eget tincidunt etiam urna. A eget vitae non est quis. Nibh at pellentesque in faucibus. In etiam gravida suspendisse at phasellus auctor enim faucibus accumsan. Mattis justo lectus interdum vivamus arcu sed et vehicula enim. Volutpat.
    </div>
    </Reveal>
    <div class="portfolio-section">
        {#each data.projects as project, i}
            <Project project={project}></Project>
            {#if i < data.projects.length - 1}
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
    }

    .seperator {
        height: 0.2rem;
        width: 80%;
        border-radius: 2rem;
    }
</style>