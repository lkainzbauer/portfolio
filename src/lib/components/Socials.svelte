<script>
    import Icon from "@iconify/svelte";
</script>

<div class="socials">
    <a href="mailto:laura.kainzbauer@gmail.com">
        <Icon icon="mdi:alternate-email" class="social" />
    </a>
    <a href="https://github.com/lkainzbauer" target="_blank">
        <Icon icon="mdi:github" class="social" />
    </a>
    <a href="https://www.linkedin.com/in/laura-kainzbauer" target="_blank">
        <Icon icon="mdi:linkedin" class="social" />
    </a>
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
        color: var(--socials-color);

        &:hover {
            color: $accent2;
        }
    }
</style>