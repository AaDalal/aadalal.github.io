<script lang="ts">
	import type { Post } from '$lib/api.server';

	interface Props {
		microblog: Post;
		htmlContent?: string;
		containerClass?: string;
		contentClass?: string;
		dateClass?: string;
		href: string;
		showFullContent?: boolean;
	}

	let {
		microblog,
		htmlContent = '',
		containerClass = '',
		contentClass = '',
		dateClass = 'text-xs opacity-75 mt-2',
		href,
		showFullContent = false
	}: Props = $props();

	const dateString = $derived(
		new Date(microblog.date || '').toLocaleDateString('en-US', {
			year: 'numeric',
			month: showFullContent ? 'long' : 'short',
			day: 'numeric'
		})
	);

	const Tag = $derived(showFullContent ? 'div' : 'a');
</script>

<svelte:element
	this={Tag}
	href={showFullContent ? undefined : href}
	class="dark:bg-orange-800 bg-orange-900/40 p-4 flex flex-col {showFullContent ? '' : 'justify-between'} {containerClass}"
>
	<div class="overflow-hidden {showFullContent ? '' : 'flex-1'} {contentClass}">
		{#if showFullContent}
			<div class="prose dark:prose-invert max-w-none">
				{@html htmlContent}
			</div>
		{:else}
			<p class="text-sm">{microblog.content?.substring(0, 200) || ''}</p>
		{/if}
	</div>

	{#if showFullContent && microblog.context_for_this && microblog.context_for_this.length > 0}
		<div class="mt-6 pt-4 border-t border-gray-300 dark:border-gray-700">
			<h4 class="text-lg font-semibold mb-2 font-junicode">Context for this</h4>
			<ul class="list-none pl-0 text-lg">
				{#each microblog.context_for_this as link}
					<li class="mb-1">
						<a
							href={link.href}
							class="text-blue-600 dark:text-blue-500 hover:text-blue-900 hover:dark:text-blue-800"
							onclick={(e) => e.stopPropagation()}
						>
							{link.link_text || link.href}
						</a>
					</li>
				{/each}
			</ul>
		</div>
	{/if}

	{#if showFullContent && microblog.further_thinking && microblog.further_thinking.length > 0}
		<div class="mt-4">
			<h4 class="text-lg font-semibold mb-2 font-junicode">Further thinking</h4>
			<ul class="list-none pl-0 text-lg">
				{#each microblog.further_thinking as link}
					<li class="mb-1">
						<a
							href={link.href}
							class="text-blue-600 dark:text-blue-500 hover:text-blue-900 hover:dark:text-blue-800"
							onclick={(e) => e.stopPropagation()}
						>
							{link.link_text || link.href}
						</a>
					</li>
				{/each}
			</ul>
		</div>
	{/if}

	<div class="text-right {dateClass}">
		{dateString}
	</div>
</svelte:element>
