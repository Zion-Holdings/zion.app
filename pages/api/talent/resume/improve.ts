import type { NextApiRequest, NextApiResponse } from 'next';
import { chatCompletion } from '../../../../utils/ai/openai';
import { requireAuth } from '../../../../utils/security/auth';
import { sanitizeText } from '../../../../utils/sanitize';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method Not Allowed' });
    return;
  }

  try {
    const user = await requireAuth(req, res);
    const { text, roleTitle } = req.body || {};
    if (!text) {
      res.status(400).json({ error: 'Invalid input' });
      return;
    }

    const systemPrompt = 'You rewrite resume job descriptions for clarity, impact, and professionalism.';
    const userPrompt = `Rewrite the following${roleTitle ? ` for the role "${roleTitle}"` : ''}:

${text}

Guidelines:
- Use action verbs and quantify impact where reasonable.
- Keep a neutral, third-person tone.
- Keep it concise (1-3 sentences or 2-4 bullet points max).
- Return plain text only.`;

    const improvedRaw = await chatCompletion([
      { role: 'system', content: systemPrompt },
      { role: 'user', content: userPrompt },
    ]);

    const improved = sanitizeText(improvedRaw);

    const supabase = createClient(supabaseUrl, supabaseAnonKey);
    await supabase.from('resume_ai_outputs').insert({
      user_id: user.id,
      kind: 'improve',
      input: { text: sanitizeText(text), roleTitle: sanitizeText(roleTitle) },
      output: { improved },
    } as any);

    res.status(200).json({ improved });
  } catch (e: any) {
    if (!res.headersSent) {
      res.status(500).json({ error: 'Internal Server Error', detail: e?.message || 'unknown' });
    }
  }
}