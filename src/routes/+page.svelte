<script>
  import Reveal from "$lib/components/Reveal.svelte";
</script>

<div id="home-heading">
  <h1>Welcome</h1>
  <p class="greeting">Get to know me and my projects!</p>
</div>

<div class="home-section container-outline" id="home-intro">
  <p id="home-intro-text">Lorem ipsum dolor sit amet consectetur. Gravida cursus purus eget tincidunt etiam urna. A eget vitae non est quis. Nibh at pellentesque in faucibus. In etiam gravida suspendisse at phasellus auctor enim faucibus accumsan. Mattis justo lectus interdum vivamus arcu sed et vehicula enim. Volutpat.</p>
  <a class="gradient-background main-btn" id="home-intro-btn" href="/about-me">about me</a>
</div>


<div class="home-section" id="home-project">
  <Reveal>
  <img class="home-project-img" src="img/projects/tasmovo.png" alt="Tasmovo">
  </Reveal>
  <Reveal>
  <p>Lorem ipsum dolor sit amet consectetur. Gravida cursus purus eget tincidunt etiam urna. A eget vitae non est quis. Nibh at pellentesque in faucibus. In etiam gravida suspendisse at phasellus auctor enim faucibus accumsan. Mattis justo lectus interdum vivamus arcu sed et vehicula enim. Volutpat.</p>
  </Reveal>
  <Reveal>
  <a class="gradient-background main-btn home-project-btn" href="/portfolio">take a look</a>
  </Reveal>
</div>

<style lang="scss">
	@use '/src/styles/index' as *;

  #home-heading {
    color: $bg;
    margin-bottom: 6rem;
  }

  #home-intro {
    position: relative;
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
</style>