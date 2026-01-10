<script lang="ts">
	import type { Post } from '$lib/api.server';

	interface Props {
		microblog: Post;
		htmlContent?: string;
		containerClass?: string;
		contentClass?: string;
		dateClass?: string;
		href?: string;
		showFullContent?: boolean;
	}

	let {
		microblog,
		htmlContent = '',
		containerClass = '',
		contentClass = '',
		dateClass = 'text-xs opacity-75 mt-2',
		href = '',
		showFullContent = false
	}: Props = $props();

	const dateString = $derived(
		new Date(microblog.date || '').toLocaleDateString('en-US', {
			year: 'numeric',
			month: showFullContent ? 'long' : 'short',
			day: 'numeric'
		})
	);

	const Tag = $derived(href ? 'a' : 'div');
</script>

<svelte:element
	this={Tag}
	{href}
	class="dark:bg-orange-800 bg-orange-900/60 p-4 flex flex-col justify-between {containerClass}"
>
	<div class="overflow-hidden flex-1 {contentClass}">
		{#if showFullContent}
			<div class="prose dark:prose-invert max-w-none">
				{@html htmlContent}
			</div>
		{:else}
			<p class="text-sm">{microblog.content?.substring(0, 200) || ''}</p>
		{/if}
	</div>
	<div class="text-right {dateClass}">
		{dateString}
	</div>
</svelte:element>
