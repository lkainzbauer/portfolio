<script lang="ts">
  import { fly } from "svelte/transition";

  export let threshold: number | number[] = 0.50; // visible parts of element before revealing
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

<div use:setup>
  {#if entered}
    <div in:fly={{ y, duration, delay }}>
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
</style>