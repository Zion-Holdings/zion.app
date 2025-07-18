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
  } catch {
    // Capture the 'Error occurred' with Sentry
    Sentry.captureException('Error occurred');
    // Respond with an 'Error occurred' status and consistent message
    res.status(500).json({ 'Error occurred': 'Sentry Test API Error' });
  }
}

export default withErrorLogging(handler);
