import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';

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
      return res.status(400).json({ message: 'Missing required fields: name, email, and password are required.' });
    }

    const internalAuthServiceUrl = process.env.INTERNAL_AUTH_SERVICE_URL;
    if (!internalAuthServiceUrl) {
      console.error('INTERNAL_AUTH_SERVICE_URL is not set. Cannot forward request.');
      return res.status(500).json({ message: 'Server configuration error: Auth service URL not set.' });
    }

    // Forward the request to the Node.js authentication service
    // The actual endpoint in the Node.js service is /register as seen in server/routes/auth.js
    const authServiceEndpoint = `${internalAuthServiceUrl}/register`;

    console.log(`Forwarding registration request for ${email} to ${authServiceEndpoint}`);

    const responseFromAuthService = await axios.post(authServiceEndpoint, {
      name,
      email,
      password,
    });

    // TODO: Handle the response from the authentication service (Plan Step 3)
    // For now, just return what the auth service sent.
    // This will be refined in the next step.
    return res.status(responseFromAuthService.status).json(responseFromAuthService.data);

  } catch (error: any) {
    console.error('[API /api/auth/register] Error forwarding to auth service:', error);

    if (axios.isAxiosError(error) && error.response) {
      // If the error is from the auth service, relay its response
      console.error('Error response from auth service:', error.response.data);
      return res.status(error.response.status).json(error.response.data);
    }

    // Generic error for other issues (e.g., network error connecting to auth service)
    let message = 'An unexpected error occurred while processing the signup request.';
    if (error instanceof Error) {
        message = error.message;
    }
    return res.status(500).json({ message });
  }
}
