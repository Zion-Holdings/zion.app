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
      
      <main>
        <h1>Index</h1>
        <p>Blog content coming soon...</p>
        <a href="/blog">Back to Blog</a>
      </main>
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
