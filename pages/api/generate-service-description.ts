import type { NextApiRequest, NextApiResponse } from 'next';
import OpenAI from 'openai';

export type GenerateServiceDescriptionRequest = {
  title: string;
  keyFeatures: string[];
  targetAudience: string;
  additionalNotes?: string;
  tone?: 'professional' | 'friendly' | 'persuasive' | 'technical';
};

export type GenerateServiceDescriptionResponse = {
  description: string;
};

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<GenerateServiceDescriptionResponse | { error: string }>
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { title, keyFeatures, targetAudience, additionalNotes, tone } = req.body as GenerateServiceDescriptionRequest;

  if (!process.env.OPENAI_API_KEY) {
    return res.status(500).json({ error: 'OpenAI API key not configured' });
  }

  if (!title || !Array.isArray(keyFeatures) || keyFeatures.length === 0 || !targetAudience) {
    return res.status(400).json({ error: 'Missing required fields: title, keyFeatures, targetAudience' });
  }

  try {
    const toneInstruction = tone ? `Write in a ${tone} tone.` : 'Write in a professional, clear tone.';

    const prompt = `You are a marketing copy expert. Given the following service inputs, write a polished, compelling, and detailed service description suitable for a website service page.

Service Title: ${title}
Target Audience: ${targetAudience}
Key Features:
- ${keyFeatures.join('\n- ')}
${additionalNotes ? `Additional Notes: ${additionalNotes}` : ''}

${toneInstruction}

Requirements:
- 2-3 sentence hook opening that addresses audience needs
- 3-5 concise sections with bolded headings (e.g., What You Get, How It Works, Why Choose Us, Deliverables, Timeline)
- Use clear, benefit-focused language
- End with a short call to action`;

    // Using Responses API for modern SDK
    const response = await openai.responses.create({
      model: 'gpt-4o-mini',
      input: prompt,
      temperature: 0.7,
    });

    let description = '';
    const output = response.output?.[0];
    if (output && output.type === 'message') {
      // Aggregate all text parts from the first message
      description = output.content
        .filter((c) => c.type === 'output_text')
        .map((c: any) => c.text)
        .join('\n');
    }

    if (!description) {
      // Fallback to top-level text if available
      // @ts-ignore
      description = (response as any).content?.[0]?.text || 'Unable to generate description at this time.';
    }

    return res.status(200).json({ description });
  } catch (error: any) {
    console.error('OpenAI generation error:', error);
    return res.status(500).json({ error: 'Failed to generate description' });
  }
}