import type { NextApiRequest, NextApiResponse } from 'next';
import { AccessToken } from 'livekit-server-sdk';

const LIVEKIT_API_KEY = process.env.LIVEKIT_API_KEY || '';
const LIVEKIT_API_SECRET = process.env.LIVEKIT_API_SECRET || '';
const LIVEKIT_HOST = process.env.LIVEKIT_HOST || '';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { roomName, identity, name, audioOnly } = req.body || {};

    if (!roomName || !identity) {
      return res.status(400).json({ error: 'Missing roomName or identity' });
    }
    if (!LIVEKIT_API_KEY || !LIVEKIT_API_SECRET || !LIVEKIT_HOST) {
      return res.status(500).json({ error: 'LiveKit env vars not configured' });
    }

    const at = new AccessToken(LIVEKIT_API_KEY, LIVEKIT_API_SECRET, {
      identity: String(identity),
      name: name ? String(name) : String(identity),
      ttl: 60 * 60, // 1 hour
    });

    at.addGrant({
      roomJoin: true,
      room: String(roomName),
      canPublish: audioOnly ? false : true,
      canPublishData: true,
      canSubscribe: true,
    });

    const token = await at.toJwt();

    return res.status(200).json({
      token,
      url: LIVEKIT_HOST,
    });
  } catch (err: any) {
    console.error('Token error', err);
    return res.status(500).json({ error: 'Failed to create token' });
  }
}