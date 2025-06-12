import React from 'react';
import ReactMarkdown from 'react-markdown';
import { useRouter } from 'next/router';
import { Helmet } from 'react-helmet-async';
import { NextSeo } from '@/components/NextSeo';
import { BLOG_POSTS } from '@/data/blog-posts';
import type { BlogPost } from '@/types/blog';
import type { GetStaticPaths, GetStaticProps } from 'next';

interface BlogPostPageProps {
  /**
   * Preloaded blog post for static generation. Can be null if not found.
   */
  initialPost: BlogPost | null;
}

const BlogPostPage: React.FC<BlogPostPageProps> = ({ initialPost }) => {
  const router = useRouter();
  const { slug } = router.query;
  const [post, setPost] = React.useState<BlogPost | null>(initialPost);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    if (!slug || initialPost) return; // skip fetch when preloaded
    const fetchPost = async () => {
      try {
        const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';
        const res = await fetch(`${appUrl}/api/blog/${slug}`);
        if (res.ok) {
          const data: BlogPost = await res.json();
          setPost(data);
          return;
        }
      } catch (e) {
        console.error('Failed to fetch blog post', e);
      }
      const fallback = BLOG_POSTS.find((p) => p.slug === slug) || null;
      if (!fallback) {
        setError('Article not found');
      } else {
        setPost(fallback);
      }
    };
    fetchPost();
  }, [slug]);

  if (error) {
    return <div>{error}</div>;
  }
  if (!post) {
    return <div>Article not found</div>;
  }
  const articleLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: post.featuredImage,
    datePublished: post.publishedDate,
    author: {
      "@type": "Person",
      name: post.author.name,
    },
  };
  return (
    <>
      <NextSeo
        title={post.title}
        description={post.excerpt}
        openGraph={{ title: post.title, description: post.excerpt, images: post.featuredImage ? [{ url: post.featuredImage }] : undefined }}
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(articleLd)}</script>
      </Helmet>
      <main className="prose dark:prose-invert max-w-3xl mx-auto py-8">
        <h1>{post.title}</h1>
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </main>
    </>
  );
};


export default BlogPostPage;

export const getStaticPaths: GetStaticPaths = async () => {
  // Pre-render only the sample posts. Others will be generated on demand.
  const paths = BLOG_POSTS.map((p) => ({ params: { slug: p.slug } }));
  return { paths, fallback: 'blocking' };
};

export const getStaticProps: GetStaticProps<BlogPostPageProps> = async ({ params }) => {
  const slug = params?.slug as string;
  const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';
  try {
    const res = await fetch(`${appUrl}/api/blog/${slug}`);
    if (res.ok) {
      const post: BlogPost = await res.json();
      return { props: { initialPost: post }, revalidate: 60 };
    }
  } catch (err) {
    console.error('getStaticProps fetch failed', err);
  }
  const fallback = BLOG_POSTS.find((p) => p.slug === slug) || null;
  if (!fallback) {
    return { notFound: true };
  }
  return { props: { initialPost: fallback }, revalidate: 60 };
};

