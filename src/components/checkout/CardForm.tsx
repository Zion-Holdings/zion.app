import { useState } from 'react';
import { mutate } from 'swr';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/hooks/useAuth';
import { logInfo } from '@/utils/productionLogger';
import type { PaymentIntent, StripeCardElement } from '@stripe/stripe-js';

// Helper to award points after payment
async function awardPoints(userId: string) {
  await fetch('/api/points/increment', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ userId, amount: 50, reason: 'purchase' }),
  });
  mutate('user');
}

interface CreatePaymentIntentResponse {
  clientSecret: string;
  error?: string;
}

interface Props {
  amount: number;
  onSuccess: (intent: PaymentIntent) => void;
}

export default function CardForm({ amount, onSuccess }: Props) {
  const stripe = useStripe();
  const elements = useElements();
  const { _user } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isStripeElementReady, setIsStripeElementReady] = useState(false);

  const handleSubmit = async (_e: React.FormEvent) => {
    e.preventDefault();
    if (!stripe || !elements) return;
    setError(null);
    setLoading(true);
    try {
      const res = await fetch('/api/create-payment-intent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount,
          userId: user && typeof user !== 'boolean' ? user.id : undefined,
        }),
      });
      const data: CreatePaymentIntentResponse = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to create payment');

      const result = await stripe.confirmCardPayment(
        data.clientSecret,
        {
          payment_method: {
            card: elements.getElement(CardElement) as StripeCardElement,
            billing_details: {
              email: user && typeof user !== 'boolean' ? user.email : null,
              name:
                user && typeof user !== 'boolean'
                  ? user.displayName || user.name || null
                  : null,
            },
          },
        },
        { handleActions: false },
      );

      if (result.error) throw new Error(result.error.message);

      let intent = result.paymentIntent as PaymentIntent | undefined;
      if (intent && intent.status === 'requires_action') {
        const confirmRes = await stripe.confirmCardPayment(data.clientSecret);
        if (confirmRes.error) throw new Error(confirmRes.error.message);
        intent = confirmRes.paymentIntent as PaymentIntent;
      }

      if (intent?.status === 'succeeded') {
        if (user && typeof user !== 'boolean' && user.id) {
          await awardPoints(user.id);
        }
        logInfo('Payment Success');
        onSuccess(intent);
      }
    } catch (err: unknown) {
      let message = 'An error occurred';
      if (
        err &&
        typeof err === 'object' &&
        'message' in err &&
        typeof (err as { message?: unknown }).message === 'string'
      ) {
        message = (err as { message: string }).message;
      }
      setError(message);
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
        body: JSON.stringify({
          amount,
          userId: user && typeof user !== 'boolean' ? user.id : undefined,
        }),
      });
      const data: CreatePaymentIntentResponse = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to create payment');

      const result = await stripe.confirmCardPayment(data.clientSecret, {
        payment_method: 'pm_card_visa',
      });

      if (result.error) throw new Error(result.error.message);
      const intent = result.paymentIntent as PaymentIntent | undefined;
      if (intent?.status === 'succeeded') {
        if (user && typeof user !== 'boolean' && user.id) {
          await awardPoints(user.id);
        }
        logInfo('Payment Success');
        onSuccess(intent);
      }
    } catch (err: unknown) {
      let message = 'An error occurred';
      if (
        err &&
        typeof err === 'object' &&
        'message' in err &&
        typeof (err as { message?: unknown }).message === 'string'
      ) {
        message = (err as { message: string }).message;
      }
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4"
      aria-label="Credit Card Payment Form"
    >
      <CardElement
        options={{ hidePostalCode: true }}
        onReady={() => setIsStripeElementReady(true)}
        aria-label="Credit or debit card input"
      />
      {error && (
        <p className="text-destructive text-sm" role="alert">
          {error}
        </p>
      )}
      <Button
        type="submit"
        disabled={!stripe || loading || !isStripeElementReady}
        className="w-full"
        aria-busy={loading}
        aria-label={`Pay $${amount.toFixed(2)}`}
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
          aria-label="Pay with test card 4242-4242-4242-4242"
        >
          Pay with test card 4242-4242-4242-4242
        </Button>
      )}
    </form>
  );
}
