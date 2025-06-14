import React from 'react';
import type { GetServerSideProps } from 'next';
export interface HomePageProps {
    hasError?: boolean;
    errorMessage?: string;
}
export declare function fetchHomeData(): Promise<any>;
export declare const getServerSideProps: GetServerSideProps<HomePageProps>;
declare const IndexPage: React.FC<HomePageProps>;
export default IndexPage;
