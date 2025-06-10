// pages/api/sentry-test-error-api.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import * as Sentry from '@sentry/nextjs';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    // This will intentionally throw an error
    throw new Error('Sentry Test API Error: This is a test error from the API route.');
  } catch (error) {
    // Capture the error with Sentry
    Sentry.captureException(error);
    // Respond with an error status
    res.status(500).json({ error: 'Sentry Test API Error: An error was thrown and captured by Sentry.' });
  }
}
