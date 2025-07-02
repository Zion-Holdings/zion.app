import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';

import { useAuth } from '@/hooks/useAuth';
import { getStripe } from '@/utils/getStripe';
import {logErrorToProduction} from '@/utils/productionLogger';

export default function CheckoutButton({ priceId, quantity = 1 }) {

  const [loading, setLoading] = useState(false);
  const { user } = useAuth();

  const handleClick = async () => {
    setLoading(true);
    try {
      const stripe = await getStripe();
      if (!stripe) throw new Error('Stripe not loaded');

      const res = await fetch('/api/checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          priceId,
          quantity,
          customer_email: user?.email,
          successUrl: `${window.location.origin}/checkout/success`,
          cancelUrl: `${window.location.origin}/checkout/cancel`,
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to create session');

      const { error } = await stripe.redirectToCheckout({ sessionId: data.sessionId });
      if (error) logErrorToProduction('Stripe redirect error:', { data: error });
    } catch (err) {
      logErrorToProduction('Checkout error:', { data: err });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button onClick={handleClick} disabled={loading} className="w-full">
      {loading ? (
        <>
          <Loader2 className="h-4 w-4 mr-2 animate-spin" />
          Processing...
        </>
      ) : (
        'Pay with Stripe'
      )}
    </Button>
  );
}
