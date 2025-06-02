import React from 'react';
import type { GetServerSideProps } from 'next';
import { Product } from '@prisma/client';
export type ProductWithReviewStats = Product & {
    averageRating: number | null;
    reviewCount: number;
};
interface ListingPageProps {
    product: ProductWithReviewStats | null;
    error?: string;
}
declare const MarketplaceListingPage: React.FC<ListingPageProps>;
export declare const getServerSideProps: GetServerSideProps<ListingPageProps>;
export default MarketplaceListingPage;
