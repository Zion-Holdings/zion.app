import { Product } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';
export type ProductWithReviewStats = Product & {
    averageRating: number | null;
    reviewCount: number;
    title: string;
    category?: string;
    images?: {
        url: string;
        alt?: string;
    }[];
    price?: number | null;
    currency?: string;
    tags?: string[];
};
export default function handler(req: NextApiRequest, res: NextApiResponse<ProductWithReviewStats[] | {
    error: string;
}>): Promise<any>;
