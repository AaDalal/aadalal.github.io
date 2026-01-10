<script lang="ts">
	import type { PageData } from './$types';
	import MicroblogCard from '$lib/components/MicroblogCard.svelte';

	let { data }: { data: PageData } = $props();
	const microblogs = $derived(data.microblogs);
</script>

<svelte:head>
	<title>Thoughts</title>
</svelte:head>

<main>
	<div class="max-w-2xl mx-auto px-3 my-4">
		<div class="italic mt-10 mb-5">
			&nbsp;
		</div>
		<div class="text-8xl w-3/4 font-junicode mb-8">Thoughts</div>
		<div class="flex flex-col gap-6">
			{#each microblogs as microblog}
				<MicroblogCard
					{microblog}
					htmlContent={microblog.htmlContent}
					showFullContent={true}
					href="/t/{microblog.slug}"
					containerClass="p-6"
					dateClass="text-sm opacity-70 mt-4"
				/>
			{/each}
		</div>
	</div>
</main>
