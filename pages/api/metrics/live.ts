import type { NextApiRequest, NextApiResponse } from 'next';
import { getMetricsSummary } from '../../../utils/metrics';
import { startSystemMonitor } from '../../../utils/systemMonitor';

startSystemMonitor();

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(getMetricsSummary());
}