<script lang="ts">
	import Carousel from "$lib/components/Carousel.svelte";
  import Reveal from "$lib/components/Reveal.svelte";
	import Socials from "$lib/components/Socials.svelte";
  let { data } = $props();
  import { isMobile } from "$lib/stores/layout";

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
<div class="home-section gradient-outline gradient-outline-btn" id="home-intro">
  <p id="home-intro-text" class="line-height">
    <span>My name is Laura and I am a web developer, UI/UX designer and data visualization specialist!</span>
    <span>I enjoy developing websites and apps that are intuitive to use and fun to interact with. My workflow ranges from identifying user needs to creating prototypes, implementing designs, and finally testing and evaluating the results.</span>
  </p>
  <a class="gradient-background main-btn" id="home-intro-btn" href="/about-me">about me</a>
</div>
</Reveal>


<div class="home-section" id="home-project">
  <Reveal>
    <h2 class="heading-underlined"><span class="heading-light">My </span> Projects</h2>
  </Reveal>
  <div class="home-project-content">
    <Reveal>
      <Carousel>
        {#each data.projects as proj, i}
          <!-- svelte-ignore a11y_click_events_have_key_events -->
          <!-- svelte-ignore a11y_no_static_element_interactions -->
          <a class="embla__slide"  href={"/portfolio/" + proj.slug}>
            <img class="home-project-img" src="img/projects/{proj.slug}/{proj.img}" alt={proj.name}>
          </a>
        {/each}
      </Carousel>
    </Reveal>
    <div id="home-project-info" class="line-height">
      <Reveal>
      <p>Browse through a selection of the projects I have worked on throughout my studies and collaborative work. These projects showcase a wide range of my skills, including full-stack web-apps, visualization tools  and story-based projects. Feel free to take a closer look at my full portfolio and check out any projects that catch your eye!</p>
      </Reveal>
      <Reveal>
        <a class="gradient-background main-btn home-project-btn" href="/portfolio">take a look</a>
      </Reveal>
    </div>
  </div>
</div>

<div class="home-section">
  {#if $isMobile}
  <Reveal>
    <p class="heading-underlined" id="home-section-contact-text">Feel Free To Contact Me!</p>
  </Reveal>
  <Reveal>
  <div class="gradient-outline">
    <Socials --socials-color="#ffffff"/>
  </div>
  </Reveal>
  {:else}
  <Reveal>
  <div class="gradient-outline" id="home-section-contact">
    <p class="heading-underlined" id="home-section-contact-text">Feel Free To Contact Me!</p>
    <Socials --socials-color="#ffffff"/>
  </div>
  </Reveal>
  {/if}
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
    padding-bottom: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
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

  #home-project-info {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .home-project-content {
    width: 100%;
    margin-top: 2rem;
  }

  .home-project-img {
    max-width: 70vw;
		max-height: 20rem;
		width: auto;
		height: auto;
		object-fit: contain;
  }

  .home-project-btn {
    display: block;
    margin-top: 1rem;
    padding: 0.9rem 4rem;
  }

  #home-section-contact-text {
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

  @media (min-width: 768px) {

    .embla {
      width: 30rem;
    }
    #home-heading {
      margin: 2rem 0 8rem 0;
    }

    #home-intro {
      width: 40rem;
    }

    .greeting {
      font-size: 1.7em;
    }

    #home-intro-text {
      padding: 0;
      font-size: 1.1em;
    }

    .home-project-content {
      display: flex;
      align-items: center;
      gap: 4rem;
      margin-top: 3rem;
    }

    .home-project-img {
      max-width: 35rem;
      max-height: 30rem;
    }

    #home-project-info {
      align-items: flex-end;
      gap: 1rem;
    }

    #home-section-contact {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 3rem 4rem;
    }
  }
</style>