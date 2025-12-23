import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

const postsDirectory = join(process.cwd(), '_posts');

export interface Post {
	slug?: string;
	title?: string;
	date?: string;
	content?: string;
	tags?: string[];
	[key: string]: any;
}

export function getPostSlugs(): string[] {
	return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug: string, fields: string[] = []): Post {
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

export function getAllPosts(fields: string[] = []): Post[] {
	const slugs = getPostSlugs();
	const posts = slugs
		.map((slug) => getPostBySlug(slug, fields))
		// sort posts by date in descending order of date (if date is present)
		.sort((post1, post2) => ((post1.date ?? '') > (post2.date ?? '') ? -1 : 1));
	return posts;
}
