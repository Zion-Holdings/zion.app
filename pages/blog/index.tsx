import BlogPage, { BlogProps } from '../../src/pages/Blog';
import { BLOG_POSTS } from '../../src/data/blog-posts';
import type { GetStaticProps } from 'next'; // Changed import

export const getStaticProps: GetStaticProps<BlogProps> = async () => {
  return { props: { posts: BLOG_POSTS } };
};

export default BlogPage;
