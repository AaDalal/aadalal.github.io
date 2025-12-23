<script lang="ts">
	import DarkModeSwitch from './DarkModeSwitch.svelte';
	import { linkFromSlug } from '$lib/postHelpers';
	import type { Post } from '$lib/api.server';

	interface Props {
		currentPost: Post;
		posts: Post[];
		style?: string;
	}

	let { currentPost, posts, style }: Props = $props();

	const loc = $derived.by(() => {
		const index = posts.map((post) => post.slug ?? '').indexOf(currentPost.slug ?? '');
		return index === -1 ? 0 : index;
	});

	const previous = $derived(posts.slice(0, loc));
	const next = $derived(posts.slice(loc + 1));
</script>

<div {style} class="full grid grid-cols-8 font-medium">
	<div
		class="col-span-8 md:col-span-2 p-4 border-2 flex flex-row justify-between items-center flex-shrink"
	>
		<DarkModeSwitch />
	</div>
	<div
		class="col-span-0 hidden md:col-span-6 py-4 px-2 border-y-2 border-r-2 md:grid grid-cols-16 gap-6 overflow-hidden whitespace-nowrap items-center justify-center"
	>
		<div class="col-span-5 flex justify-end items-center flex-shrink gap-5">
			{#each previous as post (post.slug ?? '')}
				<a href={linkFromSlug(post.slug ?? '')} class="opacity-75">{post.title ?? ''}</a>
			{/each}
		</div>
		<div class="col-span-6 flex flex-row justify-between items-center flex-shrink-0 z-10">
			<a
				id="previous-post"
				href={linkFromSlug(posts[loc - 1]?.slug ?? '')}
				class={posts[loc - 1] ? '' : 'opacity-50 cursor-not-allowed'}
				aria-label="Previous post"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-8"
					fill="currentColor"
					viewBox="144 64 224 384"
					><path d="M368 64L144 256l224 192V64z" /></svg
				>
			</a>
			<div class="shrink text-2xl font-junicode bg-white dark:bg-black">
				{currentPost.title ?? ''}
			</div>
			<a
				id="next-post"
				href={linkFromSlug(posts[loc + 1]?.slug ?? '')}
				class={posts[loc + 1] ? '' : 'opacity-50 cursor-not-allowed dark:text-white'}
				aria-label="Next post"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="currentColor"
					class="h-8 dark:text-white"
					viewBox="144 64 224 384"><path d="M144 448l224-192L144 64v384z" /></svg
				>
			</a>
		</div>
		<div class="col-span-5 flex justify-start items-center flex-shrink gap-5">
			{#each next as post (post.slug ?? '')}
				<a href={linkFromSlug(post.slug ?? '')} class="opacity-75">{post.title ?? ''}</a>
			{/each}
		</div>
	</div>
</div>
