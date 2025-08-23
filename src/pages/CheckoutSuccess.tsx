"use client";
import React, { useEffect, useState } from 'react';
import * as NextNavigation from 'next/navigation';
import Link from 'next/link';
import {logErrorToProduction} from '@/utils/productionLogger';


interface Session {
  id: string;
  amount_total?: number | null;
  currency?: string | null;
  customer_details?: { email?: string | null; name?: string | null } | null;
}

export default function CheckoutSuccess() {
  const searchParams = NextNavigation.useSearchParams();
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    if (!searchParams) return;
    const sessionId = searchParams.get('session_id');
    if (!sessionId) return;

    fetch('/api/webhook', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ sessionId }),
    })
      .then(res => res.json())
      .then(data => setSession(data.session as Session))
      .catch(err => logErrorToProduction('Failed to load session', { data: err }));
  }, [searchParams]);

  if (!session) {
    return (
      <div className="container max-w-2xl py-10">
        <p>Loading order...</p>
      </div>
    );
  }

  return (
    <div className="container max-w-2xl py-10 space-y-4">
      <h1 className="text-3xl font-bold" data-testid="payment-success-message">Thank you for your purchase!</h1>
      <div>
        <p><strong>Order ID:</strong> {session.id}</p>
        {session.customer_details?.email && (
          <p><strong>Email:</strong> {session.customer_details.email}</p>
        )}
        {typeof session.amount_total === 'number' && (
          <p>
            <strong>Total:</strong>{' '}
            {session.currency?.toUpperCase()} {(session.amount_total / 100).toFixed(2)}
          </p>
        )}
      </div>
      <Link href="/orders" className="text-zion-purple underline">
        View Orders
      </Link>
    </div>
  );
}
