import React from 'react';
import ReactMarkdown from 'react-markdown';
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
    <main className="prose dark:prose-invert max-w-3xl mx-auto py-8">
      <h1>{post.title}</h1>
      <ReactMarkdown>{post.content}</ReactMarkdown>
    </main>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = BLOG_POSTS.map((p) => ({ params: { slug: p.slug } }));
  return { paths, fallback: 'blocking' };
};

export const getStaticProps: GetStaticProps<BlogProps> = async ({ params }) => {
  const slug = params?.slug as string;
  const post = BLOG_POSTS.find((p) => p.slug === slug) || null;

  if (!post) {
    return { notFound: true };
  }

  return { props: { post } };
};

export default BlogPostPage;

