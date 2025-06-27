import { useState } from 'react';
import { mutate } from 'swr';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/hooks/useAuth';
import { logInfo } from '@/utils/productionLogger';


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
  const [isStripeElementReady, setIsStripeElementReady] = useState(false);

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

      const result = await stripe.confirmCardPayment(
        data.clientSecret,
        {
          payment_method: {
            card: elements.getElement(CardElement)!,
            billing_details: {
              email: (user && typeof user !== 'boolean' ? user.email : undefined),
              name:
                user && typeof user !== 'boolean'
                  ? user.displayName || user.name
                  : undefined,
            },
          },
        },
        { handleActions: false }
      );

      if (result.error) throw new Error(result.error.message);

      let intent = result.paymentIntent;
      if (intent && intent.status === 'requires_action') {
        const confirmRes = await stripe.confirmCardPayment(data.clientSecret);
        if (confirmRes.error) throw new Error(confirmRes.error.message);
        intent = confirmRes.paymentIntent;
      }

      if (intent?.status === 'succeeded') {
        if (user && typeof user !== 'boolean' && user.id) {
          await fetch('/api/points/increment', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ userId: user.id, amount: 50, reason: 'purchase' }),
          });
          mutate('user');
        }
        logInfo('Payment Success');
        onSuccess(result.paymentIntent);
      }
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleTestPayment = async () => {
    if (!stripe) return;
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
        payment_method: 'pm_card_visa',
      });

      if (result.error) throw new Error(result.error.message);
      if (result.paymentIntent?.status === 'succeeded') {
        if (user && typeof user !== 'boolean' && user.id) {
          await fetch('/api/points/increment', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ userId: user.id, amount: 50, reason: 'purchase' }),
          });
          mutate('user');
        }
        logInfo('Payment Success');
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
      <CardElement
        options={{ hidePostalCode: true }}
        onReady={() => setIsStripeElementReady(true)}
      />
      {error && <p className="text-destructive text-sm">{error}</p>}
      <Button
        type="submit"
        disabled={!stripe || loading || !isStripeElementReady}
        className="w-full"
      >
        {loading ? 'Processing...' : `Pay $${amount.toFixed(2)}`}
      </Button>
      {process.env.NODE_ENV === 'development' && (
        <Button
          type="button"
          variant="outline"
          disabled={!stripe || loading}
          onClick={handleTestPayment}
          className="w-full"
        >
          Pay with test card 4242-4242-4242-4242
        </Button>
      )}
    </form>
  );
}
