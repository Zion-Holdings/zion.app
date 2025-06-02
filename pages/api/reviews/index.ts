import { PrismaClient, Prisma, ProductReview } from '@prisma/client'; // Import Prisma types
import type { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '@/integrations/supabase/client'; 

const prisma = new PrismaClient();

interface ReviewPOSTBody {
  productId?: string;
  rating?: number;
  comment?: string;
  // userId is derived from session, not from body
}

interface ErrorResponse {
  error: string;
  details?: string;
}

// Using Prisma's generated ProductReview type for success response
type SuccessResponse = ProductReview;

export default async function handler(
  req: NextApiRequest, 
  res: NextApiResponse<SuccessResponse | ErrorResponse>
) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }

  const { productId, rating, comment } = req.body as ReviewPOSTBody;

  // Input validation
  if (!productId || typeof productId !== 'string') {
    return res.status(400).json({ error: 'productId is required and must be a string.' });
  }
  if (rating === undefined || typeof rating !== 'number' || rating < 1 || rating > 5) {
    return res.status(400).json({ error: 'Rating is required and must be a number between 1 and 5.' });
  }
  if (comment && typeof comment !== 'string') { // Comment is optional
    return res.status(400).json({ error: 'Comment, if provided, must be a string.' });
  }

  try {
    const { data: { session }, error: sessionError } = await supabase.auth.getSession();

    if (sessionError || !session || !session.user) {
      console.error('Session error getting user for review:', sessionError);
      return res.status(401).json({ error: 'Not authenticated or session error.' });
    }
    
    const userEmail = session.user.email;
    if (!userEmail) {
        return res.status(401).json({ error: 'User email not found in session.' });
    }

    // Find the internal Prisma user ID based on the Supabase user's email
    const prismaUser = await prisma.user.findUnique({
        where: { email: userEmail },
        select: { id: true } // Only select the ID
    });

    if (!prismaUser) {
        // This case might happen if a user exists in Supabase Auth but not in your Prisma `User` table
        console.warn(`User with email ${userEmail} not found in Prisma database, but exists in Supabase Auth.`);
        return res.status(404).json({ error: 'User profile not found. Cannot post review.' });
    }
    const internalUserId = prismaUser.id; // This is the integer ID from your Prisma User model

    const newReview = await prisma.productReview.create({
      data: {
        productId,
        rating,
        comment: comment || '', // Ensure comment is string, even if empty
        userId: internalUserId, 
      },
    });
    return res.status(201).json(newReview);

  } catch (e: unknown) {
    let errorMessage = 'Internal server error while creating review.';
    let errorDetails: string | undefined;

    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      // Unique constraint violation (user already reviewed this product)
      if (e.code === 'P2002' && e.meta && typeof e.meta.target === 'string' && e.meta.target.includes('productId') && e.meta.target.includes('userId')) {
        return res.status(409).json({ error: 'You have already reviewed this product.' });
      }
      errorMessage = `Database error: ${e.code}`;
      errorDetails = e.message;
    } else if (e instanceof Error) {
      errorMessage = e.message;
    } else if (typeof e === 'string') {
      errorMessage = e;
    }
    console.error('Error creating review:', e);
    return res.status(500).json({ error: errorMessage, details: errorDetails });
  } finally {
    await prisma.$disconnect();
  }
}
