import { type EmailOtpType } from '@supabase/supabase-js'
import { type NextApiRequest, type NextApiResponse } from 'next'
import { createClient } from '../../../src/utils/supabase/server'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { token_hash, type, next } = req.query as {
    token_hash?: string;
    type?: string;
    next?: string;
  }
  const redirectTo = (next as string) ?? '/'

  if (token_hash && type) {
    const supabase = createClient(req, res)

    const { error } = await supabase.auth.verifyOtp({
      type: type as EmailOtpType,
      token_hash: token_hash as string,
    })

    if (!error) {
      // redirect user to specified redirect URL or root of app
      res.setHeader('Location', redirectTo)
      res.status(302).end()
      return
    }
  }

  // redirect the user to an error page with some instructions
  res.setHeader('Location', '/error')
  res.status(302).end()
  return
} 