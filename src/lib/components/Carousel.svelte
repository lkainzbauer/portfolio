<script>
    // @ts-nocheck
    import emblaCarouselSvelte from 'embla-carousel-svelte';
    import Icon from '@iconify/svelte';
    import { experiences } from '$lib/data/experiences';

    let emblaApi;
    let options = { loop: true }

    function onInit(event) {
        emblaApi = event.detail;
    }

    function prevSlide() {
        emblaApi.scrollPrev();
    }

     function nextSlide() {
        emblaApi.scrollNext();
    }
</script>

<div class="embla">
    <div class="embla__viewport"
     use:emblaCarouselSvelte={{ options }}
       onemblaInit={onInit}>
        <div class="embla__container">
            {#each experiences as exp, i}
                <div class="embla__slide">
                    <h3>{exp.company}</h3>
                    <div class="container-outline carousel-outline">
                        <span class="experience-description">
                            {exp.description}
                        </span>
                    </div>
                    <span class="experience-timeframe">
                        {exp.timeframe}
                    </span>
                </div>
            {/each}
        </div>
    </div>
    <button class="embla__prev carousel-btn" onclick={prevSlide}><Icon icon="mdi:navigate-before" class="carousel-icon"/></button>
    <button class="embla__next carousel-btn" onclick={nextSlide}><Icon icon="mdi:navigate-next" class="carousel-icon"/></button>
</div>

<style lang="scss">
    @use '/src/styles/index' as *;

  .embla {
    margin: 1.75rem 0;
    position: relative;
  }

  .embla__viewport {
    overflow: hidden;
    width: 100%;
  }

  .embla__container {
    display: flex;
    width: 100%;
  }
  .embla__slide {
    flex: 0 0 100%;
    min-width: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .carousel-btn {
    position: absolute;
    padding: 0;
    height: 100%;
    top: 0;
  }
  .embla__prev {
    left: 0;
  }

  .embla__next {
    right: 0;
  }

  :global(.carousel-icon) {
    font-size: 2em;
  }

  .carousel-outline {
    border-radius: 50px;
    width: 70%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0.75rem 0;
    padding: 1.1rem 0;
  }

  .experience-description {
    font-size: 1em;
  }

  .experience-timeframe {
    font-family: $heading-text;
    margin: 1rem 0;
  }

</style>
