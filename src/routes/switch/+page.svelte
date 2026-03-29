<script lang="ts">
	const isOn = true;
</script>

<svelte:head>
	<title>switch | aagam's blog</title>
</svelte:head>

<main class="flex items-center align-center">
	<p class="text-2xl">
	the switch is <span class="font-bold italic">{isOn ? 'alive' : 'dead'}</span>
	</p>
</main>