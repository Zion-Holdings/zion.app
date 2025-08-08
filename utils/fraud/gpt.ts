import { GptClassification, MonitoredSource } from './types';

export async function classifyWithGPT(text: string, source: MonitoredSource): Promise<GptClassification> {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    const lower = text.toLowerCase();
    const looksDanger = /(cashapp|paypal\.me|venmo\.com|wa\.me|t\.me|whatsapp|telegram|western union|gift card|crypto only|outside payment)/.test(lower);
    return {
      label: looksDanger ? 'DANGEROUS' : 'SUSPICIOUS',
      reason: looksDanger ? 'Heuristic fallback matched high-risk terms' : 'Heuristic fallback matched suspicious language',
      confidence: looksDanger ? 0.7 : 0.5,
    };
  }

  const { OpenAI } = await import('openai');
  const client = new OpenAI({ apiKey });

  const systemPrompt = 'You are a strict fraud/spam/phishing detector for a marketplace. Respond ONLY in strict JSON: {"label":"SAFE|SUSPICIOUS|DANGEROUS","reason":"short","confidence":0-1}. Consider off-platform payments, scammy/vague job posts, phishing, or social-engineering.';
  const userPrompt = `Source: ${source}\n\nText:\n${text}\n\nAnalyze this message for signs of fraud, spam, or phishing. Respond: SAFE / SUSPICIOUS / DANGEROUS with a short reason.`;

  const completion = await client.chat.completions.create({
    model: process.env.FRAUD_GPT_MODEL || 'gpt-4o-mini',
    messages: [
      { role: 'system', content: systemPrompt },
      { role: 'user', content: userPrompt },
    ],
    temperature: 0,
    response_format: { type: 'json_object' as const },
  });

  const content = completion.choices[0]?.message?.content ?? '{}';
  try {
    const parsed = JSON.parse(content);
    const label = (parsed.label as string)?.toUpperCase?.();
    if (label !== 'SAFE' && label !== 'SUSPICIOUS' && label !== 'DANGEROUS') {
      return { label: 'SUSPICIOUS', reason: 'Unrecognized label from GPT', confidence: 0.5 };
    }
    const confidence = typeof parsed.confidence === 'number' ? Math.max(0, Math.min(1, parsed.confidence)) : 0.6;
    return { label, reason: parsed.reason || 'No reason provided', confidence } as GptClassification;
  } catch {
    return { label: 'SUSPICIOUS', reason: 'Invalid JSON from GPT', confidence: 0.5 };
  }
}