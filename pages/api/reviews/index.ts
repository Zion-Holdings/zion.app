import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
import { supabase } from '@/integrations/supabase/client';

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  const { data: sessionData, error: sessionError } =
    await supabase.auth.getSession();
  if (sessionError || !sessionData.session) {
    await prisma.$disconnect();
    return res
      .status(401)
      .json({ error: 'Not authenticated or session error.' });
  }

  const email = (sessionData.session as any)?.user?.email;
  if (!email) {
    await prisma.$disconnect();
    return res.status(401).json({ error: 'User email not found in session.' });
  }

  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) {
    await prisma.$disconnect();
    return res.status(404).json({ error: 'User not found in our database.' });
  }

  const { productId, rating, comment } = req.body || {};

  const parsedRating = Number(rating);
  if (
    typeof parsedRating !== 'number' ||
    Number.isNaN(parsedRating) ||
    parsedRating < 1 ||
    parsedRating > 5
  ) {
    await prisma.$disconnect();
    return res
      .status(400)
      .json({
        error: 'Rating is required and must be a number between 1 and 5.',
      });
  }

  if (!productId || typeof productId !== 'string') {
    await prisma.$disconnect();
    return res
      .status(400)
      .json({ error: 'productId is required and must be a string.' });
  }

  try {
    const review = await prisma.productReview.create({
      data: { productId, rating: parsedRating, comment, userId: user.id },
    });
    return res.status(201).json(review);
  } catch (e: any) {
    if (e.code === 'P2002') {
      return res
        .status(409)
        .json({ error: 'You have already reviewed this product.' });
    }
    console.error('Error creating review:', e);
    return res
      .status(500)
      .json({ error: 'Internal server error while creating review.' });
  } finally {
    await prisma.$disconnect();
  }
}
