import { getAllPosts } from '$lib/api.server.js';
import markdownToHtml from '$lib/markdownToHTML.server.js';

export const prerender = true;

export async function load() {
	const posts = getAllPosts(['title', 'slug', 'date', 'content', 'tags']);
	const contents = await Promise.all(posts.map(({ content }) => markdownToHtml(content)));
	const previews = contents.map(
		(content) => content.replace(/<[^>]*>/g, '').substring(0, 140) + '...'
	);
	const postsWithPreview = posts.map(({ content: _, ...post }, index) => ({
		...post,
		preview: previews[index]
	}));

	return {
		posts: postsWithPreview
	};
}
