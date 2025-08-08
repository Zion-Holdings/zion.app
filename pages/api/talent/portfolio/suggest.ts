import type { NextApiRequest, NextApiResponse } from 'next';
import { chatCompletion } from '../../../../utils/ai/openai';
import { requireAuth } from '../../../../utils/security/auth';
import { sanitizeText, sanitizeTags } from '../../../../utils/sanitize';
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
    const { brief } = req.body || {};
    if (!brief) {
      res.status(400).json({ error: 'Invalid input' });
      return;
    }

    const systemPrompt = 'You generate concise, compelling portfolio entries for software projects.';
    const userPrompt = `Brief: ${brief}

Return strictly valid JSON with keys: {"title": string, "summary": string, "tags": string[]}.
- Title: 4-8 words, specific and professional.
- Summary: 2-3 sentences, outcome-focused.
- Tags: 5-10 concise technology or domain tags.`;

    const raw = await chatCompletion([
      { role: 'system', content: systemPrompt },
      { role: 'user', content: userPrompt },
    ]);

    let parsed: any = {};
    try { parsed = JSON.parse(raw); } catch {
      parsed = { title: raw.slice(0, 80), summary: raw, tags: [] };
    }

    const title = sanitizeText(parsed.title).slice(0, 80);
    const summary = sanitizeText(parsed.summary);
    const tags = sanitizeTags(parsed.tags).slice(0, 10);

    const supabase = createClient(supabaseUrl, supabaseAnonKey);
    await supabase.from('resume_ai_outputs').insert({
      user_id: user.id,
      kind: 'portfolio_suggest',
      input: { brief: sanitizeText(brief) },
      output: { title, summary, tags },
    } as any);

    res.status(200).json({ title, summary, tags });
  } catch (e: any) {
    if (!res.headersSent) {
      res.status(500).json({ error: 'Internal Server Error', detail: e?.message || 'unknown' });
    }
  }
}