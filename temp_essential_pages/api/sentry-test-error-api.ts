// pages/api/sentry-test-error-api.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import * as Sentry from '@sentry/nextjs';
import { withErrorLogging } from '@/utils/withErrorLogging';

if (process.env.NODE_ENV === 'development') {
  // Log the DSN during development to verify it's being read by the function
  // eslint-disable-next-line no-console
  console.log('SENTRY_DSN from API route:', process.env.SENTRY_DSN);
}

async function handler(
  _req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    // This will intentionally throw an error
    throw new Error('Sentry Test API Error');
  } catch (error) {
    // Capture the error with Sentry
    Sentry.captureException(error);
    // Respond with an error status and consistent message
    res.status(500).json({ error: 'Sentry Test API Error' });
  }
}

export default withErrorLogging(handler);
