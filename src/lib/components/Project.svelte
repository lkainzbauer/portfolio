<script lang="ts">
	import { goto } from "$app/navigation";
	import type { Project } from "$lib/types/project";
	import Icon from "@iconify/svelte";
	import Reveal from "./Reveal.svelte";
	import { isMobile } from "$lib/stores/layout";

	let { project }: { project: Project } = $props();
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<a class="project-listing"  href={"/portfolio/" + project.slug}>
    <div class="project-listing-img-container">
        <Reveal>
        <img class="project-listing-img" src="img/projects/{project.slug}/{project.img}" alt={project.name}>
        </Reveal>
    </div>
    {#if $isMobile}
        <div class="project-listing-text project-listing-text-container" class:gradient-outline={!$isMobile}>
            <Reveal>
                <h2>{project.name}</h2>
            </Reveal>
            <Reveal>
            <div class="project-listing-description">
                {project.shortDescription}
            </div>
            </Reveal>
             <Reveal>
            <div class="project-listing-technologies">
                {#each project.technologies as tech, i}
                    <div class="list-item">
                        <Icon icon={tech.icon} style="width: '1.3rem'; height:1.3rem"/>
                        <span class="list-text">{tech.name}</span>
                    </div>
                {/each}
            </div>
            </Reveal>
        </div>
    {:else}
        <div class="project-listing-text-container">
            <Reveal>
                <div class="project-listing-text" class:gradient-outline={!$isMobile}>
                    <h2>{project.name}</h2>
                    <div class="project-listing-description">
                        {project.shortDescription}
                    </div>
                    <div class="project-listing-technologies">
                        {#each project.technologies as tech, i}
                            <div class="list-item">
                                <Icon icon={tech.icon} style="width: '1.3rem'; height:1.3rem"/>
                                <span class="list-text">{tech.name}</span>
                            </div>
                        {/each}
                    </div>
                </div>
            </Reveal>
        </div>
    {/if}
</a>

<style lang="scss">
    @use '/src/styles/index' as *;
    .project-listing {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        margin: 2rem 0 4rem;
        color: $text-clr;
        text-decoration: none;
    }

    .project-listing-img-container {
        align-items: center;
        justify-content: center;
        display: flex;
        width: 100%;
    }

    .project-listing-img {
        margin-bottom: 0.5rem;
        max-width: 30rem;
		max-height: 25rem;
		width: auto;
		height: auto;
		object-fit: contain;
    }

    .project-listing-description {
        margin-bottom: 1.5rem;
        line-height: 1.4em;
    }

    .project-listing-technologies {
        display: flex;
        align-items: center;
        gap: 0.4rem;
        margin-top: 0.5rem;
        flex-wrap: wrap;
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

    @media (min-width: 768px) {
        .project-listing {
            flex-direction: row;
            justify-content: center;
            align-items: center;
            gap: 2rem;
            margin: 4rem 0;
        }

        .project-listing-text-container {
            flex: 1;
        }

        .project-listing-img-container {
            flex: 1;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .project-listing:nth-of-type(odd) {
            flex-direction: row-reverse;
        }

        a:hover {
            h2 {
                color: $accent1;
            }
        }
    }
</style>