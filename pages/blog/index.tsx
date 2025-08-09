import type { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { BlogPost } from '@/utils/types/blog';
import PageShareButtons from '@/components/blog/PageShareButtons';
import { listPublishedPosts, listAllAuthors, listAllTags, listAllTopics } from '@/utils/data/blogStore';
import BlogCard from '@/components/blog/BlogCard';
import { useMemo, useState } from 'react';

type Props = { posts: BlogPost[]; authors: string[]; topics: string[]; tags: string[] };

const BlogHome: NextPage<Props> = ({ posts, authors, topics, tags }) => {
  const [filters, setFilters] = useState<{ author?: string; topic?: string; tag?: string }>({});

  const filtered = useMemo(() => {
    return posts.filter((p) => {
      if (filters.author && p.author !== filters.author) return false;
      if (filters.topic && !p.topics.includes(filters.topic)) return false;
      if (filters.tag && !p.tags.includes(filters.tag)) return false;
      return true;
    });
  }, [posts, filters]);

  const hero = filtered[0];
  const rest = filtered.slice(1);

  return (
    <div>
      <Head>
        <title>Blog - Zion AI Marketplace</title>
        <meta name="description" content="Insights on AI, DevOps, and digital transformation." />
        <meta property="og:title" content="Zion Blog" />
        <meta property="og:description" content="Insights on AI, DevOps, and digital transformation." />
        <meta property="og:image" content="/images/og/blog-default.jpg" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zion Blog" />
        <meta name="twitter:description" content="Insights on AI, DevOps, and digital transformation." />
        <meta name="twitter:image" content="/images/og/blog-default.jpg" />
      </Head>

      <div className="mx-auto max-w-6xl">
        <h1 className="text-4xl font-bold mb-4">Zion Blog</h1>
        <p className="text-gray-600 dark:text-gray-300 mb-3">Thought leadership on AI, DevOps, and building with speed.</p>
        <div className="mb-6">
          <PageShareButtons
            title="Zion Blog"
            url={typeof window === 'undefined' ? 'https://zion.app/blog' : window.location.href}
            description="Insights on AI and DevOps from Zion."
            onShare={(network) => fetch('/api/analytics/share', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ url: window.location.href, title: 'Zion Blog', network, utm: 'utm_source=' + network + '&utm_medium=share&utm_campaign=blog' }) }).catch(() => {})}
          />
        </div>

        <div className="flex flex-wrap gap-3 mb-8">
          <select className="border rounded px-3 py-2" value={filters.topic || ''} onChange={(e) => setFilters((f) => ({ ...f, topic: e.target.value || undefined }))}>
            <option value="">All topics</option>
            {topics.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
          <select className="border rounded px-3 py-2" value={filters.tag || ''} onChange={(e) => setFilters((f) => ({ ...f, tag: e.target.value || undefined }))}>
            <option value="">All tags</option>
            {tags.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
          <select className="border rounded px-3 py-2" value={filters.author || ''} onChange={(e) => setFilters((f) => ({ ...f, author: e.target.value || undefined }))}>
            <option value="">All authors</option>
            {authors.map((a) => (
              <option key={a} value={a}>{a}</option>
            ))}
          </select>
        </div>

        {hero && (
          <div className="mb-10 p-6 rounded-lg border bg-white dark:bg-zinc-900">
            <div className="text-sm text-gray-500">Featured</div>
            <h2 className="text-3xl font-bold mt-1"><Link href={`/blog/${hero.slug}`}>{hero.title}</Link></h2>
            <div className="text-gray-600 dark:text-gray-300">{new Date(hero.publishDate).toLocaleDateString()} • {hero.author}</div>
            <div className="mt-3 flex gap-2 flex-wrap">
              {hero.topics.map((t) => (
                <Link key={t} href={`/categories/${encodeURIComponent(t)}`} className="text-xs bg-gray-100 dark:bg-zinc-800 px-2 py-1 rounded">{t}</Link>
              ))}
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {rest.map((p) => (
            <BlogCard key={p.id} post={p} />
          ))}
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const posts = listPublishedPosts();
  const authors = listAllAuthors();
  const topics = listAllTopics();
  const tags = listAllTags();
  return { props: { posts, authors, topics, tags } };
};

export default BlogHome;