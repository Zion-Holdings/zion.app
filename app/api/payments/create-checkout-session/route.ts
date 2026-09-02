import { NextResponse } from 'next/server';
import { createCheckoutSession } from '@/lib/payments';

export async function POST(request: Request) {
  try {
    const { priceId, customerId, successUrl, cancelUrl, metadata } = await request.json();
    
    const session = await createCheckoutSession({
      priceId,
      customerId,
      successUrl,
      cancelUrl,
      metadata,
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error('Error in create-checkout-session API:', error);
    return new NextResponse(
      JSON.stringify({ error: 'Internal Server Error' }),
      { status: 500 }
    );
  }
}
