<script lang="ts">
	import Icon from '@iconify/svelte';
	import type { PageProps } from './$types';
	import { goto } from '$app/navigation';
	import Reveal from '$lib/components/Reveal.svelte';
	import { isMobile } from "$lib/stores/layout";
	import Carousel from '$lib/components/Carousel.svelte';
	import { projects } from '$lib/data/projects';

	let { data }: PageProps = $props();
	
	function goBack() {
		goto('/portfolio')
	}
</script>

{#if $isMobile}
<Reveal>
<h1 id="project-heading">{data.project.name}</h1>
</Reveal>
{/if}
<Reveal>
<button onclick={() => goBack()} id="back-btn">
	<Icon icon="mdi:arrow-back"></Icon>
	<span>all projects</span>
</button>
</Reveal>
<div class="project-section" id="project-intro">
	<Reveal>
	<img class="project-img" src="/img/projects/{data.project.slug}/{data.project.img}" alt={data.project.name}>
	</Reveal>
	<Reveal>
	<div class="project-info">
		{#if !$isMobile}
		<Reveal>
			<h1 id="project-heading">{data.project.name}</h1>
		</Reveal>
		{/if}
		<Reveal>
			<div id="project-duration">
				<Icon icon="tabler:clock-filled" style="width: 1.3rem; height: 1.3rem"/>
				<div>{data.project.duration}</div>
			</div>
		</Reveal>
		{#if $isMobile}
			<Reveal>
			<div class="project-technologies">
				{#each data.project.technologies as tech, i}
					<div class="list-item">
						<Icon icon={tech.icon}/>
						<span class="list-text">{tech.name}</span>
					</div>
				{/each}
			</div>
			</Reveal>
			<Reveal>
			<div class="gradient-outline" id="project-short-description">{@html data.project.shortDescription}</div>
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
			<div class="gradient-outline gradient-outline-btn" id="project-short-description">
				{@html data.project.shortDescription}
				{#if data.project.url}
					<a class="gradient-background main-btn project-url" target="_blank" href={data.project.url}>give it a try</a>
				{/if}
			</div>
			</Reveal>
			<Reveal>
			<div class="project-technologies">
				{#each data.project.technologies as tech, i}
					<div class="list-item">
						<Icon icon={tech.icon}/>
						<span class="list-text">{tech.name}</span>
					</div>
				{/each}
			</div>
			</Reveal>
		{/if}
	</div>
	</Reveal>
</div>
<Reveal>
<div id="project-description-container" class="project-section">
	<div id="project-seperator">
		<div class="seperator gradient-background"></div>
	</div>
	<div id=project-description>
		{@html data.project.description}
	</div>
</div>
</Reveal>
<div class="project-section" id="project-key-facts-container">
	<div id="project-key-facts">
		{#if $isMobile}
		<Reveal>
			<h2 class="heading-underlined project-heading"><span class="heading-light">Key</span> Features</h2>
		</Reveal>
		<Reveal>
			{#each data.project.features as feat, i}
				<div class="project-feature">{feat}</div>
			{/each}
		</Reveal>
		{:else}
		<Reveal>
			<h2 class="heading-underlined project-heading"><span class="heading-light">Key</span> Features</h2>
			{#each data.project.features as feat, i}
				<div class="project-feature">{feat}</div>
			{/each}
		</Reveal>
		{/if}
	</div>
	<Reveal>
	<img class="project-img text-img" src="/img/projects/{data.project.slug}/{data.project.img2}" alt={data.project.name}>
	</Reveal>
</div>
<div class="project-section" id="project-implementation">
	<Reveal>
		<h2 class="heading-underlined project-heading"> Implementation</h2>
	</Reveal>
	<Reveal>
	<div class="gradient-outline" id="project-implementation-text">
		{@html data.project.implementation}
	</div>
	</Reveal>
</div>
<div class="project-section" id="project-learnings">
	<div id="project-learnings-text">
	<Reveal>
		<h2 class="heading-underlined project-heading"><span class="heading-light">My</span> Learnings</h2>
	</Reveal>
	<Reveal>
		{@html data.project.learnings}
	</Reveal>
	</div>
	<div id="project-additional-img">
	<Reveal>
      <Carousel width="35rem">
        {#each data.project.additionalImg as img, i}
          <div class="embla__slide">
            <img class="project-carousel-img" src="/img/projects/{data.project.slug}/{img}" alt={data.project.name}>
		  </div>
        {/each}
      </Carousel>
    </Reveal>
	</div>
</div>

<style lang="scss">
	@use '/src/styles/index' as *;

	#project-heading {
		font-size: 4em;
		margin-top: 0;
	}

	#project-duration {
		margin: 1.5rem 0;
		color: $text-clr;
		font-weight: 600;
		display: flex;
		gap: 0.5rem;
		align-items: center;
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

	#project-short-description {
		margin-bottom: 2rem;
		font-size: 1.2em;
		line-height: 1.4em;
			a {
				font-size: 0.9em;
			}
	}

	.project-img {
        max-width: 80vw;
		max-height: 22rem;
		width: auto;
		height: auto;
		object-fit: contain;
    }

	.project-carousel-img {
 		max-width: 80vw;
		max-height: 25rem;
		width: auto;
		height: auto;
		object-fit: contain;
	}

	.text-img {
		margin-top: 3rem;
	}

	.project-info {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.project-technologies {
        display: flex;
        align-items: center;
        gap: 0.4rem;
        margin-top: 2rem;
        margin-bottom: 1.5rem;
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

	#back-btn {
		align-self: flex-start;
		color: $bg;
		font-size: 1.4em;
		font-family: $heading-text;
		display: flex;
		align-items: center;
		gap: 0.3rem;
		font-weight: bold;
		cursor: pointer;

		&:hover {
			color: $accent1;
		}
	}

	#project-description-container {
		display: flex;
		flex-direction: row;
		align-items: stretch;
		justify-content: center;
		gap: 1.5rem;
		margin: 4rem 0;
	}

	#project-description {
		line-height: 1.4em;
	}

	#project-seperator {
		display: flex;
		align-items: center;
    }

	.seperator {
		height: 100%;
		width: 0.2rem;
		border-radius: 2rem;
	}

	.project-heading {
		margin-bottom: 1rem;
	}

	.project-feature {
		margin: 1rem 0;

		&::before {
			display: inline-block;
			content: '';
			-webkit-border-radius: 0.375rem;
			border-radius: 0.375rem;
			height: 0.6rem;
			width: 0.6rem;
			margin-right: 0.5rem;
			background-color: $accent1;
		}
	}

	#project-key-facts {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	#project-implementation {
		margin: 4rem 0;
	}

	#project-implementation-text {
		line-height: 1.4em;
	}

	#project-learnings-text {
		margin: 0 2rem;
	}

	.embla__slide {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	#project-additional-img {
		margin-top: 4rem;
	}

	@media (min-width: 768px) {
		#back-btn {
			width: fit-content;
			inline-size: fit-content;
		}

		.project-section {
			flex-direction: row;
		}

		.text-img {
			margin-top: 0;
		}

		#project-duration {
			color: $bg;
			margin-top: 0;
		}

		#project-short-description {
			margin-bottom: 3rem;
		}

		.project-technologies {
			margin-top: 0.5rem;
		}

		.project-info {
			align-items: flex-start;
		}

		#project-short-description {
			position: relative;
		}

		.project-url {
			position: absolute;
			bottom: -1.5rem;
			right: 1rem;
		}

		#project-description {
			font-size: 1.1em;
			width: 70%;
		}

		#project-key-facts {
			align-items: flex-start;
		}

		.project-feature {
			font-size: 1.1em;
		}

		.project-img {
			max-width: 25rem;
			max-height: 25rem;
			margin: 0 4rem;
		}

		.project-carousel-img {
			max-width: 30rem;
			max-height: 25rem;
		}

		#project-implementation {
			flex-direction: column;
			width: 80%;
			font-size: 1.1em;
		}

		#project-learnings {
			flex-direction: row-reverse;
			gap: 4rem;
		}

		#project-additional-img {
			margin-top: 0;
		}
	}
</style>