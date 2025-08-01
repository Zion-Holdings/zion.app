import { createClient } from '@supabase/supabase-js'
import { NextApiRequest, NextApiResponse } from 'next'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { code } = req.query

  if (code) {
    const { data, error } = await supabase.auth.exchangeCodeForSession(code as string)
    
    if (error) {
      return res.redirect('/auth/login?error=Could not authenticate user')
    }

    if (data.session) {
      return res.redirect('/dashboard')
    }
  }

  return res.redirect('/auth/login')
} 