import type { NextApiRequest, NextApiResponse } from 'next';
import getConfig from 'next/config';
import { withErrorLogging } from '@/utils/withErrorLogging';

type HealthResponse = {
  status: string;
  version: string;
  commit: string;
  timestamp: string;
  envVariables?: Record<string, string | undefined>;
};

function handler(
  req: NextApiRequest,
  res: NextApiResponse<HealthResponse | { error: string; status: string }>
) {
  if (req.method === 'GET') {
    try {
      const { publicRuntimeConfig } = getConfig();
      const envVariables: Record<string, string | undefined> = {};
      for (const key in publicRuntimeConfig) {
        if (key.startsWith('NEXT_PUBLIC_')) {
          envVariables[key] = publicRuntimeConfig[key];
        }
      }

      const version = publicRuntimeConfig.NEXT_PUBLIC_APP_VERSION || "unknown";
      if (version === "unknown") {
        console.warn("Application version not set (NEXT_PUBLIC_APP_VERSION). Defaulting to 'unknown'.");
      }
      const commit = process.env.COMMIT_REF || "unknown"; // COMMIT_REF is not a public var
      const timestamp = new Date().toISOString();
      res.status(200).json({ status: 'ok', version, commit, timestamp, envVariables });
    } catch (error) {
      console.error('Failed to retrieve health information:', error);
      res.status(500).json({ error: 'Failed to retrieve health information.', status: 'error' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

export default withErrorLogging(handler);
