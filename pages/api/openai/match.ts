export default async function handler(req: { method?: string; body?: any }, res: any) {
  if (req.method !== 'POST') {
    res.status(405).end();
    return;
  }

  try {
    const { projectDescription } = req.body || {};
    if (!projectDescription) {
      res.status(400).json({ error: 'projectDescription required' });
      return;
    }

    // TODO: Integrate with OpenAI API
    const data = {
      category: 'service',
      itemId: 'example-item',
      timeline: 'flexible',
      budget: { amount: 1000, type: 'fixed' },
    };

    res.status(200).json(data);
  } catch (err: any) {
    console.error('openai match error:', err);
    res.status(500).json({ error: 'Failed to generate match' });
  }
}
