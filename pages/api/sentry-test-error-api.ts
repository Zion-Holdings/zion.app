// pages/api/sentry-test-error-api.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import * as Sentry from '@sentry/nextjs';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    // This will intentionally throw an error
    throw new Error('Sentry Test API Error');
  } catch (error) {
    // Capture the error with Sentry
    Sentry.captureException(error);
    // Respond with an error status
    res.status(500).json({ error: 'Sentry Test API Error' });
    // Ensure the event is sent before the function exits (important for Netlify)
    await Sentry.flush(2000);
  }
}
