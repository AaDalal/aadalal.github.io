<script lang="ts">
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
	const microblogs = $derived(data.microblogs);
</script>

<svelte:head>
	<title>Tiny Thoughts</title>
</svelte:head>

<main>
	<div class="max-w-2xl mx-auto px-3 my-4">
		<h1 class="text-6xl font-junicode mb-8 mt-10">Tiny Thoughts</h1>
		<div class="flex flex-col gap-6">
			{#each microblogs as microblog}
				<div class="dark:bg-orange-800 bg-orange-900/60 p-6 rounded-lg">
					<div class="prose dark:prose-invert max-w-none">
						{@html microblog.htmlContent}
					</div>
					<div class="text-right text-sm opacity-70 mt-4">
						{new Date(microblog.date || '').toLocaleDateString('en-US', {
							year: 'numeric',
							month: 'long',
							day: 'numeric'
						})}
					</div>
				</div>
			{/each}
		</div>
	</div>
</main>
