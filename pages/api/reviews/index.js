import { PrismaClient } from '@prisma/client';
import { supabase } from '@/integrations/supabase/client'; // Assuming supabase client is here
const prisma = new PrismaClient();
export default async function handler(req, res) {
    if (req.method !== 'POST') {
        res.setHeader('Allow', ['POST']);
        return res.status(405).end(`Method ${req.method} Not Allowed`);
    }
    const { productId, rating, comment } = req.body;
    // Input validation
    if (!productId || typeof productId !== 'string') {
        return res.status(400).json({ error: 'productId is required and must be a string.' });
    }
    if (rating === undefined || typeof rating !== 'number' || rating < 1 || rating > 5) {
        return res.status(400).json({ error: 'Rating is required and must be a number between 1 and 5.' });
    }
    if (comment && typeof comment !== 'string') {
        return res.status(400).json({ error: 'Comment must be a string.' });
    }
    try {
        // Get user from Supabase session
        const { data: { session }, error: sessionError } = await supabase.auth.getSession();
        if (sessionError || !session || !session.user) {
            return res.status(401).json({ error: 'Not authenticated or session error.' });
        }
        // const userId = session.user.id; // Supabase user ID is a string (UUID)
        const userEmail = session.user.email;
        if (!userEmail) {
            return res.status(401).json({ error: 'User email not found in session.' });
        }
        const prismaUser = await prisma.user.findUnique({
            where: { email: userEmail },
        });
        if (!prismaUser) {
            return res.status(404).json({ error: 'User not found in our database.' });
        }
        const internalUserId = prismaUser.id; // This is the Int ID from our User model
        const newReview = await prisma.productReview.create({
            data: {
                productId,
                rating,
                comment,
                userId: internalUserId, // Use the internal integer ID
            },
        });
        return res.status(201).json(newReview);
    }
    catch (e) {
        if (e.code === 'P2002' && e.meta?.target?.includes('productId') && e.meta?.target?.includes('userId')) {
            return res.status(409).json({ error: 'You have already reviewed this product.' });
        }
        console.error(e);
        return res.status(500).json({ error: 'Internal server error.' });
    }
    finally {
        await prisma.$disconnect();
    }
}
