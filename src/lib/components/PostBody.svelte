<script lang="ts">
	import type { PostLink } from '$lib/api.server';

	interface Props {
		content: string;
		title: string;
		date: string;
		className?: string;
		context_for_this?: PostLink[];
		further_thinking?: PostLink[];
	}

	let { content, title, date, className = "", context_for_this, further_thinking }: Props = $props();
</script>

<div class={className}>
	<article class="max-w-2xl mx-auto px-3 mt-4">
		<header>
			<div class="min-h-20 py-2 flex items-end">
				<a href="/">
					&larr; Back
				</a>	
			</div>
			<div class="dark:bg-orange-800 bg-orange-900/60">
				<div class="italic opacity-75 mb-2 ml-2 bg-transparent">
					<time>{date}</time>
				</div>
				<h1 class="text-8xl leading-none w-3/4 font-junicode mb-10 ml-1 bg-none">
						{title}
				</h1>
			</div>
		</header>
		<section
			class="prose dark:prose-invert prose-a:text-blue-600 dark:prose-a:text-blue-500 hover:prose-a:text-blue-900 hover:dark:prose-a:text-blue-800 dark:prose-pre:border-gray-900 dark:prose-pre:border leading-1 first-letter:text-5xl first-letter:mr-2 first-letter:leading-none first-letter:float-left first-letter:border-solid first-letter:px-1"
		>
			{@html content}
		</section>

		{#if context_for_this && context_for_this.length > 0}
			<div class="mt-8 pt-4 border-t border-gray-300 dark:border-gray-700">
				<h3 class="text-lg font-semibold mb-2 font-junicode">Context for this</h3>
				<ul class="list-none pl-0 text-lg">
					{#each context_for_this as link}
						<li class="mb-1">
							<a href={link.href} class="text-blue-600 dark:text-blue-500 hover:text-blue-900 hover:dark:text-blue-800">
								{link.link_text || link.href}
							</a>
						</li>
					{/each}
				</ul>
			</div>
		{/if}

		{#if further_thinking && further_thinking.length > 0}
			<div class="mt-6">
				<h3 class="text-lg font-semibold mb-2 font-junicode">Further thinking</h3>
				<ul class="list-none pl-0 text-lg">
					{#each further_thinking as link}
						<li class="mb-1">
							<a href={link.href} class="text-blue-600 dark:text-blue-500 hover:text-blue-900 hover:dark:text-blue-800">
								{link.link_text || link.href}
							</a>
						</li>
					{/each}
				</ul>
			</div>
		{/if}
	</article>
</div>
