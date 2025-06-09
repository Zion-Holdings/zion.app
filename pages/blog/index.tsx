import BlogPage, { BlogProps } from '@/pages/Blog';
import { BLOG_POSTS } from '@/data/blog-posts';
import type { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps<BlogProps> = async () => {
  return { props: { posts: BLOG_POSTS } };
};

export default BlogPage;
