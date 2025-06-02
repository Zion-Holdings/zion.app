import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState, useCallback } from 'react'; // Removed useEffect
import NextHead from '@/components/NextHead';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import EmptyState from '@/components/community/EmptyState';
import PostCard from '@/components/community/PostCard';
import { fetchPostsByCategory } from '@/services/forumPostService';
const POSTS_PER_PAGE = 20; // Or any other limit you prefer
const CategoryPage = ({ initialPosts, initialNextCursor, hasSession, category }) => {
    const [posts, setPosts] = useState(initialPosts);
    const [nextCursor, setNextCursor] = useState(initialNextCursor);
    const [isLoading, setIsLoading] = useState(false);
    // hasMore is now derived from nextCursor
    const hasMore = nextCursor !== null;
    const loadMorePosts = useCallback(async () => {
        if (isLoading || !nextCursor)
            return; // Check nextCursor directly
        setIsLoading(true);
        try {
            // Pass the current nextCursor to the fetch function
            const { posts: newPosts, nextCursor: newNextCursorFromFetch } = await fetchPostsByCategory(category, nextCursor, POSTS_PER_PAGE);
            if (newPosts.length > 0) {
                setPosts((prevPosts) => [...prevPosts, ...newPosts]);
            }
            setNextCursor(newNextCursorFromFetch); // Update cursor for the next fetch
        }
        catch (error) {
            console.error("Failed to fetch more posts:", error);
            // Optionally, handle error state in UI
        }
        finally {
            setIsLoading(false);
        }
    }, [category, nextCursor, isLoading]); // Dependency array updated
    // useEffect for scroll-based loading is REMOVED.
    return (_jsxs(_Fragment, { children: [_jsx(NextHead, { title: `${category} – Zion Community`, description: `Discussion posts in the ${category} category`, openGraph: { title: `${category} – Zion Community`, description: `Discussion posts in the ${category} category` } }), _jsxs("main", { className: "container py-8", children: [_jsx("div", { className: "flex justify-end mb-6", children: _jsx(TooltipProvider, { children: _jsxs(Tooltip, { children: [_jsx(TooltipTrigger, { asChild: true, children: hasSession ? (_jsx(Button, { asChild: true, children: _jsx(Link, { href: `/community?new=1&category=${category}`, children: "Create New Post" }) })) : (_jsx(Button, { disabled: true, children: "Create New Post" })) }), !hasSession && _jsx(TooltipContent, { children: "Login required" })] }) }) }), posts && posts.length > 0 ? (_jsxs("div", { className: "space-y-4", children: [posts.map((post) => (_jsx(PostCard, { post: post }, post.id))), isLoading && _jsx("div", { className: "text-center py-4", children: "Loading..." }), !isLoading && hasMore && (_jsx("div", { className: "text-center py-4", children: _jsx(Button, { onClick: loadMorePosts, children: "Load More" }) })), !isLoading && !hasMore && posts.length > 0 && (_jsx("div", { className: "text-center py-4 text-gray-500", children: "No more posts." }))] })) : (
                    // Show EmptyState only if not loading and no posts initially (and no posts after filtering if any)
                    !isLoading && _jsx(EmptyState, { title: "No posts yet", subtitle: "Be the first to post", cta: "Create New Post", href: `/community?new=1&category=${category}`, hasSession: hasSession }))] })] }));
};
export const getServerSideProps = async ({ req, params }) => {
    const category = params?.slug;
    // Supabase client setup for SSR remains largely the same
    const supabaseUrl = process.env.SUPABASE_URL ||
        process.env.VITE_SUPABASE_URL ||
        process.env.NEXT_PUBLIC_SUPABASE_URL ||
        '';
    const anonKey = process.env.SUPABASE_SERVICE_ROLE_KEY ||
        process.env.VITE_SUPABASE_ANON_KEY ||
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
        '';
    const token = req.cookies?.['sb-access-token'] || null;
    let initialPostsData = [];
    let initialNextCursor = null;
    if (!supabaseUrl || !anonKey) {
        // Return empty initialPosts if Supabase is not configured
        return { props: { initialPosts: [], initialNextCursor: null, hasSession: Boolean(token), category } };
    }
    // const supabase = createClient(supabaseUrl, anonKey); // Not needed if calling service function
    try {
        // Fetch initial posts using the modified service function
        // No cursor is passed for the initial fetch (it will be undefined)
        const { posts, nextCursor } = await fetchPostsByCategory(category, undefined, POSTS_PER_PAGE);
        initialPostsData = posts;
        initialNextCursor = nextCursor;
    }
    catch (error) {
        console.error('Initial post fetch error:', error.message);
        // Handle error appropriately, maybe return empty or an error prop
    }
    return {
        props: {
            initialPosts: initialPostsData,
            initialNextCursor, // Pass the cursor to the page component
            hasSession: Boolean(token),
            category
        }
    };
};
export default CategoryPage;
