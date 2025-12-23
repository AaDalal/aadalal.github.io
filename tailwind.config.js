/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class',
	theme: {
		extend: {
			gridTemplateColumns: {
				'8': 'repeat(8, minmax(0, 1fr))',
				'16': 'repeat(16, minmax(0, 1fr))'
			},
			fontFamily: {
				junicode: ['Junicode', 'serif']
			}
		}
	},
	plugins: [require('@tailwindcss/typography')]
};
