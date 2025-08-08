import type { NextApiRequest, NextApiResponse } from 'next';
import { getServerSideTenant } from '../../../utils/tenant';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { tenant } = await getServerSideTenant({ req } as any);
  res.status(200).json({ tenant });
}