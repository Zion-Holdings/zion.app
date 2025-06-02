import React from 'react';
import type { ForumPost } from '@/types/community';
interface CategoryPageProps {
    initialPosts: ForumPost[];
    initialNextCursor: string | null;
    hasSession: boolean;
    category: string;
}
declare const CategoryPage: React.FC<CategoryPageProps>;
export declare const getServerSideProps: ({ req, params }: {
    req: any;
    params?: {
        slug?: string;
    };
}) => Promise<{
    props: {
        initialPosts: ForumPost[];
        initialNextCursor: string;
        hasSession: boolean;
        category: string;
    };
}>;
export default CategoryPage;
