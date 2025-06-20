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
    const errorMessage = result.error.errors[0].message;
    return res.status(400).json({ 
      error: errorMessage,
      message: errorMessage // Include both for compatibility
    });
  }

  const { name, email, password } = result.data;
  try {
    const { data, error } = await supabase.auth.signUp({
      email: email.toLowerCase(),
      password,
      options: { data: { display_name: name } },
    });

    if (error) {
      let errorMessage = error.message;
      let statusCode = error.status || 500;
      
      if (error.message.includes('already registered')) {
        errorMessage = 'Email already registered';
        statusCode = 409;
      } else if (error.message.toLowerCase().includes('weak')) {
        errorMessage = 'Password is too weak';
        statusCode = 400;
      }
      
      return res.status(statusCode).json({ 
        error: errorMessage,
        message: errorMessage // Include both for compatibility
      });
    }

    if (data?.user && !data?.session) {
      const successMessage = 'Registration successful. Please check your email to verify your account.';
      return res.status(201).json({
        message: successMessage,
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
      return res.status(201).json({ 
        message: 'Registration successful',
        user: data.user, 
        session: data.session 
      });
    }

    const errorMessage = 'Unexpected response from auth provider';
    return res.status(500).json({ 
      error: errorMessage,
      message: errorMessage // Include both for compatibility
    });
  } catch (err) {
    console.error(err);
    const errorMessage = 'Network error. Please try again.';
    return res.status(503).json({ 
      error: errorMessage,
      message: errorMessage // Include both for compatibility
    });
  }
}

export default withErrorLogging(handler);
