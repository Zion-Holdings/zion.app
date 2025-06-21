import type { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '@/integrations/supabase/client';

interface RateInfo { count: number; first: number }
const WINDOW_MS = 15 * 60 * 1000; // 15 minutes
const MAX_REQUESTS = 5;
const ipMap = new Map<string, RateInfo>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = ipMap.get(ip);
  if (!entry) {
    ipMap.set(ip, { count: 1, first: now });
    return false;
  }
  if (now - entry.first > WINDOW_MS) {
    ipMap.set(ip, { count: 1, first: now });
    return false;
  }
  entry.count += 1;
  if (entry.count > MAX_REQUESTS) {
    return true;
  }
  ipMap.set(ip, entry);
  return false;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  const ip = (req.headers['x-forwarded-for'] || req.socket.remoteAddress || '') as string;
  if (isRateLimited(ip)) {
    return res.status(429).json({ message: 'Too many requests. Please try again later.' });
  }

  try {
    const { name, email, password } = req.body;

    // Basic validation
    if (!name || !email || !password) {
      return res.status(400).json({ 
        message: 'Missing required fields: name, email, and password are required.' 
      });
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ 
        message: 'Please provide a valid email address.' 
      });
    }

    // Password strength validation
    if (password.length < 6) {
      return res.status(400).json({ 
        message: 'Password must be at least 6 characters long.' 
      });
    }

    console.log(`Processing registration request for ${email}`);

    // Use Supabase for user registration
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          display_name: name,
          name: name
        }
      }
    });

    if (error) {
      console.error('[API /api/auth/register] Supabase signup error:', error);
      
      // Handle specific Supabase errors
      if (error.message.includes('already registered')) {
        return res.status(409).json({ 
          message: 'An account with this email already exists. Please try logging in instead.' 
        });
      }
      
      if (error.message.includes('rate limit')) {
        return res.status(429).json({ 
          message: 'Too many registration attempts. Please try again later.' 
        });
      }

      if (error.message.includes('invalid email')) {
        return res.status(400).json({ 
          message: 'Please provide a valid email address.' 
        });
      }

      if (error.message.includes('weak password')) {
        return res.status(400).json({ 
          message: 'Password is too weak. Please choose a stronger password.' 
        });
      }
      
      return res.status(400).json({ 
        message: error.message || 'Registration failed. Please check your information and try again.' 
      });
    }

    if (!data.user) {
      console.error('[API /api/auth/register] No user data returned from Supabase');
      return res.status(500).json({ 
        message: 'Registration failed. Please try again.' 
      });
    }

    console.log(`User registration successful for ${email}, user ID: ${data.user.id}`);

    // Check if email confirmation is required
    const emailVerificationRequired = !data.session;

    return res.status(201).json({
      message: emailVerificationRequired 
        ? 'Registration successful! Please check your email to verify your account before logging in.'
        : 'Registration successful! You can now log in.',
      user: {
        id: data.user.id,
        email: data.user.email,
        name: name
      },
      emailVerificationRequired
    });

  } catch (error: any) {
    console.error('[API /api/auth/register] Unexpected error:', error);

    // Handle network or other unexpected errors
    return res.status(500).json({ 
      message: 'An unexpected error occurred during registration. Please try again.' 
    });
  }
} 