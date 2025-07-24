import { Server as SocketIOServer } from 'socket.io';
import { NextApiRequest, NextApiResponse } from 'next';

// Store active connections
const connections = new Map();

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET' && req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Mock API response
  res.status(200).json({
    message: 'API endpoint working',
    endpoint: 'socket',
    method: req.method,
    timestamp: new Date().toISOString()
  });
}