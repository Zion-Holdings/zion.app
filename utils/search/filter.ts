import type { ParsedFilters } from './parser';
import { TALENT_PROFILES } from '../../data/talent';
import type { TalentProfile } from '../../data/talent';

export type AccessLevel = 'public' | 'member' | 'admin';

export type SearchResult = {
  type: 'talent' | 'job' | 'project';
  id: string;
  slug?: string;
  title: string;
  subtitle?: string;
  location?: string;
  tags: string[];
  hourlyRateUsd?: number;
  availability?: 'full-time' | 'part-time' | 'contract';
  verified?: boolean;
  visibility?: AccessLevel;
  description?: string;
  relevance: number;
};

function computeRelevanceScore(text: string, keywords: string[], weight = 1): number {
  if (!keywords.length) return 0;
  const lower = text.toLowerCase();
  let score = 0;
  for (const k of keywords) {
    if (lower.includes(k.toLowerCase())) score += 1 * weight;
  }
  return score;
}

function computeSkillOverlap(skills: string[], wanted: string[]): number {
  const set = new Set(skills.map((s) => s.toLowerCase()));
  let score = 0;
  for (const w of wanted) if (set.has(w.toLowerCase())) score += 2;
  return score;
}

function budgetScore(candidate?: number, min?: number, max?: number): number {
  if (!candidate) return 0;
  let score = 0;
  if (max && candidate <= max) score += 1.5;
  if (min && candidate >= min) score += 0.5;
  return score;
}

function availabilityMatches(candidate?: string, requested?: string): boolean {
  if (!requested) return true;
  if (!candidate) return false;
  return candidate.toLowerCase() === requested.toLowerCase();
}

function passesRls(visibility: AccessLevel | undefined, access: AccessLevel): boolean {
  const level = visibility || 'public';
  const order: AccessLevel[] = ['public', 'member', 'admin'];
  return order.indexOf(access) >= order.indexOf(level);
}

export function searchAll(filters: ParsedFilters, access: AccessLevel = 'public'): { all: SearchResult[]; talent: SearchResult[]; jobs: SearchResult[]; projects: SearchResult[] } {
  const talent: SearchResult[] = TALENT_PROFILES
    .filter((p) => availabilityMatches(p.availability, filters.availability))
    .filter((p) => {
      if (filters.location) return p.location.toLowerCase().includes(filters.location.toLowerCase());
      return true;
    })
    .filter((p) => {
      if (filters.minBudgetUsd || filters.maxBudgetUsd) {
        if (filters.minBudgetUsd && p.hourlyRateUsd < filters.minBudgetUsd) return false;
        if (filters.maxBudgetUsd && p.hourlyRateUsd > filters.maxBudgetUsd) return false;
      }
      return true;
    })
    .map<SearchResult>((p) => {
      const skillScore = computeSkillOverlap(p.skills, filters.skills);
      const textScore = computeRelevanceScore(`${p.name} ${p.title} ${p.bio}`, filters.keywords, 0.8);
      const priceScore = budgetScore(p.hourlyRateUsd, filters.minBudgetUsd, filters.maxBudgetUsd);
      const relevance = skillScore + textScore + priceScore;
      return {
        type: 'talent',
        id: p.slug,
        slug: p.slug,
        title: p.name,
        subtitle: p.title,
        location: p.location,
        tags: p.skills,
        hourlyRateUsd: p.hourlyRateUsd,
        availability: p.availability,
        verified: true,
        visibility: 'public',
        description: p.bio,
        relevance,
      };
    })
    .filter((r) => passesRls(r.visibility, access))
    .sort((a, b) => b.relevance - a.relevance);

  const jobs: SearchResult[] = [];
  const projects: SearchResult[] = [];

  const all = [...talent, ...jobs, ...projects].sort((a, b) => b.relevance - a.relevance);
  return { all, talent, jobs, projects };
}

export function suggestDidYouMean(query: string): string | null {
  // naive suggestion: if user says devops latam -> normalize to "DevOps jobs in LATAM"
  const q = query.toLowerCase();
  if (q.includes('devops') && q.includes('latam') && !q.includes('job')) return 'DevOps jobs in LATAM';
  if (q.includes('react') && q.includes('under') && q.match(/\d/)) return 'React developers under $' + (q.match(/\d{2,3}/)?.[0] || '50') + '/hr';
  return null;
}