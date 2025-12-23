<script>
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';

	let isDarkMode = $state(false);
	let mounted = $state(false);

	const setIsDarkOrLight = (mode) => {
		if (!browser) return;
		if (mode) {
			localStorage.theme = 'dark';
			document.documentElement.classList.add('dark');
		} else {
			localStorage.theme = 'light';
			document.documentElement.classList.remove('dark');
		}
	};

	const checkDarkMode = () => {
		if (!browser) return false;
		return (
			localStorage.theme === 'dark' ||
			(!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
		);
	};

	onMount(() => {
		isDarkMode = checkDarkMode();
		setIsDarkOrLight(isDarkMode);
		mounted = true;
	});

	const toggle = () => {
		isDarkMode = !isDarkMode;
		setIsDarkOrLight(isDarkMode);
	};

	let size = 24;
	let moonColor = 'white';
	let sunColor = 'black';
</script>

{#if mounted}
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={size}
		height={size}
		viewBox="0 0 24 24"
		color={isDarkMode ? moonColor : sunColor}
		fill="none"
		stroke-width="2"
		stroke-linecap="round"
		stroke-linejoin="round"
		stroke="currentColor"
		onclick={toggle}
		style="cursor: pointer; transition: transform 0.3s; transform: rotate({isDarkMode ? 40 : 90}deg);"
	>
		<mask id="circle-mask">
			<rect x="0" y="0" width="100%" height="100%" fill="white" />
			<circle
				cx={isDarkMode ? '50%' : '100%'}
				cy={isDarkMode ? '23%' : '0%'}
				r="9"
				fill="black"
				style="transition: cx 0.3s, cy 0.3s;"
			/>
		</mask>
		<circle
			cx="12"
			cy="12"
			fill={isDarkMode ? moonColor : sunColor}
			r={isDarkMode ? 9 : 5}
			mask="url(#circle-mask)"
			style="transition: r 0.3s;"
		/>
		<g stroke="currentColor" style="opacity: {isDarkMode ? 0 : 1}; transition: opacity 0.3s;">
			<line x1="12" y1="1" x2="12" y2="3" />
			<line x1="12" y1="21" x2="12" y2="23" />
			<line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
			<line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
			<line x1="1" y1="12" x2="3" y2="12" />
			<line x1="21" y1="12" x2="23" y2="12" />
			<line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
			<line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
		</g>
	</svg>
{/if}
