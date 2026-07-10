import { NextResponse } from 'next/server';
export const dynamic = 'force-static';
export async function GET() {
  const url = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://ziontechgroup.com';
  return NextResponse.redirect(new URL('/services/identity-access-management/', url), { headers: { 'Cache-Control': 'public, max-age=600' } });
}
