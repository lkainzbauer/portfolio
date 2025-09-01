<script>
	import Reveal from "$lib/components/Reveal.svelte";
	import Socials from "$lib/components/Socials.svelte";

</script>

<Reveal>
<h1>Contact</h1>
</Reveal>

<Reveal>
<div class="contact-section gradient-outline" id="contact-short">
    <h2 class="outline-heading"><span class="heading-light">Contact</span> Me</h2>
    <span>laura.kainzbauer@gmail.com</span>
    <Socials --socials-size="1.6rem" />
</div>
</Reveal>

<div class="contact-section">
    <Reveal>
    <p>Lorem ipsum dolor sit amet consectetur. Gravida cursus purus eget tincidunt etiam urna. A eget vitae non est quis. Nibh at pellentesque in faucibus. In etiam gravida suspendisse at phasellus auctor enim faucibus accumsan. Mattis justo lectus interdum vivamus arcu sed et vehicula enim. Volutpat.</p>
    </Reveal>
</div>

<style lang="scss">

    .contact-section {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 2rem 0;
        gap: 2rem;

        p {
            text-align: center;
        }
    }

    #contact-short {
        margin-top: 10rem;
        width: 80%;
        padding: 3rem 2rem;
    }
</style>