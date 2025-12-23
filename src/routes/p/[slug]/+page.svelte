<script>
	import Navbar from '$lib/components/Navbar.svelte';
	import PostBody from '$lib/components/PostBody.svelte';

	let { data } = $props();
	const post = $derived(data.post);
	const allPosts = $derived(data.allPosts);
</script>

<svelte:head>
	<title>{post.title} | aagam's blog</title>
	<link
		rel="stylesheet"
		href="https://cdn.jsdelivr.net/npm/katex@0.16.0/dist/katex.min.css"
		integrity="sha384-Xi8rHCmBmhbuyyhbI88391ZKP2dmfnOl4rT9ZfRI7mLTdk1wblIUnrIq35nqwEvC"
		crossorigin="anonymous"
	/>
</svelte:head>

<main>
	<Navbar currentPost={post} posts={allPosts} />
	<PostBody content={post.content} title={post.title} date={post.date} />
</main>
