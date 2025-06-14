import BlogPage from '@/pages/Blog';
import { BLOG_POSTS } from '@/data/blog-posts';
import * as Sentry from '@sentry/nextjs';
export const getServerSideProps = async () => {
    try {
        // Example: Add a breadcrumb if you want to trace this specific SSR execution
        // Sentry.addBreadcrumb({
        //   category: 'ssr',
        //   message: 'getServerSideProps for BlogPage called',
        //   level: 'info',
        // });
        // Simulate a potential error during data fetching or processing, even for static data
        if (Math.random() > 0.8) { // ~20% chance of error for testing
            throw new Error("Simulated SSR error in BlogPage getServerSideProps");
        }
        return { props: { posts: BLOG_POSTS } };
    }
    catch (error) {
        Sentry.captureException(error);
        throw error; // Re-throw the error so Next.js can handle it
    }
};
export default BlogPage;
