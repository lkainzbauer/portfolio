<script lang="ts">
	let { children } = $props();
</script>

<nav>
	<a href="/">Home</a>
    <a href="/portfolio">Portfolio</a>
	<a href="/about-me">About Me</a>
	<a href="/contact">Contact</a>
</nav>

{@render children()}