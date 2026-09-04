import { NextResponse } from 'next/server';

export const dynamic = "force-static";

export async function GET(request: Request) {
  // Handle canceled payment redirect
  const baseUrl = process.env.APP_URL || 'http://localhost:3000';
  return NextResponse.redirect(`${baseUrl}/payment-cancelled`);
}
