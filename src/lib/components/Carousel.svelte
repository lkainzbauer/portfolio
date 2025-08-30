<script>
    // @ts-nocheck
    import emblaCarouselSvelte from 'embla-carousel-svelte';

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
            <div class="embla__slide">
                Slide 1
            </div>
            <div class="embla__slide">Slide 2</div>
            <div class="embla__slide">Slide 3</div>
        </div>
    </div>
    <button class="embla__prev" onclick={prevSlide}>Prev</button>
    <button class="embla__next" onclick={nextSlide}>Next</button>
</div>

<style>
  .embla {
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
  }
</style>
