import type { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import { useEffect, useMemo } from 'react';
import { BlogPost } from '@/utils/types/blog';
import { findPostBySlug, listPublishedPosts } from '@/utils/data/blogStore';
import PostContent from '@/components/blog/PostContent';
import ShareButtons from '@/components/blog/ShareButtons';
import SuggestedArticles from '@/components/blog/SuggestedArticles';
import CTASection from '@/components/blog/CTASection';
import LikeButton from '@/components/blog/LikeButton';

type Props = { post: BlogPost; all: BlogPost[] };

const PostPage: NextPage<Props> = ({ post, all }) => {
  const pageUrl = typeof window === 'undefined' ? '' : window.location.href;

  useEffect(() => {
    // track view
    fetch(`/api/blog/metrics/${post.id}/views`, { method: 'POST' }).catch(() => {});
  }, [post.id]);

  const toc = useMemo(() => {
    const headings: { level: number; text: string; id: string }[] = [];
    const lines = post.body.split('\n');
    lines.forEach((line) => {
      const m = /^(#{1,3})\s+(.*)$/.exec(line);
      if (m) {
        const level = m[1].length;
        const text = m[2].trim();
        const id = text;
        headings.push({ level, text, id });
      }
    });
    return headings;
  }, [post.body]);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.seo.metaTitle || post.title,
    description: post.seo.metaDescription,
    image: post.seo.ogImageUrl || post.coverImageUrl,
    datePublished: post.publishDate,
    author: [{ '@type': 'Person', name: post.author }],
    mainEntityOfPage: { '@type': 'WebPage', '@id': `/blog/${post.slug}` },
  };

  return (
    <div>
      <Head>
        <title>{post.seo.metaTitle || post.title}</title>
        <meta name="description" content={post.seo.metaDescription} />
        {post.seo.ogImageUrl || post.coverImageUrl ? (
          <meta property="og:image" content={post.seo.ogImageUrl || post.coverImageUrl} />
        ) : null}
        <meta property="og:title" content={post.seo.metaTitle || post.title} />
        <meta property="og:description" content={post.seo.metaDescription} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.seo.metaTitle || post.title} />
        <meta name="twitter:description" content={post.seo.metaDescription} />
        {(post.seo.ogImageUrl || post.coverImageUrl) && <meta name="twitter:image" content={post.seo.ogImageUrl || post.coverImageUrl} />}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </Head>

      <article className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-bold">{post.title}</h1>
        <div className="text-gray-600 dark:text-gray-300 mt-1">
          {new Date(post.publishDate).toLocaleDateString()} • {post.author}
        </div>
        {toc.length > 0 && (
          <nav className="mt-6 p-4 border rounded bg-gray-50 dark:bg-zinc-900">
            <div className="font-semibold mb-2">On this page</div>
            <ul className="space-y-1">
              {toc.map((h, i) => (
                <li key={i} className={h.level === 1 ? '' : h.level === 2 ? 'ml-3' : 'ml-6'}>
                  <a href={`#${encodeURIComponent(h.id)}`}>
                    {h.text}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}

        <div className="mt-6">
          <PostContent body={post.body} />
        </div>

        <div className="mt-8 flex items-center gap-4">
          <ShareButtons title={post.title} url={pageUrl || `/blog/${post.slug}`} description={post.seo.metaDescription} onShare={() => fetch(`/api/blog/metrics/${post.id}/shares`, { method: 'POST' }).catch(() => {})} />
          <LikeButton postId={post.id} initialLikes={post.metrics?.likes || 0} />
        </div>

        <SuggestedArticles current={post} all={all} />

        <CTASection />
      </article>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const slug = ctx.params?.slug as string;
  const post = findPostBySlug(slug);
  if (!post || post.status !== 'published') {
    return { notFound: true };
  }
  const all = listPublishedPosts();
  return { props: { post, all } };
};

export default PostPage;