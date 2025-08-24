import type { NextApiRequest, NextApiResponse } from 'next';
import { agendaItems } from '../../../../data/expo/agenda';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query as { id?: string };
  const item = agendaItems.find(i => i.id === id);
  if (!item) return res.status(404).send('Not found');
  const transcript = `Transcript for ${item.title} (Track: ${item.track}, Time: ${item.time})\n\n[00:00] Intro...\n[05:00] Key points...\n[15:00] Q&A...`;
  res.setHeader('Content-Type', 'text/plain');
  res.status(200).send(transcript);
}