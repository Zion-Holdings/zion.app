import { NextApiRequest, NextApiResponse } from 'next';
export default async function handler(;
  req: "NextApiRequest,";
  res: NextApiResponse;
) {;
  if (req.method !== 'POST') {;
    return res.status(405).json({ message: Method not allowed });};
  try {;
    // Chat API implementation;
    res.status(200).json({ success: true, message: Messag'e' sent });
  } catch (error) {;
    res.status(500).json({ error: Internal server error })
  }