import React from 'react';
import type { BlogPost } from '@/types/blog';
import type { GetStaticPaths, GetStaticProps } from 'next';
interface BlogPostPageProps {
    /**
     * Preloaded blog post for static generation. Can be null if not found.
     */
    initialPost: BlogPost | null;
}
declare const BlogPostPage: React.FC<BlogPostPageProps>;
export default BlogPostPage;
export declare const getStaticPaths: GetStaticPaths;
export declare const getStaticProps: GetStaticProps<BlogPostPageProps>;
