<script lang="ts">
  import { fly } from "svelte/transition";

  export let threshold: number | number[] = 0.5; // visible parts of element before revealing
  export let root: Element | null = null; // use viewport as root
  export let rootMargin = "0px";
  export let once = true; // only reveal once on first scrolling
  export let y = 200;
  export let duration = 500;
  export let delay = 0;

  let entered = false;

  function setup(node: HTMLElement) {

    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        entered = true;
        if (once) io.unobserve(node);
      }
    }, { root, rootMargin, threshold });

    io.observe(node);
    return { destroy() { io.disconnect(); } };
  }
</script>

<div class="reveal-container" use:setup>
  {#if entered}
    <div class="reveal-inner-container" in:fly={{ y, duration, delay }}>
      <slot />
    </div>
  {/if}
</div>

{#if !entered}
    <div class="reveal-placeholder"></div>
{/if}

<style>
  .reveal-placeholder {
      height: 100vh;
  }

  .reveal-container:has(> .reveal-inner-container > :global(h1)),
  .reveal-container:has(> .reveal-inner-container > :global(#back-btn)) {
    inline-size: 100%;
  }
  :global(.reveal-container > .reveal-inner-container > h1),
  :global(.reveal-container > .reveal-inner-container > #back-btn) {
    inline-size: 100%;
  }
</style>