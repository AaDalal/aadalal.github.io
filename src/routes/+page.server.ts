import { getAllPosts, tinyPostDirectory, type Post } from '$lib/api.server';
import markdownToHtml from '$lib/markdownToHTML.server';
import type { PageServerLoad } from './$types';

export const prerender = true;

export interface PostWithPreview extends Post {
	preview: string;
}

export const load: PageServerLoad = async () => {
	const posts = getAllPosts(['title', 'slug', 'date', 'content', 'tags']);
	const contents = await Promise.all(posts.map(({ content }) => markdownToHtml(content ?? '')));
	const previews = contents.map(
		(content) => content.replace(/<[^>]*>/g, '').substring(0, 140) + '...'
	);
	const postsWithPreview: PostWithPreview[] = posts.map(({ content: _, ...post }, index) => ({
		...post,
		preview: previews[index]
	}));

	// Fetch microblogs separately
	const microblogs = getAllPosts(['title', 'slug', 'date', 'content'], tinyPostDirectory);

	return {
		posts: postsWithPreview,
		microblogs
	};
};
