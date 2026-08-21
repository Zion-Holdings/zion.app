// app/api/services/route.ts
import { getSearchIndex, getServicesCount } from '@/api/services';
import type { SearchIndexEntry } from '@/api/services';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const url = new URL(request.url);
  const q = url.searchParams.get('q');
  const category = url.searchParams.get('category');

  let services = getSearchIndex();

  if (q) {
    const terms = q.toLowerCase().split(/\s+/).filter(Boolean);
    services = services.filter((s) => {
      const text = `${s.title} ${s.description} ${(s.features || []).join(' ')} ${(s.benefits || []).join(' ')} ${s.category} ${s.industry}`.toLowerCase();
      return terms.every((t) => text.includes(t));
    });
  }

  if (category) {
    services = services.filter((s) => s.category === category);
  }

  return NextResponse.json({
    count: services.length,
    totalCount: getServicesCount(),
    services: services.slice(0, 100),
  });
}
