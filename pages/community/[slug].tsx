import React, { useState, useCallback } from 'react'; // Removed useEffect
import { NextSeo } from '@/components/NextSeo';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import EmptyState from '@/components/community/EmptyState';
// import { createClient } from '@supabase/supabase-js'; // No longer directly needed here if fetchPostsByCategory handles its own client
import PostCard from '@/components/community/PostCard';
import { withSentryGetServerSideProps } from '@sentry/nextjs';
import type { ForumPost } from '@/types/community';
import { fetchPostsByCategory } from '@/services/forumPostService';

const POSTS_PER_PAGE = 20; // Or any other limit you prefer

interface CategoryPageProps {
  initialPosts: ForumPost[];
  initialNextCursor: string | null; // Added for cursor pagination
  hasSession: boolean;
  category: string;
}

const CategoryPage: React.FC<CategoryPageProps> = ({ initialPosts, initialNextCursor, hasSession, category }) => {
  const [posts, setPosts] = useState<ForumPost[]>(initialPosts);
  const [nextCursor, setNextCursor] = useState<string | null>(initialNextCursor);
  const [isLoading, setIsLoading] = useState(false);
  // hasMore is now derived from nextCursor
  const hasMore = nextCursor !== null;

  const loadMorePosts = useCallback(async () => {
    if (isLoading || !nextCursor) return; // Check nextCursor directly

    setIsLoading(true);
    try {
      // Pass the current nextCursor to the fetch function
      const { posts: newPosts, nextCursor: newNextCursorFromFetch } = await fetchPostsByCategory(category, nextCursor, POSTS_PER_PAGE);
      if (newPosts.length > 0) {
        setPosts((prevPosts) => [...prevPosts, ...newPosts]);
      }
      setNextCursor(newNextCursorFromFetch); // Update cursor for the next fetch
    } catch (error) {
      console.error("Failed to fetch more posts:", error);
      // Optionally, handle error state in UI
    } finally {
      setIsLoading(false);
    }
  }, [category, nextCursor, isLoading]); // Dependency array updated

  // useEffect for scroll-based loading is REMOVED.

  return (
    <>
      <NextSeo
        title={`${category} – Zion Community`}
        description={`Discussion posts in the ${category} category`}
        openGraph={{ title: `${category} – Zion Community`, description: `Discussion posts in the ${category} category` }}
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
            {/* "Load More" Button and messages */}
            {isLoading && <div className="text-center py-4">Loading...</div>}
            {!isLoading && hasMore && (
              <div className="text-center py-4">
                <Button onClick={loadMorePosts}>Load More</Button>
              </div>
            )}
            {!isLoading && !hasMore && posts.length > 0 && (
              <div className="text-center py-4 text-gray-500">No more posts.</div>
            )}
          </div>
        ) : (
          // Show EmptyState only if not loading and no posts initially (and no posts after filtering if any)
          !isLoading && <EmptyState
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

export const getServerSideProps = withSentryGetServerSideProps(async ({ req, params }: { req: any; params?: { slug?: string } }) => {
  const category = params?.slug as string;
  // Supabase client setup for SSR, if needed directly here, should be maintained.
  // However, if fetchPostsByCategory encapsulates Supabase client logic, direct use here might not be necessary.
  const supabaseUrl =
    process.env.SUPABASE_URL ||
    process.env.NEXT_PUBLIC_SUPABASE_URL || // Fallback to public URL if specific server URL isn't set
    '';
  const anonKey =
    process.env.SUPABASE_SERVICE_ROLE_KEY || // Prefer service role key for server-side operations
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || // Fallback to anon key if service role isn't set
    '';
  const token = req.cookies?.['sb-access-token'] || null;

  let initialPostsData: ForumPost[] = [];
  let initialNextCursor: string | null = null;

  // The check for supabaseUrl and anonKey should ideally be within fetchPostsByCategory or similar service function.
  // If fetchPostsByCategory handles its Supabase client initialization and error states,
  // this direct check might be redundant or could be simplified.
  // For now, assuming fetchPostsByCategory might throw an error if Supabase is not configured,
  // which Sentry would then capture.

  // if (!supabaseUrl || !anonKey) {
    // It's better to let the error propagate to be caught by Sentry HOC or handle it by returning specific error props.
    // console.warn('Supabase URL or anon key is not configured for SSR in community page.');
    // return { props: { initialPosts: [], initialNextCursor: null, hasSession: Boolean(token), category, error: "Configuration error" } };
  // }

  try {
    // Fetch initial posts using the modified service function
    // No cursor is passed for the initial fetch (it will be undefined)
    const { posts, nextCursor } = await fetchPostsByCategory(category, undefined, POSTS_PER_PAGE);
    initialPostsData = posts;
    initialNextCursor = nextCursor;
  } catch (error: any) {
    console.error('Initial post fetch error in community page getServerSideProps:', error.message);
    // Let Sentry HOC capture the error.
    // You might want to return specific props to render an error state on the page.
    // For example, re-throw the error if you want Next.js to handle it or if the HOC needs it.
    throw error; // Re-throw to ensure Sentry captures it via the HOC
  }

  return {
    props: {
      initialPosts: initialPostsData,
      initialNextCursor, // Pass the cursor to the page component
      hasSession: Boolean(token),
      category,
    },
  };
});

export default CategoryPage;
