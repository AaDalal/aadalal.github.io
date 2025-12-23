import { getAllPosts, getPostBySlug } from '$lib/api.server.js';
import markdownToHtml from '$lib/markdownToHTML.server.js';
import { error } from '@sveltejs/kit';

export const prerender = true;

export async function load({ params }) {
	const { slug } = params;

	try {
		const post = getPostBySlug(slug, ['title', 'date', 'slug', 'content', 'tags']);
		const content = await markdownToHtml(post.content);
		const allPosts = getAllPosts(['title', 'slug', 'date']);

		return {
			post: {
				...post,
				content
			},
			allPosts
		};
	} catch (e) {
		throw error(404, 'Post not found');
	}
}

export async function entries() {
	const posts = getAllPosts(['slug']);
	return posts.map((post) => ({
		slug: post.slug
	}));
}
