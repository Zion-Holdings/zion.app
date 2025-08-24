import fs from 'fs';
import path from 'path';

export type ServiceItem = {
  slug: string;
  name: string;
  description?: string;
  category?: string;
  priceRangeUSD?: [number, number];
  href: string;
  source: 'data' | 'page' | 'json';
};

export type CapabilityItem = {
  slug: string;
  name: string;
  href: string;
  scope: 'api' | 'admin-api';
};

export type FeaturePageItem = {
  slug: string;
  name: string;
  href: string;
};

function toTitleCaseFromSlug(slug: string): string {
  return slug
    .replace(/[-_]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

function readJsonFileSafe<T = unknown>(filePath: string): T | null {
  try {
    const raw = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(raw) as T;
  } catch {
    return null;
  }
}

export async function discoverServices(cwd: string = process.cwd()): Promise<ServiceItem[]> {
  const results: ServiceItem[] = [];

  // 1) From structured data file
  const servicesDataPath = path.join(cwd, 'data', 'services', 'services.json');
  if (fs.existsSync(servicesDataPath)) {
    const items = readJsonFileSafe<Array<any>>(servicesDataPath) || [];
    for (const item of items) {
      if (!item?.slug) continue;
      results.push({
        slug: String(item.slug),
        name: String(item.name || toTitleCaseFromSlug(String(item.slug))),
        description: item.description ? String(item.description) : undefined,
        category: item.category ? String(item.category) : undefined,
        priceRangeUSD: Array.isArray(item.priceRangeUSD) && item.priceRangeUSD.length === 2
          ? [Number(item.priceRangeUSD[0]), Number(item.priceRangeUSD[1])] as [number, number]
          : undefined,
        href: `/services/${item.slug}`,
        source: 'data',
      });
    }
  }

  // 2) From JSON descriptors inside pages/services
  const pagesServicesDir = path.join(cwd, 'pages', 'services');
  if (fs.existsSync(pagesServicesDir)) {
    const entries = fs.readdirSync(pagesServicesDir);
    for (const entry of entries) {
      const full = path.join(pagesServicesDir, entry);
      const stat = fs.statSync(full);
      if (stat.isFile() && entry.endsWith('.json')) {
        const json = readJsonFileSafe<any>(full);
        const slug = String(json?.slug || path.basename(entry, '.json'));
        const name = String(json?.name || toTitleCaseFromSlug(slug));
        results.push({
          slug,
          name,
          description: json?.description,
          category: json?.category,
          priceRangeUSD: Array.isArray(json?.priceRangeUSD) && json.priceRangeUSD.length === 2
            ? [Number(json.priceRangeUSD[0]), Number(json.priceRangeUSD[1])] as [number, number]
            : undefined,
          href: `/services/${slug}`,
          source: 'json',
        });
      }
    }

    // 3) From TSX pages under pages/services
    for (const entry of entries) {
      const full = path.join(pagesServicesDir, entry);
      const stat = fs.statSync(full);
      if (stat.isFile() && entry.endsWith('.tsx') && entry !== 'index.tsx') {
        const slug = path.basename(entry, '.tsx');
        const already = results.find((r) => r.slug === slug);
        if (!already) {
          results.push({
            slug,
            name: toTitleCaseFromSlug(slug),
            href: `/services/${slug}`,
            source: 'page',
          });
        }
      }
    }
  }

  // De-duplicate by slug, preferring the most detailed (data > json > page)
  const order = { data: 3, json: 2, page: 1 } as const;
  const bySlug = new Map<string, ServiceItem>();
  for (const item of results) {
    const prev = bySlug.get(item.slug);
    if (!prev) {
      bySlug.set(item.slug, item);
      continue;
    }
    if (order[item.source] > order[prev.source]) {
      bySlug.set(item.slug, { ...prev, ...item });
    } else if (order[item.source] === order[prev.source]) {
      // Merge details if same priority
      bySlug.set(item.slug, { ...prev, ...item });
    }
  }

  return Array.from(bySlug.values()).sort((a, b) => a.name.localeCompare(b.name));
}

export async function discoverApiCapabilities(cwd: string = process.cwd()): Promise<CapabilityItem[]> {
  const results: CapabilityItem[] = [];
  const apiDir = path.join(cwd, 'pages', 'api');
  if (!fs.existsSync(apiDir)) return results;

  function walk(dir: string, baseHrefParts: string[] = []) {
    const entries = fs.readdirSync(dir);
    for (const entry of entries) {
      const full = path.join(dir, entry);
      const stat = fs.statSync(full);
      if (stat.isDirectory()) {
        walk(full, [...baseHrefParts, entry]);
      } else if (stat.isFile() && (entry.endsWith('.ts') || entry.endsWith('.tsx') || entry.endsWith('.js'))) {
        const nameNoExt = entry.replace(/\.(ts|tsx|js)$/i, '');
        // Skip index files at root of a folder; we will link to folder as a route
        const slug = [...baseHrefParts, nameNoExt].join('/');
        const href = `/api/${slug}`;
        const scope: CapabilityItem['scope'] = slug.startsWith('admin/') ? 'admin-api' : 'api';
        results.push({
          slug,
          name: toTitleCaseFromSlug(slug.replace(/^admin\//, '')),
          href,
          scope,
        });
      }
    }
  }

  walk(apiDir);
  // De-dupe and sort
  const bySlug = new Map<string, CapabilityItem>();
  for (const cap of results) bySlug.set(cap.slug, cap);
  return Array.from(bySlug.values()).sort((a, b) => a.name.localeCompare(b.name));
}

export async function discoverFeaturePages(cwd: string = process.cwd()): Promise<FeaturePageItem[]> {
  const results: FeaturePageItem[] = [];
  const pagesDir = path.join(cwd, 'pages');
  if (!fs.existsSync(pagesDir)) return results;

  const excludeFiles = new Set<string>(['_app.tsx', '_document.tsx', 'index.tsx']);
  const excludeDirs = new Set<string>(['api', 'services', 'automation', 'auto', 'auth', 'admin', 'chat-content', 'category', 'blog', 'products', 'talent']);

  const entries = fs.readdirSync(pagesDir);
  for (const entry of entries) {
    const full = path.join(pagesDir, entry);
    const stat = fs.statSync(full);
    if (stat.isFile() && entry.endsWith('.tsx') && !excludeFiles.has(entry)) {
      const slug = entry.replace(/\.tsx$/i, '');
      results.push({ slug, name: toTitleCaseFromSlug(slug), href: `/${slug}` });
    } else if (stat.isDirectory() && !excludeDirs.has(entry)) {
      // Link to folder index if exists
      const indexFile = path.join(full, 'index.tsx');
      if (fs.existsSync(indexFile)) {
        results.push({ slug: entry, name: toTitleCaseFromSlug(entry), href: `/${entry}` });
      }
    }
  }

  // Sort by name
  return results.sort((a, b) => a.name.localeCompare(b.name));
}