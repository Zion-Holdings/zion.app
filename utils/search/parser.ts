export type SearchType = 'all' | 'talent' | 'jobs' | 'projects';

export type ParsedFilters = {
  type: SearchType;
  skills: string[];
  location?: string;
  minBudgetUsd?: number;
  maxBudgetUsd?: number;
  availability?: 'full-time' | 'part-time' | 'contract';
  keywords: string[];
};

function extractBudget(text: string): { minBudgetUsd?: number; maxBudgetUsd?: number } {
  const lower = text.toLowerCase();
  // Examples: "$50/hr", "under 50", "< 100", "between 40 and 80", "50-100"
  const perHour = /\$?\s*(\d{1,4})\s*\/?\s*hr/.exec(lower);
  if (perHour) {
    const max = parseInt(perHour[1], 10);
    return { maxBudgetUsd: max };
  }
  const under = /(under|below|less than)\s*\$?\s*(\d{1,4})/.exec(lower);
  if (under) {
    const max = parseInt(under[2], 10);
    return { maxBudgetUsd: max };
  }
  const between = /(between)\s*\$?(\d{1,4})\s*(and|to|-|–|—)\s*\$?(\d{1,4})/.exec(lower);
  if (between) {
    const min = parseInt(between[2], 10);
    const max = parseInt(between[4], 10);
    return { minBudgetUsd: min, maxBudgetUsd: max };
  }
  const range = /\$?(\d{1,4})\s*[-–—to]+\s*\$?(\d{1,4})/.exec(lower);
  if (range) {
    const min = parseInt(range[1], 10);
    const max = parseInt(range[2], 10);
    return { minBudgetUsd: min, maxBudgetUsd: max };
  }
  return {};
}

function extractAvailability(text: string): ParsedFilters['availability'] | undefined {
  const lower = text.toLowerCase();
  if (/(full\s*-?\s*time)/.test(lower)) return 'full-time';
  if (/(part\s*-?\s*time)/.test(lower)) return 'part-time';
  if (/(contract|freelance)/.test(lower)) return 'contract';
  return undefined;
}

function extractType(text: string): SearchType {
  const lower = text.toLowerCase();
  if (/(talent|experts?|developers?|engineers?|designers?|freelancers?)/.test(lower)) return 'talent';
  if (/(jobs?|roles?|openings?|hiring)/.test(lower)) return 'jobs';
  if (/(projects?|gigs?)/.test(lower)) return 'projects';
  return 'all';
}

function extractLocation(text: string): string | undefined {
  const lower = text.toLowerCase();
  // Simple heuristic e.g., "in latam", "in berlin", "remote"
  const inMatch = /in\s+([a-zA-Z\s\-]+)$/.exec(lower) || /in\s+([a-zA-Z\s\-]+)[,.\s]/.exec(lower);
  if (inMatch) return inMatch[1].trim();
  if (/remote/.test(lower)) return 'remote';
  return undefined;
}

const COMMON_SKILLS = [
  'react', 'next.js', 'node', 'typescript', 'javascript', 'python', 'aws', 'gcp', 'azure', 'kubernetes', 'devops', 'docker', 'terraform', 'rag', 'langchain', 'openai', 'nlp', 'pytorch', 'rust', 'postgresql'
];

function extractSkills(text: string): string[] {
  const lower = text.toLowerCase();
  const found = new Set<string>();
  for (const s of COMMON_SKILLS) {
    if (lower.includes(s.toLowerCase())) found.add(s);
  }
  // rudimentary skill tokenization
  const tokens = lower.split(/[^a-z0-9+.#]/).filter(Boolean);
  for (const t of tokens) {
    if (t.length >= 3 && COMMON_SKILLS.includes(t)) found.add(t);
  }
  return Array.from(found);
}

function extractKeywords(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, ' ')
    .split(/\s+/)
    .filter(Boolean)
    .filter((w) => w.length > 2 && !['show', 'me', 'with', 'and', 'for', 'the', 'a', 'an', 'to', 'by', 'of', 'under', 'over', 'in'].includes(w));
}

export async function parseQueryToFilters(query: string): Promise<ParsedFilters> {
  const base: ParsedFilters = {
    type: extractType(query),
    skills: extractSkills(query),
    location: extractLocation(query),
    availability: extractAvailability(query),
    ...extractBudget(query),
    keywords: extractKeywords(query),
  };

  const apiKey = process.env.OPENAI_API_KEY || process.env.NEXT_PUBLIC_OPENAI_API_KEY;
  if (!apiKey) return base;

  try {
    const system = `You are Operator GPT parsing user search intent into filters for a marketplace. Return ONLY a compact JSON object with keys: type (one of: all|talent|jobs|projects), skills (array of strings), location (string|optional), minBudgetUsd (number|optional), maxBudgetUsd (number|optional), availability (full-time|part-time|contract|optional).`;
    const user = `Query: ${query}`;
    const resp = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          { role: 'system', content: system },
          { role: 'user', content: user }
        ],
        temperature: 0.1,
        response_format: { type: 'json_object' }
      })
    });
    if (!resp.ok) throw new Error(`${resp.status}`);
    const data = await resp.json();
    const content = data.choices?.[0]?.message?.content;
    const parsed = JSON.parse(content || '{}');
    return {
      type: parsed.type || base.type,
      skills: Array.isArray(parsed.skills) ? parsed.skills : base.skills,
      location: parsed.location ?? base.location,
      minBudgetUsd: parsed.minBudgetUsd ?? base.minBudgetUsd,
      maxBudgetUsd: parsed.maxBudgetUsd ?? base.maxBudgetUsd,
      availability: parsed.availability ?? base.availability,
      keywords: base.keywords,
    };
  } catch {
    return base;
  }
}