import type { NextApiRequest, NextApiResponse } from 'next';
import { withErrorLogging } from '@/utils/withErrorLogging';

function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  const { invitee = 'Guest', topic = 'Zion' } = req.body || {};

  const questions = [
    `Could you introduce yourself and tell us about your background?`,
    `What inspired you to work on ${topic}?`,
    `From a technical perspective, what challenges have you faced?`,
    `How does ${topic} change the way talent collaborates globally?`,
    `Can you share any visionary goals you have for the future?`,
    `What advice do you have for new builders in this space?`,
    `Where can listeners learn more or get involved?`
  ];

  const script = `Intro (0:00): Welcome to the Zion Podcast. Today we chat with ${invitee}.\n` +
    `Questions: \n${questions.map((q, i) => `${i + 1}. ${q}`).join('\n')}\n` +
    `Closing (14:30): Thanks for joining us! Learn more at zion.community.`;

  res.status(200).json({ questions, script });
}

export default withErrorLogging(handler);
