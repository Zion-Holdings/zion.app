import React from 'react';
import ReactMarkdown from 'react-markdown';
import { useRouter } from 'next/router';
import AdvancedSEO from '@/components/seo/AdvancedSEO';
import { BLOG_POSTS } from '@/data/blog-posts';
import { OptimizedImage } from '@/components/ui/OptimizedImage';
import { AuthorBio } from '@/components/blog/AuthorBio';
import { SocialShareButtons } from '@/components/blog/SocialShareButtons';
import { CommentsSection } from '@/components/blog/CommentsSection';
import type { BlogPost } from '@/types/blog';
import type { GetStaticPaths, GetStaticProps } from 'next';
import fs from 'fs';
import path from 'path';

function parseMarkdown(filePath: string): BlogPost | null {
  if (!fs.existsSync(filePath)) {
    return null;
  }
  const raw = fs.readFileSync(filePath, 'utf8');
  const match = raw.match(/---\n([\s\S]+?)\n---\n([\s\S]*)/);
  if (!match || !match[1] || !match[2]) return null;
  const meta = JSON.parse(match[1]);
  const content = match[2].trim();
  const slug = path.basename(filePath).replace(/\.md$/, '');
  return { ...meta, id: slug, slug, content } as BlogPost;
}

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
    if (initialPost && initialPost.slug === slug) {
      setPost(initialPost);
      setError(null); // Clear any previous error
    } else if (slug) {
      // This case handles if the slug changes and initialPost is not for the current slug
      // Or if initialPost was null from getStaticProps (which shouldn't happen if notFound is true)
      // For now, we will rely on getStaticProps to provide the correct post or a 404.
      // If initialPost is null and getStaticProps didn't return notFound, that's an inconsistent state.
      // The previous logic tried a fallback here, but we aim to make getStaticProps authoritative.
      const directFallback = BLOG_POSTS.find((p) => p.slug === slug) || null;
      if (directFallback) {
        setPost(directFallback);
        setError(null);
      } else {
        // If getStaticProps is working correctly, this path (slug exists, no initialPost, no fallback)
        // should ideally not be hit frequently, as getStaticProps would have returned notFound.
        // However, to maintain some robustness for dynamic client-side slug changes not triggering a new getStaticProps:
        setPost(null);
        setError('Article not found');
      }
    }
  }, [slug, initialPost]);

  if (error) {
    return <div>{error}</div>;
  }
  if (!post) {
    return <div>Article not found</div>;
  }
  const articleLd = {
    author: post.author.name,
    publishedTime: post.publishedDate,
    tags: post.tags || [],
  };
  const body = (post as any).body || post.content;
  return (
    <>
      <AdvancedSEO
        title={post.title}
        description={post.excerpt}
        image={post.featuredImage}
        type="article"
        article={articleLd}
      />
      <main className="prose dark:prose-invert max-w-3xl mx-auto py-8">
        <h1>{post.title}</h1>
        {post.excerpt && <p className="lead">{post.excerpt}</p>}
        <div className="flex items-center gap-3 mb-6">
          <OptimizedImage
            src={post.author.avatarUrl}
            alt={post.author.name}
            className="w-10 h-10 rounded-full"
            fallback="/images/blog-placeholder.svg"
            width={40}
            height={40}
          />
          <div>
            <p className="m-0 font-medium">{post.author.name}</p>
            {post.author.title && (
              <p className="m-0 text-sm text-zion-slate-light">
                {post.author.title}
              </p>
            )}
          </div>
        </div>
        {post.featuredImage && (
          <div className="aspect-[16/9] w-full relative overflow-hidden rounded-lg mb-6">
            <OptimizedImage
              src={post.featuredImage}
              alt={post.title}
              className="object-cover w-full h-full"
              fill={true}
              fallback="/images/blog-placeholder.svg"
            />
          </div>
        )}
        <ReactMarkdown>{body}</ReactMarkdown>
        <AuthorBio author={post.author} />
        <SocialShareButtons title={post.title} />
        <CommentsSection slug={post.slug} />
      </main>
    </>
  );
};

export default BlogPostPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const dir = path.join(process.cwd(), 'content', 'blog');
  const files = fs.readdirSync(dir).filter((f) => f.endsWith('.md'));
  const paths = files.map((f) => ({
    params: { slug: f.replace(/\.md$/, '') },
  }));
  // Use `blocking` so new posts added after build can be generated on demand
  return { paths, fallback: 'blocking' };
};

export const getStaticProps: GetStaticProps<BlogPostPageProps> = async ({
  params,
}: {
  params?: { slug?: string };
}) => {
  const slug = params?.slug as string;
  // Validate slug to prevent malformed paths
  if (!/^[a-z0-9-]+$/.test(slug)) {
    return { notFound: true };
  }
  const filePath = path.join(process.cwd(), 'content', 'blog', `${slug}.md`);
  const post = parseMarkdown(filePath);
  if (!post) {
    return { notFound: true };
  }
  return { props: { initialPost: post }, revalidate: 60 };
};
