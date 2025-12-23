import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	ssr: {
		noExternal: ['unified', 'remark-parse', 'remark-math', 'remark-rehype', 'rehype-katex', 'rehype-stringify']
	}
});
