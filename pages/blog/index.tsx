import BlogPage from '../../src/pages/Blog';
import type { BlogProps } from '../../src/pages/Blog';
import { BLOG_POSTS } from '@/data/blog-posts';
import type { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps<BlogProps> = async () => {
  try {
    // Example: Add a breadcrumb if you want to trace this specific SSR execution
    // Sentry.addBreadcrumb({
    //   category: 'ssr',
    //   message: 'getServerSideProps for BlogPage called',
    //   level: 'info',
    // });


    return { props: { posts: BLOG_POSTS } };
  } catch (error) {
    // Sentry.captureException(error); // This line was removed as per the edit hint.
    throw error; // Re-throw the error so Next.js can handle it
  }
};

export default BlogPage;
