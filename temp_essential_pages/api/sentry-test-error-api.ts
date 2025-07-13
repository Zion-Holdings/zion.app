// pages/api/sentry-test-error-api.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import * as Sentry from '@sentry/nextjs';
import { withErrorLogging } from '@/utils/withErrorLogging';

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
