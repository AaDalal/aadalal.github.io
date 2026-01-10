import { getAllPosts, tinyPostDirectory, type Post } from '$lib/api.server';
import markdownToHtml from '$lib/markdownToHTML.server';
import type { PageServerLoad } from './$types';

export const prerender = true;

export interface MicroblogWithContent extends Post {
	htmlContent: string;
}

export const load: PageServerLoad = async () => {
	const microblogs = getAllPosts(['title', 'slug', 'date', 'content'], tinyPostDirectory);

	// Convert content to HTML for each microblog
	const microblogsWithHtml: MicroblogWithContent[] = await Promise.all(
		microblogs.map(async (microblog) => {
			const htmlContent = await markdownToHtml(microblog.content ?? '');
			return {
				...microblog,
				htmlContent
			};
		})
	);

	return {
		microblogs: microblogsWithHtml
	};
};
