<script lang="ts">
	import { goto } from "$app/navigation";
	import type { Project } from "$lib/types/project";
	import Icon from "@iconify/svelte";
	import Reveal from "./Reveal.svelte";

	let { project }: { project: Project } = $props();
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<a class="project-listing"  href={"/portfolio/" + project.slug}>
    <Reveal>
    <img class="project-listing-img" src="img/projects/{project.imgName}" alt={project.name}>
    </Reveal>
    <Reveal>
    <h2>{project.name}</h2>
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
    <Reveal>
    <div>
        {project.description}
    </div>
    </Reveal>
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

    .project-listing-img {
        width: 100%;
        margin-bottom: 0.5rem;
    }

    .project-listing-technologies {
        display: flex;
        align-items: center;
        gap: 1rem;
        margin-top: 0.5rem;
        margin-bottom: 1.5rem;
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
</style>