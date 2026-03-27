<script lang="ts">
	import Carousel from "$lib/components/Carousel.svelte";
  import Reveal from "$lib/components/Reveal.svelte";
	import Socials from "$lib/components/Socials.svelte";
  let { data } = $props();
  import { isMobile } from "$lib/stores/layout";

</script>

<div id="home-heading">
  <Reveal>
  <h1><span class="heading-light">Hi, I'm</span> Laura</h1>
  </Reveal>
  <Reveal>
  <p class="greeting">Get to know me and my projects!</p>
  </Reveal>
</div>

<div id="home-intro-container">
  <Reveal>
  <div class="home-section gradient-outline gradient-outline-btn" id="home-intro">
    <p id="home-intro-text" class="line-height">
      I combine <span class="highlight">design</span> and <span class="highlight">code</span> to create <span class="highlight">intuitive</span> and <span class="highlight">user-centered</span> digital experiences!
    </p>
    <a class="gradient-background main-btn" id="home-intro-btn" href="/about-me">about me</a>
  </div>
  </Reveal>
  {#if $isMobile}
        <div id="hero"></div>
  {:else}
      <Reveal>
          <div id="hero"></div>
      </Reveal>
  {/if}
</div>


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
    margin-bottom: 1rem;
    width: 100%;
  }

  #home-intro-container {
    display: flex;
    flex-direction: column-reverse;
    width: 100%;
  }

  #home-intro {
    position: relative;
    margin-bottom: 5rem;
  }

  #home-intro-text {
    margin: 0;
    padding-bottom: 1rem;
    font-family: $heading-text;
    font-size: 1.5em;
    font-weight: 400;
    text-transform: none;
    font-style: italic;

    .highlight {
      font-weight: bold;
      font-style: normal;
      text-transform: uppercase;
    }
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

  #hero {
    background: url("/img/laura-kainzbauer.png") center/cover no-repeat;
    height: 80vh;
    width: 100vw;
    max-width: 120%;
    margin-bottom: 2rem;
    margin-left: -2rem;

    // fade lengths
    --top-fade: 0;
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

    #home-intro-container {
      display: flex;
      flex-direction: row;
      width: 80%;
      justify-content: space-between;
    }

    #home-intro {
      width: 22.28rem;
      margin-top: 0;
    }

    .greeting {
      font-size: 1.7em;
    }

    #hero {
      max-width: none;
      width: 25rem;
      height: 40rem;
      margin-top: -27rem;

      // fade lengths
      --top-fade: 0px;
      --right-fade: 120px;

      -webkit-mask-image: 
      linear-gradient(to bottom,
          transparent 0,
          #000 var(--top-fade),
          #000 calc(100% - var(--bottom-fade)),
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
      );
      mask-composite: intersect;
    }

    #home-intro-text {
      padding: 0;
      font-size: 1.6em;
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