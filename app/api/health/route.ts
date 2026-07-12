export const dynamic = 'force-static';
export const revalidate = 3600;

import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ ok: true, timestamp: new Date().toISOString(), service: 'zion-tech-group' });
}
