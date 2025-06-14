import React from 'react';
import type { GetStaticPaths, GetStaticProps } from 'next';
interface PageMeta {
    title?: string;
    description?: string;
}
interface PageProps {
    content: string | null;
    meta: PageMeta | null;
}
declare const StaticPage: React.FC<PageProps>;
export declare const getStaticPaths: GetStaticPaths;
export declare const getStaticProps: GetStaticProps<PageProps>;
export default StaticPage;
