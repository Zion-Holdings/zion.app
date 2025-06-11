// pages/api/sentry-auto-test-api.ts
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // This error should be automatically captured by Sentry's
  // auto-instrumentation for API routes.
  throw new Error('Sentry Auto-Instrumentation Test API Error - This is a test!');
  // The following lines will not be reached.
  // res.status(200).json({ message: 'This should not be reached.' });
}
