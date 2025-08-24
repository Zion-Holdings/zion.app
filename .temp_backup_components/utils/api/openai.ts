import OpenAI from 'openai';

export interface AskOptions {
  system?: string;
  messages: Array<{ role: 'user' | 'system' | 'assistant'; content: string }>;
}

export async function askOpenAI({ system, messages }: AskOptions) {
  const apiKey = process.env.OPENAI_API_KEY || process.env.NEXT_PUBLIC_OPENAI_API_KEY;
  if (!apiKey) throw new Error('Missing OPENAI_API_KEY');
  const client = new OpenAI({ apiKey });
  const input = [
    ...(system ? [{ role: 'system', content: system } as any] : []),
    ...messages,
  ];
  const res = await client.responses.create({ model: 'gpt-4o-mini', input: input as any });
  const text = (res as any).output_text || '';
  return { text, model: res.model };
}