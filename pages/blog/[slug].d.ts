import React from 'react';
import type { GetStaticPaths, GetStaticProps } from 'next';
import type { BlogPost } from '@/types/blog';
interface BlogProps {
    post: BlogPost | null;
}
declare const BlogPostPage: React.FC<BlogProps>;
export declare const getStaticPaths: GetStaticPaths;
export declare const getStaticProps: GetStaticProps<BlogProps>;
export default BlogPostPage;
