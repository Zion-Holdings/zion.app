import { NextApiRequest, NextApiResponse } from 'next';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const {
      title,
      keyFeatures,
      targetAudience,
      industry,
      pricing,
      location
    } = req.body;

    if (!title || !keyFeatures) {
      return res.status(400).json({ error: 'Title and key features are required' });
    }

    const prompt = `Create a professional, compelling service description for the following service:

Service Title: ${title}
Key Features: ${keyFeatures}
Target Audience: ${targetAudience || 'Not specified'}
Industry: ${industry || 'Not specified'}
Pricing Model: ${pricing || 'Not specified'}
Service Location: ${location || 'Not specified'}

Please generate a detailed, professional service description that:
1. Starts with a compelling hook
2. Clearly explains what the service is and its benefits
3. Highlights the key features in an engaging way
4. Addresses the target audience's needs and pain points
5. Includes a call-to-action
6. Is written in a professional, trustworthy tone
7. Is between 150-300 words
8. Uses active voice and clear, concise language
9. Avoids jargon unless industry-specific terms are necessary

Format the description as a single paragraph that flows naturally and is ready to use on a website, marketing materials, or service listings.`;

    const completion = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: "You are a professional marketing copywriter specializing in service descriptions. You create compelling, professional, and conversion-focused service descriptions that help businesses attract their ideal clients."
        },
        {
          role: "user",
          content: prompt
        }
      ],
      max_tokens: 500,
      temperature: 0.7,
    });

    const description = completion.choices[0]?.message?.content?.trim();

    if (!description) {
      throw new Error('Failed to generate description');
    }

    res.status(200).json({ description });
  } catch (error) {
    console.error('Error generating service description:', error);
    res.status(500).json({ 
      error: 'Failed to generate service description',
      details: process.env.NODE_ENV === 'development' ? (error as Error).message : undefined
    });
  }
} 