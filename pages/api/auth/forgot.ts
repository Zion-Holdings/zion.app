import type { NextApiRequest, NextApiResponse } from next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== GET' && req.method !== POST') {
    res.status(405).end();
    return;
  }
  // TODO: Implement forgot password logic here
  res.status(200).json({ message: Forgot endpoint placeholder' });
}
