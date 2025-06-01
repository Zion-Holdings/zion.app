import React from 'react';
import ReactMarkdown from 'react-markdown';
import NextHead from '@/components/NextHead';
import type { GetStaticPaths, GetStaticProps } from 'next';
import { BLOG_POSTS } from '@/data/blog-posts';
import type { BlogPost } from '@/types/blog';

interface BlogProps {
  post: BlogPost | null;
}

const BlogPostPage: React.FC<BlogProps> = ({ post }) => {
  if (!post) {
    return <div>Article not found</div>;
  }
  return (
    <>
      <NextHead
        title={post.title}
        description={post.excerpt}
        openGraph={{ title: post.title, description: post.excerpt, image: post.featuredImage }}
      />
      <main className="prose dark:prose-invert max-w-3xl mx-auto py-8">
        <h1>{post.title}</h1>
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </main>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = BLOG_POSTS.map((p) => ({ params: { slug: p.slug } }));
  return { paths, fallback: 'blocking' };
};

export const getStaticProps: GetStaticProps<BlogProps> = async ({ params }) => {
  const slug = params?.slug as string;
  const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';

  try {
    const res = await fetch(`${appUrl}/api/blog/${slug}`);
    if (res.ok) {
      const post: BlogPost = await res.json();
      return { props: { post }, revalidate: 60 };
    }
  } catch (e) {
    console.error('Failed to fetch blog post', e);
  }

  const post = BLOG_POSTS.find((p) => p.slug === slug) || null;

  if (!post) {
    return { notFound: true };
  }

  return { props: { post } };
};

export default BlogPostPage;

