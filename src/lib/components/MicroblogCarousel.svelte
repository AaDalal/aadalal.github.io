<script lang="ts">
	import type { Post } from '$lib/api.server';
	import MicroblogCard from './MicroblogCard.svelte';

	export let microblogs: Post[] = [];

	// Get the last 5 microblogs
	const recentMicroblogs = microblogs.slice(0, 5);
</script>

<div class="mb-8 w-full max-w-4xl">
	<h2 class="text-4xl font-junicode mb-4 mt-6">Recent Thoughts</h2>
	<div class="flex gap-4 overflow-x-auto snap-x snap-mandatory carousel-scrollbar">
		{#each recentMicroblogs as microblog}
			<MicroblogCard
				{microblog}
				href="/t/{microblog.slug}"
				containerClass="flex-shrink-0 w-72 h-48 hover:opacity-80 transition-opacity snap-start"
				contentClass="line-clamp-6"
			/>
		{/each}
		<a
			href="/t"
			class="flex-shrink-0 w-72 h-48 dark:bg-orange-800 bg-orange-900/60 p-4 flex items-center justify-center hover:opacity-80 transition-opacity snap-start"
		>
			<span class="text-2xl font-junicode">see all →</span>
		</a>
	</div>
</div>

<style>
	/* Dark mode scrollbar styling */
	:global(.dark) .carousel-scrollbar::-webkit-scrollbar-thumb {
		background: rgba(255, 255, 255, 0.3);
	}

	:global(.dark) .carousel-scrollbar::-webkit-scrollbar-thumb:hover {
		background: rgba(255, 255, 255, 0.4);
	}

	/* Firefox dark mode */
	:global(.dark) .carousel-scrollbar {
		scrollbar-color: rgba(255, 255, 255, 0.3) transparent;
	}
</style>
