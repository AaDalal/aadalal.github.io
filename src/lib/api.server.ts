import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

export const blogPostsDirectory = join(process.cwd(), '_posts');
export const tinyPostDirectory = join(process.cwd(), "_tiny_thoughts")

export interface PostLink {
	href: string;
	link_text?: string;
}

export interface Post {
	slug?: string;
	title?: string;
	date?: string;
	content?: string;
	tags?: string[];
	context_for_this?: PostLink[];
	further_thinking?: PostLink[];
	[key: string]: any;
}

function getPostSlugs(postsDirectory = blogPostsDirectory): string[] {
	return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug: string, fields: string[] = [], postsDirectory = blogPostsDirectory): Post {
	const realSlug = slug.replace(/\.md$/, '');
	const fullPath = join(postsDirectory, `${realSlug}.md`);
	const fileContents = fs.readFileSync(fullPath, 'utf8');
	const { data, content } = matter(fileContents);

	const items: Post = {};

	// Ensure only the minimal needed data is exposed
	fields.forEach((field) => {
		if (field === 'slug') {
			items[field] = realSlug;
		}

		if (field === 'content') {
			items[field] = content;
		}

		if (typeof data[field] !== 'undefined') {
			items[field] = data[field];
		}

		if (field === 'date' && data[field]) {
			items[field] = data[field].toISOString().replace(/T.*/, '');
		}
	});

	return items;
}

export function getAllPosts(fields: string[] = [], postsDirectory = blogPostsDirectory): Post[] {
	const slugs = getPostSlugs(postsDirectory);
	const posts = slugs
		.map((slug) => getPostBySlug(slug, fields, postsDirectory))
		// sort posts by date in descending order of date (if date is present)
		.sort((post1, post2) => ((post1.date ?? '') > (post2.date ?? '') ? -1 : 1));
	return posts;
}
