import OpenAI from 'openai';

export type SupportedProvider = 'openai' | 'deepl' | 'none';

const provider: SupportedProvider = (process.env.TRANSLATION_PROVIDER as SupportedProvider) || (process.env.OPENAI_API_KEY ? 'openai' : process.env.DEEPL_API_KEY ? 'deepl' : 'none');

let openai: OpenAI | null = null;
if (provider === 'openai') {
  openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
}

async function translateWithOpenAI(text: string, to: string, from?: string): Promise<string> {
  if (!openai) throw new Error('OpenAI not configured');
  const system = 'You translate text. Respond with only the translated content without extra commentary.';
  const user = `Translate to ${to}.${from ? ` Source language is ${from}.` : ''}\n\n${text}`;
  const completion = await openai.chat.completions.create({
    model: process.env.OPENAI_MODEL || 'gpt-4o-mini',
    messages: [
      { role: 'system', content: system },
      { role: 'user', content: user },
    ],
    temperature: 0.2,
  });
  return (completion.choices?.[0]?.message?.content || '').trim();
}

async function translateWithDeepL(text: string, to: string, from?: string): Promise<string> {
  const key = process.env.DEEPL_API_KEY;
  if (!key) throw new Error('DeepL not configured');
  const params = new URLSearchParams();
  params.append('text', text);
  params.append('target_lang', to.toUpperCase());
  if (from) params.append('source_lang', from.toUpperCase());
  const res = await fetch('https://api-free.deepl.com/v2/translate', {
    method: 'POST',
    headers: {
      'Authorization': `DeepL-Auth-Key ${key}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: params.toString(),
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data?.message || 'DeepL error');
  return data?.translations?.[0]?.text || '';
}

export async function translateText(text: string, to: string, from?: string): Promise<string> {
  if (!text) return text;
  try {
    if (provider === 'openai') return await translateWithOpenAI(text, to, from);
    if (provider === 'deepl') return await translateWithDeepL(text, to, from);
    return text;
  } catch {
    return text;
  }
}

export function detectLanguageSimple(text: string): string {
  // Very simple heuristic; in production use a language detection library or model
  // Default to 'en'
  return 'en';
}