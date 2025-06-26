import { type EmailOtpType } from '@supabase/supabase-js'
import { type NextApiRequest, type NextApiResponse } from 'next'
import { createClient } from '../../../src/utils/supabase/server'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { token_hash, type, next } = req.query
  const redirectTo = (next as string) ?? '/'

  if (token_hash && type) {
    const supabase = createClient(req, res)

    const { error } = await supabase.auth.verifyOtp({
      type: type as EmailOtpType,
      token_hash: token_hash as string,
    })

    if (!error) {
      // redirect user to specified redirect URL or root of app
      return res.redirect(302, redirectTo)
    }
  }

  // redirect the user to an error page with some instructions
  return res.redirect(302, '/error')
} 