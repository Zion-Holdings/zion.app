// Auth0 v4.x no longer uses handleAuth - authentication is handled via middleware
// This file is maintained for compatibility but redirects to the middleware-based auth
import { NextApiRequest, NextApiResponse } from 'next';

console.log('Auth0 API handler loaded - Environment check:', {
  AUTH0_SECRET: process.env.AUTH0_SECRET ? 'SET' : 'NOT SET',
  AUTH0_BASE_URL: process.env.AUTH0_BASE_URL ? process.env.AUTH0_BASE_URL : 'NOT SET',
  AUTH0_ISSUER_BASE_URL: process.env.AUTH0_ISSUER_BASE_URL ? process.env.AUTH0_ISSUER_BASE_URL : 'NOT SET',
  AUTH0_CLIENT_ID: process.env.AUTH0_CLIENT_ID ? 'SET' : 'NOT SET',
  AUTH0_CLIENT_SECRET: process.env.AUTH0_CLIENT_SECRET ? 'SET' : 'NOT SET'
});

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log('Auth0 API route accessed:', {
    url: req.url,
    method: req.method,
    query: req.query
  });

  // In Auth0 v4.x, authentication routes are handled by middleware
  // This should not be called if middleware is properly configured
  return res.status(404).json({ 
    error: 'Auth0 v4.x uses middleware-based authentication. Check middleware configuration.',
    message: 'This endpoint is deprecated in v4.x'
  });
} 