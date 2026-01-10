<script lang="ts">
	import type { Post } from '$lib/api.server';

	export let microblogs: Post[] = [];

	// Get the last 5 microblogs
	const recentMicroblogs = microblogs.slice(0, 5);
</script>

<div class="mb-8 w-full">
	<h2 class="text-2xl font-junicode mb-4">Recent Thoughts</h2>
	<div class="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory">
		{#each recentMicroblogs as microblog}
			<a
				href="/t/{microblog.slug}"
				class="flex-shrink-0 w-80 h-48 dark:bg-orange-800 bg-orange-900/60 p-4 rounded-lg flex flex-col justify-between hover:opacity-80 transition-opacity snap-start"
			>
				<div class="overflow-hidden">
					<p class="text-sm line-clamp-6">{microblog.content?.substring(0, 200) || ''}</p>
				</div>
				<div class="text-right text-xs opacity-70">
					{new Date(microblog.date || '').toLocaleDateString('en-US', {
						year: 'numeric',
						month: 'short',
						day: 'numeric'
					})}
				</div>
			</a>
		{/each}
		<a
			href="/t"
			class="flex-shrink-0 w-80 h-48 dark:bg-orange-800 bg-orange-900/60 p-4 rounded-lg flex items-center justify-center hover:opacity-80 transition-opacity snap-start"
		>
			<span class="text-2xl font-junicode">see all →</span>
		</a>
	</div>
</div>
