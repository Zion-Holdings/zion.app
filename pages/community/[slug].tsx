import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import EmptyState from '@/components/community/EmptyState';
import { createClient } from '@supabase/supabase-js';
import PostCard from '@/components/community/PostCard';
import type { ForumPost } from '@/types/community';

interface CategoryPageProps {
  posts: ForumPost[];
  hasSession: boolean;
  category: string;
}

const CategoryPage: React.FC<CategoryPageProps> = ({ posts, hasSession, category }) => {
  return (
    <>
      <Head>
        <title>{`${category} Forum – ZionAI`}</title>
      </Head>
      <main className="container py-8">
        {posts && posts.length > 0 ? (
          <div className="space-y-4">
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <EmptyState
            title="No discussions yet"
            subtitle="Be the first to start a conversation."
            cta="Create Post"
            href={`/community/create?category=${category}`}
            hasSession={hasSession}
          />
        )}
      </main>
    </>
  );
};

export const getServerSideProps = async ({ req, params }: { req: any; params?: { slug?: string } }) => {
  const category = params?.slug as string;
  const supabaseUrl =
    process.env.SUPABASE_URL ||
    process.env.VITE_SUPABASE_URL ||
    process.env.NEXT_PUBLIC_SUPABASE_URL ||
    '';
  const anonKey =
    process.env.SUPABASE_SERVICE_ROLE_KEY ||
    process.env.VITE_SUPABASE_ANON_KEY ||
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
    '';
  const token = req.cookies?.['sb-access-token'] || null;

  if (!supabaseUrl || !anonKey) {
    return { props: { posts: [], hasSession: Boolean(token), category } };
  }

  const supabase = createClient(supabaseUrl, anonKey);
  const { data, error } = await supabase
    .from('forum_posts')
    .select('*')
    .eq('category_id', category)
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Post fetch error:', error.message);
  }

  return {
    props: {
      posts: (data as ForumPost[]) || [],
      hasSession: Boolean(token),
      category
    }
  };
};

export default CategoryPage;
