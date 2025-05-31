import type { Request, Response } from 'express';
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY // Use service role for direct DB ops

if (!supabaseUrl || !supabaseServiceKey) {
  console.error("Supabase URL or Service Role Key is not defined for peer review endpoint.")
}

const supabase = createClient(supabaseUrl!, supabaseServiceKey!)

// Placeholder for user authentication - e.g., get current user ID
// In a real app, you'd get this from a session or JWT.
const getAuthenticatedUserId = (req: Request): number | null => {
  // For now, let's assume it's passed in the request or a fixed value for testing.
  // IMPORTANT: Replace with actual authentication.
  const { MOCK_LOGGED_IN_USER_ID } = process.env;
  if (MOCK_LOGGED_IN_USER_ID) return parseInt(MOCK_LOGGED_IN_USER_ID, 10);

  // Fallback if you pass it in body for testing, but this is not secure for reviewerId
  if (req.body.reviewerId) return parseInt(req.body.reviewerId, 10);

  console.warn("MOCK_LOGGED_IN_USER_ID not set. Peer review submission will likely fail or use a dummy ID.");
  return null; // Or throw error if auth is strictly required
}


export default async function handler(
  req: Request,
  res: Response
) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).send(`Method ${req.method} Not Allowed`);
  }

  // --- Authentication Placeholder ---
  const authenticatedUserId = getAuthenticatedUserId(req);
  if (!authenticatedUserId) {
    // If you want to strictly enforce that reviewerId comes from a trusted auth source:
    // return res.status(401).json({ error: 'Unauthorized: User must be logged in to submit a review.' });
  }
  // --- End Authentication Placeholder ---

  const {
    reviewerId: bodyReviewerId, // This might be used if auth placeholder allows it
    revieweeId,
    reviewType,
    comment,
  } = req.body;

  const finalReviewerId = authenticatedUserId || bodyReviewerId; // Prefer authenticated user

  if (!finalReviewerId || !revieweeId || !reviewType) {
    return res.status(400).json({ error: 'Missing required fields: reviewerId, revieweeId, reviewType.' });
  }

  if (isNaN(Number(finalReviewerId)) || isNaN(Number(revieweeId))) {
    return res.status(400).json({ error: 'reviewerId and revieweeId must be numbers.' });
  }

  if (Number(finalReviewerId) === Number(revieweeId)) {
    return res.status(400).json({ error: 'Reviewer and reviewee cannot be the same user.' });
  }

  if (!['endorsement', 'flag'].includes(reviewType)) {
    return res.status(400).json({ error: 'Invalid reviewType. Must be "endorsement" or "flag".' });
  }

  if (comment && typeof comment !== 'string') {
    return res.status(400).json({ error: 'Comment must be a string.' });
  }
  if (comment && comment.length > 1000) { // Example length limit
    return res.status(400).json({ error: 'Comment is too long (max 1000 characters).' });
  }


  try {
    // Check if reviewer and reviewee exist (optional, depends on DB constraints and desired UX)
    const { data: reviewerUser, error: reviewerError } = await supabase.from('User').select('id').eq('id', finalReviewerId).single();
    if (reviewerError || !reviewerUser) {
        return res.status(404).json({ error: `Reviewer with ID ${finalReviewerId} not found.`});
    }
    const { data: revieweeUser, error: revieweeError } = await supabase.from('User').select('id').eq('id', revieweeId).single();
    if (revieweeError || !revieweeUser) {
        return res.status(404).json({ error: `Reviewee with ID ${revieweeId} not found.`});
    }


    // Prevent duplicate reviews (e.g. one endorsement per reviewer-reviewee pair)
    if (reviewType === 'endorsement') {
        const { data: existingEndorsement, error: existingError } = await supabase
            .from('PeerReview')
            .select('id')
            .eq('reviewerId', finalReviewerId)
            .eq('revieweeId', revieweeId)
            .eq('reviewType', 'endorsement')
            .maybeSingle(); // Use maybeSingle to not error if no row found

        if (existingError) {
            console.error("Error checking for existing endorsement:", existingError);
            // Potentially allow submission if unsure, or return error
        }
        if (existingEndorsement) {
            return res.status(409).json({ error: 'You have already endorsed this user.' });
        }
    }


    const { data: newReview, error } = await supabase
      .from('PeerReview')
      .insert({
        reviewerId: Number(finalReviewerId),
        revieweeId: Number(revieweeId),
        reviewType,
        comment: comment || null, // Ensure null if empty string or undefined
      })
      .select() // Return the created record
      .single();

    if (error) {
      console.error('Error saving peer review:', error);
      // Consider more specific error codes based on Prisma/DB errors
      if (error.code === '23503') { // Foreign key violation
          if (error.message.includes('PeerReview_reviewerId_fkey')) {
            return res.status(400).json({ error: 'Reviewer user does not exist.'});
          }
           if (error.message.includes('PeerReview_revieweeId_fkey')) {
            return res.status(400).json({ error: 'Reviewee user does not exist.'});
          }
      }
      return res.status(500).json({ error: 'Failed to save peer review.', details: error.message });
    }

    return res.status(201).json({ message: 'Peer review submitted successfully.', review: newReview });

  } catch (err: any) {
    console.error('Unexpected error in /api/trust/peer-review:', err);
    return res.status(500).json({ error: 'An unexpected server error occurred.' });
  }
}
