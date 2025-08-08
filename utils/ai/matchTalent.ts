import OpenAI from 'openai';
import { JobSubmission, NormalizedJobProfile } from '../types/job';
import { TALENT_PROFILES, TalentProfile } from '../../data/talent';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY || '' });

export async function normalizeJobWithAI(job: JobSubmission): Promise<NormalizedJobProfile> {
  const systemPrompt = `You normalize tech skill tags. Convert variants to canonical forms (e.g., "node js", "NodeJS" => "Node.js"). Extract 3-7 key requirements.`;
  const user = {
    title: job.title,
    description: job.description,
    requiredSkills: job.requiredSkills,
    category: job.category,
    budget: job.budget,
    timeline: job.timeline,
  };

  try {
    const resp = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      temperature: 0.2,
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: JSON.stringify(user) },
      ],
      response_format: { type: 'json_object' },
    });
    const content = resp.choices?.[0]?.message?.content || '{}';
    const parsed = JSON.parse(content);
    const normalized: NormalizedJobProfile = {
      title: job.title,
      normalizedSkills: Array.isArray(parsed.normalizedSkills) ? parsed.normalizedSkills : job.requiredSkills,
      keyRequirements: Array.isArray(parsed.keyRequirements) ? parsed.keyRequirements : [],
      category: job.category,
      budget: job.budget,
      timeline: job.timeline,
    };
    return normalized;
  } catch (err) {
    const fallback: NormalizedJobProfile = {
      title: job.title,
      normalizedSkills: job.requiredSkills.map(s => canonicalizeSkill(s)),
      keyRequirements: extractKeywordRequirements(job.description),
      category: job.category,
      budget: job.budget,
      timeline: job.timeline,
    };
    return fallback;
  }
}

export function buildMatchPrompt(job: NormalizedJobProfile, talents: TalentProfile[]): string {
  return [
    'Based on this job description and required skills, identify the top 5 matching talent profiles from the database. Consider experience, skill tags, availability, and hourly rate.',
    '',
    'Job Profile JSON:',
    JSON.stringify(job, null, 2),
    '',
    'Talent Profiles JSON:',
    JSON.stringify(talents.map(t => ({
      slug: t.slug,
      title: t.title,
      skills: t.skills,
      availability: t.availability,
      hourlyRateUsd: t.hourlyRateUsd,
    })), null, 2),
    '',
    'Return strictly JSON with { matches: Array<{ slug: string; score: number }> }',
  ].join('\n');
}

export async function rankTalentsWithAI(job: NormalizedJobProfile): Promise<{ slug: string; score: number }[]> {
  const prompt = buildMatchPrompt(job, TALENT_PROFILES);
  try {
    const resp = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      temperature: 0.1,
      messages: [
        { role: 'system', content: 'You are a precise ranking engine that outputs strict JSON.' },
        { role: 'user', content: prompt },
      ],
      response_format: { type: 'json_object' },
    });
    const content = resp.choices?.[0]?.message?.content || '{}';
    const parsed = JSON.parse(content);
    if (Array.isArray(parsed.matches)) {
      return parsed.matches
        .filter((m: any) => m && typeof m.slug === 'string' && typeof m.score === 'number')
        .slice(0, 5);
    }
  } catch (e) {}

  return scoreTalentsLocally(job, TALENT_PROFILES).slice(0, 5);
}

function scoreTalentsLocally(job: NormalizedJobProfile, talents: TalentProfile[]): { slug: string; score: number }[] {
  const jobSkills = new Set(job.normalizedSkills.map(s => canonicalizeSkill(s)));
  const maxHourly = job.budget?.hourlyMax ?? Infinity;

  const scored = talents.map(t => {
    const skills = new Set(t.skills.map(canonicalizeSkill));
    let overlap = 0;
    Array.from(skills).forEach((s) => { if (jobSkills.has(s)) overlap++; });
    const overlapScore = overlap / Math.max(1, jobSkills.size);

    const rateScore = t.hourlyRateUsd <= maxHourly ? 1 : Math.max(0, 1 - (t.hourlyRateUsd - maxHourly) / (maxHourly || t.hourlyRateUsd || 1));

    const availabilityScore = job.timeline?.toLowerCase().includes('full')
      ? (t.availability === 'full-time' ? 1 : 0.5)
      : 1;

    const score = 0.6 * overlapScore + 0.25 * rateScore + 0.15 * availabilityScore;
    return { slug: t.slug, score: Number(score.toFixed(3)) };
  });

  return scored.sort((a, b) => b.score - a.score);
}

function canonicalizeSkill(skill: string): string {
  const s = skill.trim().toLowerCase();
  if (['node', 'nodejs', 'node js', 'node-js'].includes(s)) return 'Node.js';
  if (['typescript', 'ts'].includes(s)) return 'TypeScript';
  if (['python', 'py'].includes(s)) return 'Python';
  if (['react', 'reactjs', 'react.js'].includes(s)) return 'React';
  if (['openai', 'gpt', 'chatgpt'].includes(s)) return 'OpenAI';
  if (['langchain', 'lang chain'].includes(s)) return 'LangChain';
  if (['postgres', 'postgresql'].includes(s)) return 'PostgreSQL';
  return skill
    .replace(/\s+/g, ' ')
    .trim()
    .split(' ')
    .map((w, i) => (i === 0 ? w[0]?.toUpperCase() + w.slice(1) : w))
    .join(' ');
}

function extractKeywordRequirements(description: string): string[] {
  if (!description) return [];
  const tokens = description
    .split(/[^a-zA-Z0-9\-\+\.]/)
    .map(t => t.trim())
    .filter(Boolean);
  const common = new Set(['the', 'and', 'a', 'to', 'of', 'in', 'for', 'with', 'we', 'you', 'our']);
  const freq = new Map<string, number>();
  for (const t of tokens) {
    if (t.length < 2) continue;
    if (common.has(t.toLowerCase())) continue;
    freq.set(t.toLowerCase(), (freq.get(t.toLowerCase()) || 0) + 1);
  }
  return Array.from(freq.entries())
    .sort((a, b) => b[1] - a[1])
    .slice(0, 7)
    .map(([k]) => k);
}