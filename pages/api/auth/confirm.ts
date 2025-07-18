import { type NextApiRequest, type NextApiResponse } from 'next';
import { createClient } from '../../../src/utils/supabase/server';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { token_hash, type, next } = req.query;

  if (token_hash && type) {
    const supabase = createClient();

    if (type === 'recovery') {
      const { error } = await supabase.auth.verifyOtp({
        token_hash: token_hash as string,
        type: 'recovery'
      });

      if (error) {
        return res.redirect('/auth/auth-code-error');
      }
    }

    return res.redirect(next ? (next as string) : '/');
  }

  return res.redirect('/auth/auth-code-error');
}