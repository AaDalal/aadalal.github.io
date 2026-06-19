<script lang="ts">
	// LabeledBox renders a bordered box with a pill label centered on its top edge.
	// The label's corner radius tracks the box radius at a fixed 0.6x ratio.
	import type { Snippet } from 'svelte';

	interface Props {
		label: string;
		boxRadius?: string;
		fontFamily?: string;
		color?: string;
		children: Snippet;
	}

	let { label, boxRadius = '12px', fontFamily, color = '#6366f1', children }: Props = $props();

	const style = $derived(
		`--box-radius: ${boxRadius}; --box-color: ${color};` +
			(fontFamily ? ` font-family: ${fontFamily};` : '')
	);
</script>

<div class="labeled-box" {style}>
	<div class="label">{label}</div>
	{@render children()}
</div>

<style>
	.labeled-box {
		--box-radius: 12px;
		--box-color: #6366f1;
		--label-radius: calc(var(--box-radius) * 0.6);
		position: relative;
		border: 2px solid var(--box-color);
		border-radius: var(--box-radius);
		padding: 2rem 1.5rem 1.5rem;
	}

	.label {
		position: absolute;
		top: 0;
		left: 50%;
		transform: translate(-50%, -50%);
		background: var(--box-color);
		color: white;
		padding: 0.25rem 1rem;
		border-radius: var(--label-radius);
		white-space: nowrap;
		font-size: 0.875rem;
		font-weight: 600;
		line-height: 1.4;
		/* Label always uses the UI font, independent of the box's font */
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial,
			sans-serif;
	}
</style>
