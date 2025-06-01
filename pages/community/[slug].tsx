import React, { useState, useEffect, useCallback } from 'react';
import NextHead from '@/components/NextHead';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import EmptyState from '@/components/community/EmptyState';
import { createClient } from '@supabase/supabase-js'; // For getServerSideProps
import PostCard from '@/components/community/PostCard';
import type { ForumPost } from '@/types/community';
import { fetchPostsByCategory } from '@/services/forumPostService';

const POSTS_PER_PAGE = 20; // Or any other limit you prefer

interface CategoryPageProps {
  initialPosts: ForumPost[];
  hasSession: boolean;
  category: string;
}

const CategoryPage: React.FC<CategoryPageProps> = ({ initialPosts, hasSession, category }) => {
  const [posts, setPosts] = useState<ForumPost[]>(initialPosts);
  const [page, setPage] = useState(2); // Start fetching from page 2
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(initialPosts.length === POSTS_PER_PAGE);

  const loadMorePosts = useCallback(async () => {
    if (isLoading || !hasMore) return;

    setIsLoading(true);
    try {
      const newPosts = await fetchPostsByCategory(category, page, POSTS_PER_PAGE);
      if (newPosts.length > 0) {
        setPosts((prevPosts) => [...prevPosts, ...newPosts]);
        setPage((prevPage) => prevPage + 1);
        setHasMore(newPosts.length === POSTS_PER_PAGE);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.error("Failed to fetch more posts:", error);
      // Optionally, handle error state in UI
    } finally {
      setIsLoading(false);
    }
  }, [category, page, isLoading, hasMore]);

  useEffect(() => {
    const handleScroll = () => {
      // Check if scrolled to the bottom
      if (
        window.innerHeight + document.documentElement.scrollTop >=
          document.documentElement.offsetHeight - 100 && // 100px threshold
        !isLoading &&
        hasMore
      ) {
        loadMorePosts();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loadMorePosts, isLoading, hasMore]);

  return (
    <>
      <NextHead
        title={`${category} Forum – ZionAI`}
        description={`Discussion posts in the ${category} category`}
        openGraph={{ title: `${category} Forum – ZionAI`, description: `Discussion posts in the ${category} category` }}
      />
      <main className="container py-8">
        <div className="flex justify-end mb-6">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                {hasSession ? (
                  <Button asChild>
                    <Link href={`/community?new=1&category=${category}`}>Create New Post</Link>
                  </Button>
                ) : (
                  <Button disabled>Create New Post</Button>
                )}
              </TooltipTrigger>
              {!hasSession && <TooltipContent>Login required</TooltipContent>}
            </Tooltip>
          </TooltipProvider>
        </div>
        {posts && posts.length > 0 ? (
          <div className="space-y-4">
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
            {isLoading && <div className="text-center py-4">Loading...</div>}
            {!hasMore && posts.length > 0 && <div className="text-center py-4 text-gray-500">No more posts.</div>}
          </div>
        ) : (
          <EmptyState
            title="No posts yet"
            subtitle="Be the first to post"
            cta="Create New Post"
            href={`/community?new=1&category=${category}`}
            hasSession={hasSession}
          />
        )}
      </main>
    </>
  );
};

export const getServerSideProps = async ({ req, params }: { req: any; params?: { slug?: string } }) => {
  const category = params?.slug as string;
  // Supabase client setup for SSR remains largely the same
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
    // Return empty initialPosts if Supabase is not configured
    return { props: { initialPosts: [], hasSession: Boolean(token), category } };
  }

  const supabase = createClient(supabaseUrl, anonKey);

  // Fetch initial posts (page 1)
  // Using fetchPostsByCategory for consistency, though direct Supabase client call is also fine here
  let initialPostsData: ForumPost[] = [];
  try {
    const { data, error } = await supabase
      .from('forum_posts')
      .select('*')
      .eq('category_id', category)
      .order('created_at', { ascending: false })
      .limit(POSTS_PER_PAGE); // Use POSTS_PER_PAGE for the initial load

    if (error) {
      throw error;
    }
    initialPostsData = (data as ForumPost[]) || [];
  } catch (error: any) {
    console.error('Initial post fetch error:', error.message);
  }

  return {
    props: {
      initialPosts: initialPostsData,
      hasSession: Boolean(token),
      category
    }
  };
};

export default CategoryPage;
