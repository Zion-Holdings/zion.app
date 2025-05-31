import type { Request, Response } from 'express';
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
// This key should have appropriate permissions if you're invoking functions
// that require elevated privileges, or it could be the anon key if your
// function and RLS policies allow. For a function that modifies data like this one,
// a service role key or a specific user context with permissions is often needed.
// For simplicity, using service role key here, but ensure it's secured.
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

if (!supabaseUrl || !supabaseServiceKey) {
  console.error("Supabase URL or Service Role Key is not defined for calculate endpoint.")
}

const supabase = createClient(supabaseUrl!, supabaseServiceKey!)

export default async function handler(
  req: Request,
  res: Response
) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).send(`Method ${req.method} Not Allowed`);
  }

  const { userId } = req.body;

  if (!userId) {
    return res.status(400).json({ error: 'User ID is required in the request body.' });
  }

  // Basic check for admin privileges (example - replace with your actual auth logic)
  // This is a placeholder. In a real app, you'd verify a JWT, session, or use a proper auth system.
  const isAdmin = req.headers['x-admin-secret'] === process.env.ADMIN_SECRET_KEY;
  if (!isAdmin && process.env.NODE_ENV === 'production') { // More lenient in dev for testing
      // In a real scenario, you might also check if the user is trying to calculate their own score
      // and if that's allowed by your policies.
      console.warn("Attempt to access /api/trust/calculate without admin privileges denied.");
      return res.status(403).json({ error: 'Forbidden: Admin privileges required.' });
  }


  try {
    const { data, error: invokeError } = await supabase.functions.invoke('calculate-trust-score', {
      body: { userId: Number(userId) }, // Ensure userId is a number if your function expects it
    });

    if (invokeError) {
      console.error('Error invoking Supabase function calculate-trust-score:', invokeError);
      // Check if the error object has more specific details, e.g., from the function itself
      let statusCode = 500;
      let errorMessage = 'Error calculating trust score.';
      // Supabase function invocation error might have a context with status
      // This structure might vary slightly based on Supabase client versions or specific function error handling
      if (typeof invokeError === 'object' && invokeError !== null && 'context' in invokeError &&
          typeof (invokeError as any).context === 'object' && (invokeError as any).context !== null &&
          'status' in (invokeError as any).context) {
        statusCode = (invokeError as any).context.status;
      }
      if (invokeError.message) {
          errorMessage = invokeError.message;
      }
      return res.status(statusCode).json({ error: errorMessage, details: invokeError });
    }

    // Supabase functions often return the result in the `data` field.
    // If the function itself threw an error that wasn't caught by supabase.functions.invoke
    // and it returned a JSON error payload, it might also be in `data`.
    // We assume success if `invokeError` is null.
    // Check if data itself contains an error structure (common for functions that handle their own errors)
    if (data && data.error) {
        return res.status(data.status || 400).json({ error: data.error, details: data.details || null });
    }

    return res.status(200).json(data);

  } catch (err: any) {
    // This catch block is for unexpected errors in this API route itself
    console.error('Unexpected error in /api/trust/calculate:', err);
    return res.status(500).json({ error: 'An unexpected server error occurred.' });
  }
}
