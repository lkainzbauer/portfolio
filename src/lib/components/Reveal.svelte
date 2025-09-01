<script lang="ts">
  import { fly } from "svelte/transition";

  export let threshold: number | number[] = 0.50;
  export let root: Element | null = null;           // keep null unless you have a scroll container
  export let rootMargin = "0px";
  export let once = true;
  export let y = 200;           // fly distance
  export let duration = 500;   // fly duration
  export let delay = 0;

  let entered = false; // avoid SSR hydration mismatch

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