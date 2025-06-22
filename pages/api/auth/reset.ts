import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  const { token, newPassword } = req.body || {};
  if (!token || !newPassword) {
    return res
      .status(400)
      .json({ message: 'Token and new password are required.' });
  }

  // Basic token check - real implementation would verify token via auth service
  if (token === 'invalid') {
    return res
      .status(400)
      .json({ message: 'Invalid or expired password reset token.' });
  }

  return res.status(200).json({ message: 'Password reset successful.' });
}
