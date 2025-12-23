import { getAllPosts, getPostBySlug } from '$lib/api.server';
import markdownToHtml from '$lib/markdownToHTML.server';
import { error } from '@sveltejs/kit';
import type { PageServerLoad, EntryGenerator } from './$types';

export const prerender = true;

export const load: PageServerLoad = async ({ params }) => {
	const { slug } = params;

	try {
		const post = getPostBySlug(slug, ['title', 'date', 'slug', 'content', 'tags']);
		const content = await markdownToHtml(post.content ?? '');
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
};

export const entries: EntryGenerator = async () => {
	const posts = getAllPosts(['slug']);
	return posts.map((post) => ({
		slug: post.slug ?? ''
	}));
};
