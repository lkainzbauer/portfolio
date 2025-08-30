<script>
    import Icon from "@iconify/svelte";
</script>

<div class="socials">
    <Icon icon="mdi:alternate-email" class="social" />
    <Icon icon="mdi:github" class="social" />
    <Icon icon="mdi:linkedin" class="social" />
</div>


<style lang="scss">
    @use '/src/styles/index' as *;

    .socials {
        display: flex;
        gap: 1.5rem;
    }

    :global(.social) {
        height: var(--socials-size);
        width: var(--socials-size);
        color: $accent2;
    }
</style>