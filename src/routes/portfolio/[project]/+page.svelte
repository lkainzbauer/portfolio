<script lang="ts">
	import Icon from '@iconify/svelte';
	import type { PageProps } from './$types';
	import { goto } from '$app/navigation';
	import Reveal from '$lib/components/Reveal.svelte';
	import { isMobile } from "$lib/stores/layout";

	let { data }: PageProps = $props();
	
	function goBack() {
		goto('/portfolio')
	}
</script>

<Reveal>
<h1 id="project-heading">{data.project.name}</h1>
</Reveal>
<Reveal>
<button onclick={() => goBack()} id="back-btn">
	<Icon icon="mdi:arrow-back"></Icon>
	<span>all projects</span>
</button>
</Reveal>
<div class="project-section">
	<Reveal>
	<img class="project-img" src="/img/projects/{data.project.imgName}" alt={data.project.name}>
	</Reveal>
	<Reveal>
	<div class="project-info">
		<Reveal>
		<div class="project-technologies">
			{#each data.project.technologies as tech, i}
				<div class="list-item">
					<Icon icon={tech.icon} style="width: '1.3rem'; height:1.3rem"/>
					<span class="list-text">{tech.name}</span>
				</div>
			{/each}
		</div>
		</Reveal>
		{#if $isMobile}
			<Reveal>
			<div class="gradient-outline" id="project-description">{@html data.project.description}</div>
			</Reveal>
			<Reveal>
			{#if data.project.url}
				<div class="gradient-background main-btn project-url">
					<a class="main-btn" target="_blank" href={data.project.url}>give it a try</a>
				</div>
			{/if}
			</Reveal>
		{:else}
			<Reveal>
			<div class="gradient-outline" id="project-description">
				{@html data.project.description}
				{#if data.project.url}
					<a class="gradient-background main-btn project-url" target="_blank" href={data.project.url}>give it a try</a>
				{/if}
			</div>
			</Reveal>
		{/if}
	</div>
	</Reveal>
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
		margin-left: -10%;
    }

	.project-info {
		display: flex;
		flex-direction: column;
		align-items: center;
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
		cursor: pointer;

		&:hover {
			color: $accent1;
		}
	}

	@media (min-width: 768px) {
		#back-btn {
			width: fit-content;
			inline-size: fit-content;
		}

		.project-section {
			flex-direction: row;
		}

		.project-img {
			width: 35rem;
			margin: 0;
		}

		.project-info {
			align-items: flex-start;
		}

		#project-description {
			position: relative;
		}

		.project-url {
			position: absolute;
			bottom: -1.5rem;
			right: 1rem;
		}
	}
</style>