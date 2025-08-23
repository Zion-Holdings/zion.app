// pages/api/sentry-auto-test-api.ts
// import type { NextApiResponse } from 'next'; // Removed unused import
import { withErrorLogging } from '@/utils/withErrorLogging';

function handler() {
  // This error should be automatically captured by Sentry's
  // auto-instrumentation for API routes.
  // auto-instrumentation for API routes.
  throw new Error('Sentry Auto-Instrumentation Test API Error - This is a test!');
  // The following lines will not be reached.
  // res.status(200).json({ message: 'This should not be reached.' });
}

export default withErrorLogging(handler);
