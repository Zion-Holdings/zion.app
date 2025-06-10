// pages/api/sentry-test-error-api.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import * as Sentry from '@sentry/nextjs';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    throw new Error('Sentry API Test Error - /api/sentry-test-error-api called');
  } catch (error) {
    Sentry.captureException(error);
    // Ensure the error is also logged to the console for visibility during testing if Sentry DSN is not set
    console.error("Sentry API Test Error:", error);
    res.status(500).json({ error: 'Simulated server error occurred and was captured by Sentry.' });
  }
}
