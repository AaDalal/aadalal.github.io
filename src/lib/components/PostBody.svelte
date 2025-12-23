<script lang="ts">
	interface Props {
		content: string;
		title: string;
		date: string;
		className?: string;
	}

	let { content, title, date, className = '' }: Props = $props();
</script>

<div class={className}>
	<article class="max-w-2xl mx-auto px-3 mt-4">
		<header>
			<div class="italic opacity-75 mt-10 mb-5">
				<time>{date}</time>
			</div>
			<h1 class="text-8xl w-3/4 font-junicode mb-10">
				{title}
			</h1>
		</header>
		<section
			class="prose dark:prose-invert prose-a:text-blue-600 dark:prose-a:text-blue-500 hover:prose-a:text-blue-900 hover:dark:prose-a:text-blue-800 dark:prose-pre:border-gray-900 dark:prose-pre:border"
		>
			{@html content}
		</section>
	</article>
</div>
