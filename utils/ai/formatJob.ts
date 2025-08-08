import OpenAI from 'openai';
import type { FormattedJob, JobInput } from '../types/jobs';

const SYSTEM_PROMPT = `You convert internal job descriptions into external job-board-ready content. \n- Strip company-internal terms, confidential info, and proprietary jargon.\n- Optimize clarity, inclusivity, and candidate conversion.\n- Extract: title, skills (list), summary (concise), tags (5-10 relevant), and produce a final markdown body suitable for posting.\n- Keep within typical board limits: title <= 80 chars; summary <= 400 chars.\n- Prefer neutral/professional tone.\n`;

function naiveExtract(job: JobInput): FormattedJob {
  const text = job.internalDescription || '';
  const firstLine = (text.split('\n')[0] || '').trim();
  const title = job.internalTitle || firstLine.slice(0, 80) || 'Software Engineer';

  const skills = Array.from(
    new Set(
      (text.match(/\b(JavaScript|TypeScript|React|Node|Go|Python|AWS|GCP|Azure|Docker|Kubernetes|SQL|NoSQL|GraphQL|CI\/CD|Terraform)\b/gi) || [])
        .map((s) => s.trim())
    )
  ).slice(0, 10);

  const summary = (text.replace(/\s+/g, ' ').slice(0, 380) + (text.length > 380 ? '…' : '')) || 'Exciting role with impact.';

  const tags = Array.from(new Set([...(skills as string[]), job.remote ? 'Remote' : '', job.employmentType || 'Full-time']))
    .filter(Boolean)
    .slice(0, 10) as string[];

  const markdown = `# ${title}\n\n${summary}\n\n## Responsibilities\n- Describe the role\n\n## Requirements\n- ${skills.join('\n- ')}\n\n## About\n- Public, candidate-friendly overview only.`;

  return { title, summary, skills, tags, markdown };
}

export async function formatJobForExternalBoards(job: JobInput): Promise<FormattedJob> {
  try {
    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      return naiveExtract(job);
    }

    const client = new OpenAI({ apiKey });
    const userPrompt = `Internal Job Description:\n\n${job.internalDescription}\n\nMetadata:\n- Internal Title: ${job.internalTitle || ''}\n- Location: ${job.location || ''}\n- Employment: ${job.employmentType || ''}\n- Remote: ${job.remote ? 'Yes' : 'No'}\n`;

    const response = await client.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: SYSTEM_PROMPT },
        { role: 'user', content: userPrompt },
      ],
      response_format: { type: 'json_object' },
      temperature: 0.2,
    });

    const content = response.choices?.[0]?.message?.content || '';
    const parsed = JSON.parse(content || '{}');

    const title: string = parsed.title || job.internalTitle || 'Software Engineer';
    const summary: string = parsed.summary || '';
    const skills: string[] = Array.isArray(parsed.skills) ? parsed.skills : [];
    const tags: string[] = Array.isArray(parsed.tags) ? parsed.tags : [];
    const markdown: string = parsed.markdown || '';

    if (!title || !markdown) {
      return naiveExtract(job);
    }

    return { title, summary, skills, tags, markdown };
  } catch (error) {
    return naiveExtract(job);
  }
}