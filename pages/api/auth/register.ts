import { createClient } from '@supabase/supabase-js';
import type { NextApiRequest, NextApiResponse } from 'next';
import { z } from 'zod';
import { withErrorLogging } from '@/utils/withErrorLogging';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY as string;
const supabase = createClient(supabaseUrl, supabaseKey);

const schema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  password: z.string().min(6),
});

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).end();
  }

  const result = schema.safeParse(req.body);
  if (!result.success) {
    return res.status(400).json({ message: result.error.errors[0].message });
  }

  const { name, email, password } = result.data;
  try {
    const { data, error } = await supabase.auth.signUp({
      email: email.toLowerCase(),
      password,
      options: { data: { display_name: name } },
    });

    if (error) {
      if (error.message.includes('already registered')) {
        return res.status(409).json({ message: 'Email already registered' });
      }
      if (error.message.toLowerCase().includes('weak')) {
        return res.status(400).json({ message: 'Password is too weak' });
      }
      return res.status(error.status || 500).json({ message: error.message });
    }

    if (data?.user && !data?.session) {
      return res.status(201).json({
        message: 'Registration successful. Please check your email to verify your account.',
        emailVerificationRequired: true,
        user: {
          id: data.user.id,
          email: data.user.email,
          display_name: data.user.user_metadata?.display_name,
        },
      });
    }

    if (data?.session && data?.user) {
      res.setHeader(
        'Set-Cookie',
        `authToken=${data.session.access_token}; HttpOnly; Path=/; Secure; SameSite=Strict`
      );
      return res.status(201).json({ user: data.user, session: data.session });
    }

    return res.status(500).json({ message: 'Unexpected response from auth provider' });
  } catch (err) {
    console.error(err);
    return res.status(503).json({ message: 'Network error. Please try again.' });
  }
}

export default withErrorLogging(handler);
