import fs from 'fs';
import path from 'path';

export interface SolutionSummary {
  slug: string;
  title: string;
  summary: string;
  priceUSD?: number;
  tags: string[];
  status: string;
  createdAt?: string;
}

export interface SolutionDetail extends SolutionSummary {
  category?: string;
  problem?: string;
  features?: string[];
  outcomes?: string[];
  pricing?: {
    currency: string;
    model: string;
    priceUSD?: number;
    tiers?: Array<{ name: string; priceUSD: number; includes: string[] }>;
  };
  cta?: { type: string; url: string };
}

function dataDir(): string {
  return path.join(process.cwd(), 'data', 'marketplace');
}

export function readSolutionsIndex(): SolutionSummary[] {
  const idxPath = path.join(dataDir(), 'index.json');
  try {
    const raw = fs.readFileSync(idxPath, 'utf8');
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed.solutions) ? parsed.solutions : [];
  } catch {
    return [];
  }
}

export function readSolutionBySlug(slug: string): SolutionDetail | null {
  const file = path.join(dataDir(), 'solutions', `${slug}.json`);
  try {
    const raw = fs.readFileSync(file, 'utf8');
    const data = JSON.parse(raw);
    return data as SolutionDetail;
  } catch {
    return null;
  }
}