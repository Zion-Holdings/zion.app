<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next;

interface Review {
  id: string;
  productId: string;
  userId: string;
  rating: number;
  comment: string;
  createdAt: string;

interface ReviewsResponse {
  reviews: Review[];
  total: number;
  averageRating: number;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ReviewsResponse | { error: string }>
) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });

  try {
    const { productId, rating, limit = '10', offset = '0' } = req.query;

    if (!productId) {
      return res.status(400).json({ error: 'Product ID is required' });

    const limitNum = parseInt(limit as string, 10);
    const offsetNum = parseInt(offset as string, 10);
    const parsedRating = Number(rating);

    // Mock data - replace with actual database query
    const mockReviews: Review[] = [

        id: '1',
        productId: productId as string,
        userId: 'user1',
        rating: 5,
        comment: 'Great product!',
        createdAt: '2024-01-15T10:00:00Z'
      },
      // Add more mock reviews as needed
    ];

    // Filter by rating if specified
    let filteredReviews = mockReviews;
    if (!isNaN(parsedRating) && parsedRating > 0) {
      filteredReviews = mockReviews.filter(review => review.rating === parsedRating);

    // Calculate average rating
    const totalRating = filteredReviews.reduce((sum, review) => sum + review.rating, 0);
    const averageRating = filteredReviews.length > 0 ? totalRating / filteredReviews.length : 0;

    // Paginate results
    const paginatedReviews = filteredReviews.slice(offsetNum, offsetNum + limitNum);

    const response: ReviewsResponse = {
      reviews: paginatedReviews,
      total: filteredReviews.length,
      averageRating: Math.round(averageRating * 10) / 10
    };

    return res.status(200).json(response);
  } catch (error) {
    console.error('Reviews API error:', error);
    return res.status(500).json({ error: 'Internal server error' });


=======
import React from 'react;
import { NextPage } from 'next;
import Head from 'next/head;

const Index: NextPage = () => {
  return (
    <>
      <Head>
        <title>Index - Zion App</title>
      </Head>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Index</h1>
        <div className="bg-white rounded-lg shadow p-6">
          {/* Index content will go here */}
        </div>
      </div>
    </>
  );
};

export default Index;
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
