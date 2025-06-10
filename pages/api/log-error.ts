import type { NextApiRequest, NextApiResponse } from 'next';
import logErrorHandler from '../../api/log-error';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  return logErrorHandler(req, res);
}
