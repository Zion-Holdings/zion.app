type ExplainInput = { path: string; method: string; description?: string };

async function getOpenAI() {
  try {
    const mod = await import('openai');
    // @ts-ignore
    return mod.default ?? mod;
  } catch (e) {
    return null;
  }
}

export async function explainEndpoint(input: ExplainInput): Promise<string> {
  const OpenAI = await getOpenAI();
  if (!OpenAI) throw new Error('Optional dependency openai is not installed. Run: npm i openai');
  const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
  const prompt = `Explain the API endpoint in clear developer docs style.\n\nMethod: ${input.method}\nPath: ${input.path}\nDescription: ${input.description ?? 'N/A'}`;
  const res = await client.chat.completions.create({
    model: 'gpt-4o-mini',
    messages: [
      { role: 'system', content: 'You are a concise API documentation assistant.' },
      { role: 'user', content: prompt },
    ],
  });
  return res.choices?.[0]?.message?.content ?? '';
}

export async function generatePromptForAction(action: string, inputs: Record<string, any> = {}) {
  const OpenAI = await getOpenAI();
  if (!OpenAI) throw new Error('Optional dependency openai is not installed. Run: npm i openai');
  const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
  const res = await client.chat.completions.create({
    model: 'gpt-4o-mini',
    messages: [
      { role: 'system', content: 'Generate a single, actionable prompt a developer can paste into an AI assistant to perform the action.' },
      { role: 'user', content: `Action: ${action}\nInputs: ${JSON.stringify(inputs)}` },
    ],
  });
  return res.choices?.[0]?.message?.content ?? '';
}

export async function generateApiTest(description: string): Promise<string> {
  const OpenAI = await getOpenAI();
  if (!OpenAI) throw new Error('Optional dependency openai is not installed. Run: npm i openai');
  const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
  const res = await client.chat.completions.create({
    model: 'gpt-4o-mini',
    messages: [
      { role: 'system', content: 'Write a minimal Vitest test (TypeScript) for the described API behavior.' },
      { role: 'user', content: description },
    ],
  });
  return res.choices?.[0]?.message?.content ?? '';
}