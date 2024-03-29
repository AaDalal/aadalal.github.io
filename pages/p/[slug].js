import Head from 'next/head'
import { Inter } from 'next/font/google'
import Navbar from '@/components/navbar'
import PostBody from '@/components/post-body'
import { getAllPosts, getPostBySlug } from '@/lib/api'
import markdownToHtml from '@/lib/markdownToHTML'
import { useRouter } from 'next/router'
import ErrorPage from '../error'

const inter = Inter({ subsets: ['latin'] })

export default function Post({ post, morePosts }) {
  const router = useRouter()
  const title = `${ post.title || post.slug } | aadalal`
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main
      className={inter.className}
      >
        <Navbar
        currentPost={post}
        posts={morePosts}
        />
        <PostBody content={post.content} title={post.title} date={post.date} className="mb-10" />
      </main>
    </>
  )
}

export async function getStaticProps({ params: { slug } }) {
  const post = getPostBySlug(slug, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
    'coverImage',
    'date'
  ])
  const morePosts = getAllPosts(['title', 'slug', 'date'])
  const content = await markdownToHtml(post.content || '')
  
  return {
    props: {
      post: {
        ...post,
        content,
      },
      morePosts: morePosts
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug', 'date'])

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
					date: post.date
        },
      }
    }),
    fallback: false,
  }
}
