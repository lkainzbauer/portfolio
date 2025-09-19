<script lang="ts">
  import { isMobile } from '$lib/stores/layout';
</script>

<div class="aurora"
  style={`background-image: url('/img/${$isMobile ? 'background-mobile' : 'background'}.svg')`}
></div>

<style lang="scss">
  .aurora {
    width: 100%;
    height: var(--background-size);
    z-index: -1000;
    position: absolute;
    top: 0;
    background-repeat: no-repeat;
    background-position: bottom center;
    background-size: cover;
  }
</style>
