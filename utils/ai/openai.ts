export type ChatMessage = { role: 'system' | 'user' | 'assistant'; content: string };

let _client: any;

export function getOpenAI() {
  if (!_client) {
    // Lazy import to avoid ESM/CommonJS issues
    const OpenAI = require('openai');
    _client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
  }
  return _client;
}

export async function chatCompletion(messages: ChatMessage[], model = process.env.OPENAI_MODEL || 'gpt-4o-mini') {
  const client = getOpenAI();
  const response = await client.chat.completions.create({
    model,
    messages,
    temperature: 0.4,
  });
  const text = response.choices?.[0]?.message?.content || '';
  return text.trim();
}