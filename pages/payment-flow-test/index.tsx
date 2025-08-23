import { useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { useAuth } from '@/hooks/useAuth';
import { addItem } from '@/store/cartSlice';
import { MARKETPLACE_LISTINGS } from '@/data/listingData';
import {logErrorToProduction} from '@/utils/productionLogger';

export default function PaymentFlowTest() {

  const dispatch = useDispatch();
  const { isAuthenticated, user } = useAuth();
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<{
    checkout?: string;
    intent?: string;
  }>({});

  const testProducts = MARKETPLACE_LISTINGS.slice(0, 3);

  const addToCart = (p: { id: string; title: string; price: number }) => {
    dispatch(addItem({ id: p.id, title: p.title, price: p.price }));
    alert(`Added ${p.title} to cart`);
  };

  const runCheckoutSessionTest = async () => {
    setLoading(true);
    try {
      const { data } = await axios.post('/api/checkout-session', {
        cartItems: [{ title: 'Test Product', price: 1, quantity: 1 }],
        customer_email: 'test@example.com',
      });
      setResults((r) => ({
        ...r,
        checkout: data.sessionId ? 'success' : 'error',
      }));
      alert(data.sessionId ? 'Checkout session created' : 'Checkout failed');
    } catch (err) {
      logErrorToProduction('Checkout error:', { error: err });
      setResults((r) => ({ ...r, checkout: 'error' }));
      alert('Checkout session error');
    } finally {
      setLoading(false);
    }
  };

  const runPaymentIntentTest = async () => {
    setLoading(true);
    try {
      const { data } = await axios.post('/api/create-payment-intent', {
        amount: 50,
      });
      setResults((r) => ({
        ...r,
        intent: data.clientSecret ? 'success' : 'error',
      }));
      alert(
        data.clientSecret ? 'Payment intent created' : 'Payment intent failed',
      );
    } catch (err) {
      logErrorToProduction("Error:", { error: err });
      setResults((r) => ({ ...r, intent: 'error' }));
      alert('Payment intent error');
    } finally {
      setLoading(false);
    }
  };

  const envInfo = {
    NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY:
      process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
    NEXT_PUBLIC_STRIPE_TEST_MODE: process.env.NEXT_PUBLIC_STRIPE_TEST_MODE,
    STRIPE_TEST_MODE: process.env.STRIPE_TEST_MODE,
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Payment Flow Smoke Test</h1>
      <p>
        Auth status:{' '}
        {isAuthenticated ? `Logged in as ${user?.email}` : 'Not logged in'}
      </p>

      <h2>Add Test Product</h2>
      <ul>
        {testProducts.map((p) => (
          <li key={p.id} style={{ marginBottom: '8px' }}>
            {p.title} - ${(p.price ?? 0).toFixed(2)}{' '}
            <button
              onClick={() =>
                addToCart({ id: p.id, title: p.title, price: p.price ?? 0 })
              }
            >
              Add to Cart
            </button>
          </li>
        ))}
      </ul>

      <h2>API Tests</h2>
      <button onClick={runCheckoutSessionTest} disabled={loading}>
        Test /api/checkout-session
      </button>
      <span style={{ marginLeft: '8px' }}>{results.checkout}</span>
      <br />
      <button onClick={runPaymentIntentTest} disabled={loading}>
        Test /api/create-payment-intent
      </button>
      <span style={{ marginLeft: '8px' }}>{results.intent}</span>

      <h2>Environment Info</h2>
      <pre>{JSON.stringify(envInfo, null, 2)}</pre>
    </div>
  );
}
