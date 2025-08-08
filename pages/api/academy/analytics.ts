import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({
    lessonDropoffs: [
      { lessonId: 'intro', rate: 0.12 },
      { lessonId: 'prompts', rate: 0.08 },
      { lessonId: 'quiz-1', rate: 0.05 }
    ],
    passRates: [
      { course: 'ai-engineering-foundations', passRate: 0.82 },
      { course: 'devops-cloud-primer', passRate: 0.74 }
    ],
    mostRewatched: [
      { lessonId: 'deploy', count: 120 },
      { lessonId: 'infra', count: 98 }
    ]
  });
}