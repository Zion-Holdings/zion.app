import type { NextApiRequest, NextApiResponse } from 'next';
import type { BoardName } from '../../../../utils/types/jobs';

const boards: BoardName[] = ['LinkedIn', 'Indeed', 'StackOverflow', 'RemoteOK', 'HackerNews', 'AngelList'];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const status = boards.map((b) => ({ board: b, status: 'healthy', lastChecked: new Date().toISOString() }));
  res.status(200).json({ status });
}