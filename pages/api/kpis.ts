import type { NextApiRequest, NextApiResponse } from 'next';

export type KpisResponse = {
  activeUsers: number;
  gmvMonthly: number;
  mrr: number;
  burn: number;
  runwayMonths: number;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<KpisResponse>) {
  res.status(200).json({
    activeUsers: 12480,
    gmvMonthly: 1200000,
    mrr: 86400,
    burn: 62000,
    runwayMonths: 18,
  });
}