import type { NextApiRequest, NextApiResponse } from 'next';
import { askOpenAI } from '../../../utils/api/openai';
import fs from 'fs';
import path from 'path';
import { adminDb } from '../../../utils/firebase/admin';

const ZION_FAQ = `
You are Zion's AI assistant. Be concise and helpful. Capabilities:
- Help users find talent, services, and equipment on the Zion platform
- Guide users to publish listings (talent, services, equipment)
- Answer common questions about Zion: pricing, categories, how to hire, how to list, payment and escrow overview
If a question needs human support or you are not certain, suggest "Talk to Human".
`;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { messages = [], sessionId } = req.body || {};

  try {
    const { text, model } = await askOpenAI({
      system: ZION_FAQ,
      messages,
    });

    const logEntry = {
      sessionId: sessionId || 'anon-' + Date.now(),
      messages,
      response: text,
      model,
      ts: Date.now(),
    };

    // Try Firebase first
    try {
      if (adminDb) {
        await adminDb.collection('zion_chat_logs').add(logEntry as any);
      } else {
        throw new Error('adminDb not initialized');
      }
    } catch {
      // Fallback to file
      const dir = path.join(process.cwd(), 'data', 'reports', 'chat-logs');
      fs.mkdirSync(dir, { recursive: true });
      fs.appendFileSync(path.join(dir, 'logs.ndjson'), JSON.stringify(logEntry) + '\n', 'utf8');
    }

    res.status(200).json({ text, model });
  } catch (e: any) {
    res.status(500).json({ error: e?.message || 'Failed to get response' });
  }
}