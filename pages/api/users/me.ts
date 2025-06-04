import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    res.status(200).json({ name: 'John Doe' });
  } else if (req.method === 'PUT') {
    res.status(200).json({ message: 'Update successful (mocked)' });
  } else if (req.method === 'DELETE') {
    res.status(200).json({ message: 'Delete successful (mocked)' });
  } else {
    res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
