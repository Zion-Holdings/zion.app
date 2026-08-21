// app/lib/services-data.ts
// Server-side data fetching for services.
// This module ensures JSON data is read on the server only (no client-side bundle cost).
// Client components that need a *subset* of services should call getServicesSearchIndex()
// and receive only the trimmed fields they need.

import 'server-only';
import fs from 'fs';
import path from 'path';

export interface ServiceSummary {
  id: string;
  name: string;
  title: string;
  description: string;
  category: string;
  industry: string;
  icon?: string;
  features: string[];
  benefits: string[];
  pricing: Record<string, unknown>;
  popular?: boolean;
  href: string;
  url?: string;
  image?: string;
  slug?: string;
}

const DATA_ROOT = path.join(process.cwd(), 'app', 'data');

// ── Reads the full 19 MB dataset (server-only). ──────────────
export function getAllServicesFull(): ServiceSummary[] {
  const raw = fs.readFileSync(path.join(DATA_ROOT, 'servicesData.json'), 'utf8');
  const parsed = JSON.parse(raw);
  return (Array.isArray(parsed) ? parsed : parsed.services || []) as ServiceSummary[];
}

// ── Reads the 516 KB trimmed dataset (server-only). ───────────
export function getAllServicesTrimmed(): ServiceSummary[] {
  const raw = fs.readFileSync(path.join(DATA_ROOT, 'servicesData_trimmed.json'), 'utf8');
  return JSON.parse(raw) as ServiceSummary[];
}

// ── Search-index projection: only the fields a client search/filter needs. ──
export function getServicesSearchIndex(): ServiceSummary[] {
  const services = getAllServicesTrimmed();
  // Project to lean shape — pricing is often large; we keep only a single price point.
  return services.map((s) => ({
    id: s.id,
    name: s.name,
    title: s.title,
    description: s.description,
    category: s.category,
    industry: s.industry,
    icon: s.icon,
    features: s.features || [],
    benefits: s.benefits || [],
    pricing: s.pricing,
    popular: s.popular,
    href: s.href,
  }));
}

// ── Single-service lookup (used by _dynamic page). ──────────────
export function getServiceBySlug(slug: string): ServiceSummary | null {
  const services = getAllServicesFull();
  return services.find((s) => s.slug === slug || s.id === slug) || null;
}

// ── Count (for metadata / "15,000+ services" text). ──────────────
export function getServicesCount(): number {
  // Hard-coded from the full dataset size to avoid reading the 19 MB file.
  // Update this constant if the dataset grows.
  return 16321;
}
