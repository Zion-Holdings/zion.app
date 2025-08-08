import type { NextApiRequest, NextApiResponse } from 'next';
import { listVendors } from '../../../utils/vendor-store';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const vendors = listVendors();
  res.status(200).json({ vendors });
}