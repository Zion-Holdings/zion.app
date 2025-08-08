import type { NextApiRequest, NextApiResponse } from 'next';
import { chatCompletion } from '../../../../utils/ai/openai';
import { requireAuth } from '../../../../utils/security/auth';
import { sanitizeText, sanitizeTags, sanitizeBullets } from '../../../../utils/sanitize';
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
    const { profileName, experiences, skills } = req.body || {};

    if (!profileName || !Array.isArray(experiences) || !Array.isArray(skills)) {
      res.status(400).json({ error: 'Invalid input' });
      return;
    }

    const systemPrompt = 'You are a professional resume writer. Produce clear, concise, quantifiable content. Return JSON with keys: summary, bullets, improved.';

    const userPrompt = `Profile Name: ${profileName}\n\nExperiences: ${JSON.stringify(experiences)}\n\nSkills: ${skills.join(', ')}\n\nInstructions: \n- Write a 2-3 sentence professional summary tailored to the skills.\n- Create 4-6 bullet points combining the strongest achievements across roles.\n- Improve any weak or verbose text in the experiences.\n- Use action verbs, quantify impact, and avoid first person.\n- Output strictly valid JSON with keys {"summary": string, "bullets": string[], "improved": Record<string,string>} and nothing else.`;

    const raw = await chatCompletion([
      { role: 'system', content: systemPrompt },
      { role: 'user', content: userPrompt },
    ]);

    let parsed: any = {};
    try { parsed = JSON.parse(raw); } catch {
      // fallback: wrap as minimal object
      parsed = { summary: raw, bullets: [], improved: {} };
    }

    const summary = sanitizeText(parsed.summary);
    const bullets = sanitizeBullets(parsed.bullets);
    const improved: Record<string, string> = {};
    if (parsed.improved && typeof parsed.improved === 'object') {
      for (const key of Object.keys(parsed.improved)) {
        improved[key] = sanitizeText(parsed.improved[key]);
      }
    }

    const supabase = createClient(supabaseUrl, supabaseAnonKey);
    await supabase.from('resume_ai_outputs').insert({
      user_id: user.id,
      kind: 'generate',
      input: { profileName: sanitizeText(profileName), experiences, skills: sanitizeTags(skills) },
      output: { summary, bullets, improved },
    } as any);

    res.status(200).json({ summary, bullets, improved });
  } catch (e: any) {
    if (!res.headersSent) {
      res.status(500).json({ error: 'Internal Server Error', detail: e?.message || 'unknown' });
    }
  }
}