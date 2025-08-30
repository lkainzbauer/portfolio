<script lang="ts">
  import logoSvg from '$lib/assets/logo.svg?raw';
</script>

<div class="animated-logo gradient-background" aria-hidden="true">
  {@html logoSvg}
</div>

<style>
  :global(.animated-logo) {

    -webkit-mask: url('/src/lib/assets/logo.svg') no-repeat center;
    -webkit-mask-size: contain;
    mask: url('/src/lib/assets/logo.svg') no-repeat center;
    mask-size: contain;

    width: 1.5rem;
    height: 2rem;
  }

  :global(.animated-logo svg) {
    display: none;
  }
</style>
