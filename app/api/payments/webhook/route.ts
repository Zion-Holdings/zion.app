import { NextResponse } from 'next/server';
import { handleWebhook } from '@/lib/payments';

export async function POST(request: Request) {
  try {
    const response = await handleWebhook(request);
    return response;
  } catch (error) {
    console.error('Error in webhook API:', error);
    return new NextResponse(
      JSON.stringify({ error: 'Internal Server Error' }),
      { status: 500 }
    );
  }
}
