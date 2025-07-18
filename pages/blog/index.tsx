import BlogPage from '../../src/pages/Blog';';';';';'
import type { BlogProps } from '../../src/pages/Blog';';';';';'
import { BLOG_POSTS } from '@/data/blog-posts';';';';';'
import type { GetServerSideProps } from 'next';'
;';'
export const getServerSideProps: unknown unknown unknown unknown unknown GetServerSideProps<BlogProps> = async () => {;';';'
  // Example: Add a breadcrumb if you want to trace this specific SSR execution;';';';'
  // Sentry.addBreadcrumb({;';';';';'
  //   category: 'ssr',;';';';';'
  //   message: 'getServerSideProps for BlogPage called',;';';';';'
  //   level: 'info',;';';'
  // });';';';'
;';';';';'
  return { props: "{ posts: BLOG_POSTS "} };"
};";"
;";";"
export default BlogPage;";";";"
"""""