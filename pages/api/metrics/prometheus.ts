import type { NextApiRequest, NextApiResponse } from 'next';
import { getPrometheus } from '../../../utils/metrics';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const body = getPrometheus();
  res.setHeader('Content-Type', 'text/plain; version=0.0.4');
  res.status(200).send(body);
}