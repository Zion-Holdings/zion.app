// app/api/services/search-index/route.ts
// Returns a lean search-index projection of services (server-side only).
// Never imports the full 19 MB JSON into the client bundle.

import { NextResponse } from 'next/server';
import { getServicesSearchIndex } from '@/lib/services-data';

export async function GET() {
  try {
    const services = getServicesSearchIndex();
    return NextResponse.json(services);
  } catch (e) {
    console.error('Failed to build services search index:', e);
    return NextResponse.json([], { status: 500 });
  }
}
