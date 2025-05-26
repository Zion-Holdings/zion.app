import React from 'react';
import { createClient } from '@supabase/supabase-js';
import PostCard from '@/components/community/PostCard';
import type { ForumPost } from '@/types/community';

interface CategoryPageProps {
  posts: ForumPost[];
}

const CategoryPage: React.FC<CategoryPageProps> = ({ posts }) => {
  return (
    <main className="container py-8">
      {posts && posts.length > 0 ? (
        <div className="space-y-4">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <p>No discussions yet</p>
      )}
    </main>
  );
};

export const getServerSideProps = async ({ params }: { params?: { category?: string } }) => {
  const category = params?.category as string;
  const supabaseUrl = process.env.SUPABASE_URL || process.env.VITE_SUPABASE_URL || '';
  const anonKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.VITE_SUPABASE_ANON_KEY || '';

  if (!supabaseUrl || !anonKey) {
    return { props: { posts: [] } };
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
      posts: (data as ForumPost[]) || []
    }
  };
};

export default CategoryPage;
