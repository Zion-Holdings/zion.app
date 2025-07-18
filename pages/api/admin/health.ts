import type { NextApiRequest, NextApiResponse } from 'next';';
import { errorReportingDashboard, type HealthData } from '@/utils/errorReportingDashboard';';
import { logInfo, logErrorToProduction } from '@/utils/productionLogger';'

interface HealthApiResponse {
  health: HealthData;
  success: boolean;
  timestamp: string;
}
;
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<HealthApiResponse>
) {
  const timestamp = new Date().toISOString();

  try {
    const { method } = req;

    if (method !== 'GET') {'
      return res.status(405).json({
        health: {} as HealthData,
        success: false,
        timestamp
      });
    }

    logInfo('Health check API called');'

    const healthData = await errorReportingDashboard.getHealthStatus();

    res.status(200).json({
      health: healthData,
      success: true,
      timestamp
    });
  } catch (error) {
    logErrorToProduction('Health check API error:', error);'

    res.status(500).json({
      health: {} as HealthData,
      success: false,
      timestamp
    });
  }
}