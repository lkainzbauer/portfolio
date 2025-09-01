<script lang="ts">
	import Icon from '@iconify/svelte';
	import type { PageProps } from './$types';
	import { goto } from '$app/navigation';

	let { data }: PageProps = $props();
	
	function goBack() {
		goto('/portfolio')
	}
</script>

<h1 id="project-heading">{data.project.name}</h1>
<button onclick={() => goBack()} id="back-btn">
	<Icon icon="mdi:arrow-back"></Icon>
	<span>all projects</span>
</button>
<div class="project-section">
	<img class="project-img" src="/img/projects/{data.project.imgName}" alt={data.project.name}>
	<div class="project-technologies">
        {#each data.project.technologies as tech, i}
            <div class="list-item">
                <Icon icon={tech.icon} style="width: '1.3rem'; height:1.3rem"/>
                <span class="list-text">{tech.name}</span>
            </div>
        {/each}
    </div>
	<div class="gradient-outline" id="project-description">{@html data.project.description}</div>
	{#if data.project.url}
		<div class="gradient-background main-btn home-project-btn">
			<a class="main-btn home-project-btn" href={data.project.url}>give it a try</a>
		</div>
	{/if}
</div>

<style lang="scss">
	@use '/src/styles/index' as *;

	#project-heading {
		margin-bottom: 0;
	}

	.project-section {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 2rem 0;

		a {
		text-decoration: none;
		}
    }

	#project-description {
		margin-bottom: 2rem;
	}

	.project-img {
        width: 120%;
    }

	.project-technologies {
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

	#back-btn {
		align-self: flex-start;
		color: $bg;
		font-size: 1.4em;
		font-family: $heading-text;
		display: flex;
		align-items: center;
		gap: 0.3rem;
		font-weight: bold;
		margin-bottom: 3rem;
	}
</style>