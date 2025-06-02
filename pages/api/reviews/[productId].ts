import { PrismaClient, Prisma, ProductReview, User } from '@prisma/client'; // Import Prisma for error types and generated types
import type { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

// Define the structure of the review object that will be returned
// This includes selected fields from the related User
interface ReviewWithUser extends Omit<ProductReview, 'userId'> { // Omit userId if you're replacing it with the user object
  user: {
    id: string;
    name: string | null; // Prisma User.name can be null
    // avatar_url?: string | null; // Example if you add avatar
  };
}

interface ErrorResponse {
  error: string;
  details?: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ReviewWithUser[] | ErrorResponse>
) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }

  const { productId } = req.query;

  if (!productId || typeof productId !== 'string') {
    return res.status(400).json({ error: 'productId is required in the URL path and must be a string.' });
  }

  try {
    const reviewsData = await prisma.productReview.findMany({
      where: {
        productId: productId,
      },
      include: {
        user: { 
          select: {
            id: true,
            name: true,
            // avatar_url: true, // Uncomment if you add avatar_url to select and ReviewWithUser
          },
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    // Transform the data to match ReviewWithUser structure if necessary,
    // especially if the included 'user' object is null for some reason (though it shouldn't be with an inner include).
    // Prisma's include should ensure user is there if review.userId is valid.
    // If user can be null (e.g. anonymous reviews allowed with nullable userId), handle that.
    const reviews: ReviewWithUser[] = reviewsData.map(review => {
      if (!review.user) {
        // This case should ideally not happen if review.userId is a non-null foreign key
        // and data integrity is maintained. Handle as an error or provide default user.
        console.warn(`Review ${review.id} has no associated user. This might indicate data inconsistency.`);
        // Fallback or skip this review
        return {
          ...review,
          user: { id: 'unknown', name: 'Anonymous' } // Provide a fallback user object
        } as ReviewWithUser; // Cast needed if user was potentially null from Prisma's perspective initially
      }
      return review as unknown as ReviewWithUser; // Cast if Prisma's included 'user' doesn't perfectly match ReviewWithUser.user
    });


    return res.status(200).json(reviews);
  } catch (e: unknown) {
    console.error(`Error fetching reviews for productId ${productId}:`, e);
    let errorMessage = 'Internal server error while fetching reviews.';
    let errorDetails: string | undefined;

    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      errorMessage = `Database error: ${e.code}`;
      errorDetails = e.message;
    } else if (e instanceof Error) {
      errorMessage = e.message;
    } else if (typeof e === 'string') {
      errorMessage = e;
    }
    
    return res.status(500).json({ error: errorMessage, details: errorDetails });
  } finally {
    await prisma.$disconnect();
  }
}
