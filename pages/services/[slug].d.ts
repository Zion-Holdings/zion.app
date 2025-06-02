import React from 'react';
import type { GetStaticPaths, GetStaticProps } from 'next';
import type { ProductListing } from '@/types/listings';
interface ServiceProps {
    service: ProductListing | null;
}
declare const ServicePage: React.FC<ServiceProps>;
export declare const getStaticPaths: GetStaticPaths;
export declare const getStaticProps: GetStaticProps<ServiceProps>;
export default ServicePage;
