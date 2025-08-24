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

export default function BlogIndex() {
  return (
    <div className="space-y-2">
      <h1 className="text-3xl font-bold">Blog</h1>
      <p className="text-gray-600 dark:text-gray-300">Thoughts on AI, autonomy, and product engineering.</p>
    </div>
  );
}
