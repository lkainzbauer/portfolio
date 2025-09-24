<script>
    // @ts-nocheck
    import emblaCarouselSvelte from 'embla-carousel-svelte';
    import Icon from '@iconify/svelte';

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
          <slot />
        </div>
    </div>
    <button class="embla__prev carousel-btn" onclick={prevSlide}><Icon icon="mdi:navigate-before" class="carousel-icon"/></button>
    <button class="embla__next carousel-btn" onclick={nextSlide}><Icon icon="mdi:navigate-next" class="carousel-icon"/></button>
</div>

<style lang="scss">
    @use '/src/styles/index' as *;

  .embla {
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

  @media (min-width: 768px) {
    .embla {
      width: 50rem;
    }
  }

</style>
