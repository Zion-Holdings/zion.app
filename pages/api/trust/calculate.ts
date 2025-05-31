import type { NextApiRequest, NextApiResponse } from 'next'
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
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST'])
    return res.status(405).end(`Method ${req.method} Not Allowed`)
  }

  const { userId } = req.body

  if (!userId) {
    return res.status(400).json({ error: 'User ID is required in the request body.' })
  }

  // Basic check for admin privileges (example - replace with your actual auth logic)
  // This is a placeholder. In a real app, you'd verify a JWT, session, or use a proper auth system.
  const isAdmin = req.headers['x-admin-secret'] === process.env.ADMIN_SECRET_KEY
  if (!isAdmin && process.env.NODE_ENV === 'production') { // More lenient in dev for testing
      // In a real scenario, you might also check if the user is trying to calculate their own score
      // and if that's allowed by your policies.
      console.warn("Attempt to access /api/trust/calculate without admin privileges denied.")
      return res.status(403).json({ error: 'Forbidden: Admin privileges required.' })
  }


  try {
    const { data, error: invokeError } = await supabase.functions.invoke('calculate-trust-score', {
      body: { userId: Number(userId) }, // Ensure userId is a number if your function expects it
    })

    if (invokeError) {
      console.error('Error invoking Supabase function calculate-trust-score:', invokeError)
      // Check if the error object has more specific details, e.g., from the function itself
      let statusCode = 500
      let errorMessage = 'Error calculating trust score.'
      if (invokeError.context && invokeError.context.status) {
        statusCode = invokeError.context.status
      }
      if (invokeError.message) {
          errorMessage = invokeError.message
      }
      // If the function returned a JSON error, it might be in data (depends on Supabase version & function impl.)
      // Supabase client v2 typically puts function errors in the `error` object.
      return res.status(statusCode).json({ error: errorMessage, details: invokeError })
    }

    // Supabase functions often return the result in the `data` field.
    // If the function itself threw an error that wasn't caught by supabase.functions.invoke
    // and it returned a JSON error payload, it might also be in `data`.
    // We assume success if `invokeError` is null.
    if (data && data.error) { // Handle errors returned successfully by the function execution (e.g. validation error)
        return res.status(data.status || 400).json({ error: data.error, details: data.details || null });
    }


    return res.status(200).json(data)

  } catch (err) {
    // This catch block is for unexpected errors in this Next.js API route itself
    console.error('Unexpected error in /api/trust/calculate:', err)
    return res.status(500).json({ error: 'An unexpected server error occurred.' })
  }
}
