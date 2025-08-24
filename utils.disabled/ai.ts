import OpenAI from 'openai';

function getClient(): OpenAI | null {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) return null;
  return new OpenAI({ apiKey });
}

export async function generateText(prompt: string, system?: string): Promise<string> {
  const client = getClient();
  if (!client) {
    return `AI disabled. Mock response for prompt: ${prompt.slice(0, 120)}...`;
  }
  const resp = await client.chat.completions.create({
    model: process.env.OPENAI_MODEL || 'gpt-4o-mini',
    messages: [
      ...(system ? [{ role: 'system' as const, content: system }] : []),
      { role: 'user', content: prompt },
    ],
    temperature: 0.4,
  });
  return resp.choices?.[0]?.message?.content || '';
}