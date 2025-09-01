<script lang="ts">
	import { goto } from "$app/navigation";
	import Carousel from "$lib/components/Carousel.svelte";
  import Reveal from "$lib/components/Reveal.svelte";
	import Socials from "$lib/components/Socials.svelte";
  let { data } = $props();

  function navigateTo(url: string) {
    goto('/'+ url);
  }
</script>

<div id="home-heading">
  <Reveal>
  <h1>Welcome</h1>
  </Reveal>
  <Reveal>
  <p class="greeting">Get to know me and my projects!</p>
  </Reveal>
</div>

<Reveal>
<div class="home-section gradient-outline" id="home-intro">
  <p id="home-intro-text">Lorem ipsum dolor sit amet consectetur. Gravida cursus purus eget tincidunt etiam urna. A eget vitae non est quis. Nibh at pellentesque in faucibus. In etiam gravida suspendisse at phasellus auctor enim faucibus accumsan. Mattis justo lectus interdum vivamus arcu sed et vehicula enim. Volutpat.</p>
  <a class="gradient-background main-btn" id="home-intro-btn" href="/about-me">about me</a>
</div>
</Reveal>


<div class="home-section" id="home-project">
  <Reveal>
    <h2 class="heading-underlined"><span class="heading-light">My </span> Projects</h2>
  </Reveal>
  <Reveal>
    <Carousel>
      {#each data.projects as proj, i}
        <!-- svelte-ignore a11y_click_events_have_key_events -->
        <!-- svelte-ignore a11y_no_static_element_interactions -->
        <div class="embla__slide" onclick={() => navigateTo("portfolio")}>
          <img class="home-project-img" src="img/projects/{proj.imgName}" alt={proj.name}>
        </div>
      {/each}
    </Carousel>
  </Reveal>
  <Reveal>
  <p>Lorem ipsum dolor sit amet consectetur. Gravida cursus purus eget tincidunt etiam urna. A eget vitae non est quis. Nibh at pellentesque in faucibus. In etiam gravida suspendisse at phasellus auctor enim faucibus accumsan. Mattis justo lectus interdum vivamus arcu sed et vehicula enim. Volutpat.</p>
  </Reveal>
  <Reveal>
  <div class="gradient-background main-btn home-project-btn">
    <a class="main-btn home-project-btn" href="/portfolio">take a look</a>
  </div>
  </Reveal>
</div>

<div class="home-section">
  <Reveal>
    <p class="heading-underlined" id="home-section-contact">Feel Free To Contact Me!</p>
  </Reveal>
  <Reveal>
  <div class="gradient-outline">
    <Socials />
  </div>
  </Reveal>
</div>

<style lang="scss">
	@use '/src/styles/index' as *;

  #home-heading {
    color: $bg;
    margin-bottom: 6rem;
    width: 100%;
  }

  #home-intro {
    position: relative;
    margin-bottom: 5rem;
  }

  #home-intro-text {
    margin: 0;
  }

  #home-intro-btn {
    position: absolute;
    bottom: -1.5rem;
    right: 1rem;
  }

  .greeting {
    font-size: 1.2em;
    margin: 0;
  }

  .home-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 3rem 0;

    a {
      text-decoration: none;
    }
  }

  #home-project {
    width: 100%;
  }

  .home-project-img {
    width: 100%;
  }

  .home-project-btn {
    margin-top: 1rem;
  }

  #home-section-contact {
    margin: 0;
    margin-bottom: 2rem;
    font-size: 1.2em;
  }

  .embla__slide {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
</style>