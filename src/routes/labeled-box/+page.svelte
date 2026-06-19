<script lang="ts">
	import LabeledBox from '$lib/components/LabeledBox.svelte';

	const pangram = 'The quick brown fox jumps over the lazy dog.';

	const boxes = [
		{
			label: 'System UI',
			sub: '-apple-system, BlinkMacSystemFont',
			fontFamily:
				'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
			text: `${pangram} System font stack gives native platform feel with clean, readable text.`
		},
		{
			label: 'Lilex',
			sub: 'Monospace',
			fontFamily: "'Lilex', monospace",
			text: `${pangram} Lilex is a modern monospaced font with coding ligatures and clean geometry.`
		},
		{
			label: 'Inter',
			sub: 'Sans-serif',
			fontFamily: "'Inter', sans-serif",
			text: `${pangram} Inter was designed for computer screens with tall x-height for readability.`
		},
		{
			label: 'Playfair Display',
			sub: 'Serif',
			fontFamily: "'Playfair Display', serif",
			text: `${pangram} Playfair Display has high contrast and refined details for editorial use.`
		},
		{
			label: 'JetBrains Mono',
			sub: 'Monospace',
			fontFamily: "'JetBrains Mono', monospace",
			text: `${pangram} JetBrains Mono has increased height for a better reading experience in code.`
		},
		{
			label: 'Large Radius (24px)',
			sub: 'box: 24px · label: 14.4px',
			boxRadius: '24px',
			fontFamily:
				'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
			text: `Same 0.6× ratio applied to a larger box radius. The label pill stays proportional to the container's roundness.`
		}
	];
</script>

<svelte:head>
	<title>Labeled Box Component | aagam's blog</title>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />
	<link
		href="https://fonts.googleapis.com/css2?family=Lilex:wght@400;600&family=Playfair+Display:wght@600&family=JetBrains+Mono:wght@500&family=Inter:wght@500;600&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<main class="min-h-screen bg-gray-950 text-gray-200 p-10">
	<div class="min-h-20 py-2 flex items-end mb-6">
		<a href="/" class="text-blue-500 hover:text-blue-400">&larr; Back</a>
	</div>

	<h1 class="text-3xl font-bold text-white mb-2">Labeled Box Component</h1>
	<p class="text-gray-400 mb-10">
		Label is centered on the top border. Label border-radius is 0.6&times; the box border-radius.
	</p>

	<div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 max-w-7xl">
		{#each boxes as box (box.label)}
			<LabeledBox label={box.label} fontFamily={box.fontFamily} boxRadius={box.boxRadius ?? '12px'}>
				<p
					class="text-gray-400 mb-1 uppercase tracking-wider"
					style="font-size: 0.65rem; font-family: -apple-system, BlinkMacSystemFont, sans-serif;"
				>
					{box.sub}
				</p>
				<p>{box.text}</p>
			</LabeledBox>
		{/each}
	</div>
</main>
