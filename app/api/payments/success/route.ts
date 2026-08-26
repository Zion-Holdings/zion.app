import { NextResponse } from 'next/server';

export const dynamic = "force-static";

export async function GET(request: Request) {
  // Handle successful payment redirect
  // You can verify the session with Stripe if needed
  // We are not using request.url or searchParams to keep it static
  const baseUrl = process.env.APP_URL || 'http://localhost:3000';
  return NextResponse.redirect(`${baseUrl}/payment-success`);
}
