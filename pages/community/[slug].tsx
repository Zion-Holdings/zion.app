import React, { useState, useCallback } from 'react'; // Removed useEffect
import { NextSeo } from '@/components/NextSeo';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import EmptyState from '@/components/community/EmptyState';
// import { createClient } from '@supabase/supabase-js'; // No longer needed for getStaticProps
import PostCard from '@/components/community/PostCard';
import type { ForumPost } from '@/types/community';
import { fetchPostsByCategory } from '@/services/forumPostService'; // This might be problematic for getStaticProps if it's server-dependent
import type { GetStaticProps, GetStaticPaths } from 'next'; // Added import

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

// export const getServerSideProps = async ({ req, params }: { req: any; params?: { slug?: string } }) => {
//   const category = params?.slug as string;
//   // Supabase client setup for SSR remains largely the same
//   const supabaseUrl =
//     process.env.SUPABASE_URL ||
//     process.env.NEXT_PUBLIC_SUPABASE_URL || // Fallback to public URL if specific server URL isn't set
//     '';
//   const anonKey =
//     process.env.SUPABASE_SERVICE_ROLE_KEY || // Prefer service role key for server-side operations
//     process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || // Fallback to anon key if service role isn't set
//     '';
//   const token = req.cookies?.['sb-access-token'] || null;

//   let initialPostsData: ForumPost[] = [];
//   let initialNextCursor: string | null = null;

//   if (!supabaseUrl || !anonKey) {
//     // Return empty initialPosts if Supabase is not configured
//     return { props: { initialPosts: [], initialNextCursor: null, hasSession: Boolean(token), category } };
//   }

//   // const supabase = createClient(supabaseUrl, anonKey); // Not needed if calling service function

//   try {
//     // Fetch initial posts using the modified service function
//     // No cursor is passed for the initial fetch (it will be undefined)
//     const { posts, nextCursor } = await fetchPostsByCategory(category, undefined, POSTS_PER_PAGE);
//     initialPostsData = posts;
//     initialNextCursor = nextCursor;
//   } catch (error: any) {
//     console.error('Initial post fetch error:', error.message);
//     // Handle error appropriately, maybe return empty or an error prop
//   }

//   return {
//     props: {
//       initialPosts: initialPostsData,
//       initialNextCursor, // Pass the cursor to the page component
//       hasSession: Boolean(token),
//       category
//     }
//   };
// };

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [], // No paths are pre-rendered
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps<CategoryPageProps> = async (context) => {
  const category = context.params?.slug as string || 'default-category'; // Provide a default if slug is undefined
  // Dummy data for static export - real data fetching would be more complex
  // and might not be suitable for getStaticProps if it's highly dynamic or user-specific
  // The service function fetchPostsByCategory likely cannot be used here directly if it relies on Supabase client initialized with auth tokens
  return {
    props: {
      initialPosts: [],
      initialNextCursor: null,
      hasSession: false, // Cannot determine session status statically without req object
      category: category,
    },
    // revalidate: 60, // Optional: ISR
  };
};

export default CategoryPage;
