<script lang="ts">
	interface Props {
		content: string;
		title: string;
		date: string;
		className?: string;
	}

	let { content, title, date, className = "" }: Props = $props();
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
	</article>
</div>
