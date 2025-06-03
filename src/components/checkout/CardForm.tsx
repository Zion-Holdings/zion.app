import { useState } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/hooks/useAuth';

interface Props {
  amount: number;
  onSuccess: (intent: any) => void;
}

export default function CardForm({ amount, onSuccess }: Props) {
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!stripe || !elements) return;
    setError(null);
    setLoading(true);
    try {
      const res = await fetch('/api/create-payment-intent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount, userId: (user && typeof user !== 'boolean' ? user.id : undefined) }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to create payment');

      const result = await stripe.confirmCardPayment(data.clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement)!,
          billing_details: {
            email: (user && typeof user !== 'boolean' ? user.email : undefined),
            name: (user && typeof user !== 'boolean' && user.user_metadata ? user.user_metadata.full_name : undefined),
          },
        },
      });

      if (result.error) throw new Error(result.error.message);
      if (result.paymentIntent?.status === 'succeeded') {
        if (user && typeof user !== 'boolean' && user.id) { // Applied safer check here
          await fetch('/api/points/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ userId: user.id, amount: -amount }), // user.id is safe here
          });
        }
        onSuccess(result.paymentIntent);
      }
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <CardElement options={{ hidePostalCode: true }} />
      {error && <p className="text-destructive text-sm">{error}</p>}
      <Button type="submit" disabled={!stripe || loading} className="w-full">
        {loading ? 'Processing...' : `Pay $${amount.toFixed(2)}`}
      </Button>
    </form>
  );
}
