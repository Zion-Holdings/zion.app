import type { NextApiRequest, NextApiResponse } from 'next';

interface OpenAIMatchRequestBody {
  projectDescription?: string;
}

interface OpenAIMatchSuccessResponse {
  category: string;
  itemId: string;
  timeline: string;
  budget: {
    amount: number;
    type: string;
  };
  // Add other fields as the actual OpenAI integration is built
}

interface ErrorResponse {
  error: string;
  details?: string;
}

export default async function handler(
  req: NextApiRequest, 
  res: NextApiResponse<OpenAIMatchSuccessResponse | ErrorResponse>
) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }

  try {
    const { projectDescription } = req.body as OpenAIMatchRequestBody;
    if (!projectDescription) {
      return res.status(400).json({ error: 'projectDescription is required in the request body' });
    }

    // TODO: Integrate with OpenAI API using projectDescription
    // For now, returning placeholder data
    const placeholderData: OpenAIMatchSuccessResponse = {
      category: 'service', // Example category
      itemId: 'example-item-id-from-ai', // Example item ID
      timeline: 'flexible', // Example timeline
      budget: { amount: 1000, type: 'fixed' }, // Example budget
    };

    return res.status(200).json(placeholderData);

  } catch (err: unknown) {
    console.error('OpenAI match API error:', err);
    let errorMessage = 'Failed to generate match due to an unexpected error.';
    if (err instanceof Error) {
      errorMessage = err.message;
    }
    return res.status(500).json({ error: errorMessage });
  }
}
