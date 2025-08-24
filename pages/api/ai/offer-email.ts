import type { NextApiRequest, NextApiResponse } from 'next';
import { authenticateRequest } from '@/utils/auth';
import { generateText } from '@/utils/ai';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const method = (req.method || 'POST').toUpperCase();
  if (method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const auth = authenticateRequest(req, false);
  if (!auth.ok) return res.status(401).json({ error: auth.error });

  const { candidateName, roleTitle, compensation, startDate, companyName, notes } = req.body || {};
  const prompt = `Draft a professional, friendly job offer email.\n` +
    `Candidate: ${candidateName || 'Candidate'}\n` +
    `Role: ${roleTitle || 'Software Engineer'}\n` +
    `Compensation: ${compensation || 'Competitive'}\n` +
    `Start Date: ${startDate || 'TBD'}\n` +
    `Company: ${companyName || 'Your Company'}\n` +
    `Notes: ${notes || ''}\n` +
    `Include signature and next steps.`;

  const text = await generateText(prompt, 'You are a recruiting ops specialist with excellent writing skills.');
  return res.status(200).json({ email: text });
}