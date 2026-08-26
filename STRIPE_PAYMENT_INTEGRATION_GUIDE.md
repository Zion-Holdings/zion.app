# Stripe Payment Integration Guide for Zion Tech Group Services

## Overview
This guide explains how to integrate Stripe payments into any Zion Tech Group service or solution using the pre-built payment infrastructure.

## Files Created

### Backend Components
- `lib/stripe.ts` - Stripe client initialization
- `lib/payments.ts` - Payment processing logic (customers, checkout, subscriptions, webhooks)
- API Routes:
  - `app/api/payments/create-checkout-session/route.ts` - Create checkout sessions
  - `app/api/payments/webhook/route.ts` - Handle Stripe webhooks
  - `app/api/payments/success/route.ts` - Payment success handler
  - `app/api/payments/cancel/route.ts` - Payment cancellation handler

### Frontend Components
- `components/PaymentButton.tsx` - Reusable Stripe payment element
- `components/PricingCard.tsx` - Display pricing plans with payment button
- `app/payment-success/page.tsx` - Post-payment success page
- `app/payment-cancelled/page.tsx` - Payment cancellation handler

## How to Use Across Services

### 1. Using the PaymentButton Component (Recommended)

The `PaymentButton` component is the easiest way to add Stripe payments to any service.

**Import the component:**
```tsx
import PaymentButton from '@/components/PaymentButton';
```

**Use it in your service/component:**
```tsx
export default function MyService() {
  return (
    <div>
      <h2>My Zion Tech Group Service</h2>
      <p>Description of what this service offers...</p>
      
      <PaymentButton
        priceId="price_1HmRyourpriceidhere"  // ← Get this from Stripe Dashboard
        customerId="optional_customer_id"    // ← Optional: if customer exists
        successUrl="/payment-success"
        cancelUrl="/payment-cancelled"
        label="Buy Now"
        metadata={{
          service: "my-service-name",
          plan: "premium",
          // Add any custom metadata you need
        }}
      />
    </div>
  );
}
```

### 2. Using the PricingCard Component (For Displaying Options)

For services with multiple pricing options:
```tsx
import PricingCard from '@/components/PricingCard';
import PaymentButton from '@/components/PaymentButton';

export default function ServicePricing() {
  return (
    <div>
      <h2>Choose Your Plan</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <PricingCard
          title="Basic"
          price="$29/month"
          description="Perfect for getting started"
          features=["Feature 1", "Feature 2", "Email Support"]
          priceId="price_basic_monthly"
        />
        <PricingCard
          title="Pro"
          price="$99/month"
          description="Most popular"
          features=["All Basic features", "Feature 3", "Feature 4", "Priority Support"]
          priceId="price_pro_monthly"
          isPopular={true}
        />
        <PricingCard
          title="Enterprise"
          price="$299/month"
          description="For large organizations"
          features=["All Pro features", "Dedicated support", "Custom integrations", "SLA"]
          priceId="price_enterprise_monthly"
        />
      </div>
    </div>
  );
}
```

### 3. Direct API Usage (For Advanced Integration)

If you need more control, you can use the payment API directly:

**Create a checkout session:**
```tsx
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdvancedService() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handlePurchase = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/payments/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          priceId: 'price_1HmRyourpriceidhere',
          successUrl: `${process.env.NEXT_PUBLIC_APP_URL}/payment-success`,
          cancelUrl: `${process.env.NEXT_PUBLIC_APP_URL}/payment-cancelled`,
          metadata: {
            service: 'advanced-service',
            userId: 'user123',
            // Add your custom data
          }
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to create checkout session');
      }

      const { url } = await response.json();
      // Redirect to Stripe Checkout
      window.location.href = url;
    } catch (error) {
      console.error('Error initiating payment:', error);
      alert('Failed to initiate payment. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Advanced Service with Custom Payment Flow</h2>
      <button 
        onClick={handlePurchase}
        disabled={loading}
        className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
      >
        {loading ? 'Processing...' : 'Buy Now'}
      </button>
    </div>
  );
}
```

### 4. Handling Webhooks (Backend Services)

If your service needs to respond to payment events (like granting access after payment), you can use the webhook endpoint:

The webhook endpoint (`/app/api/payments/webhook/route.ts`) already handles:
- `payment_intent.succeeded`
- `checkout.session.completed`
- `invoice.payment_succeeded`

You can extend the `handleWebhook` function in `lib/payments.ts` to add custom logic for your services.

### 5. Getting Price IDs from Stripe Dashboard

1. Go to [https://dashboard.stripe.com/products](https://dashboard.stripe.com/products)
2. Create a product for your service
3. Create a price for that product (one-time or recurring)
4. Copy the Price ID (starts with `price_...`)
5. Use that Price ID in the `priceId` prop of PaymentButton or PricingCard

## Best Practices for All Services

### 1. Environment Variables
Ensure your `.env` file contains:
```env
STRIPE_PUBLIC_KEY=pk_live_your_publishable_key_here
STRIPE_SECRET_KEY=sk_live_your_secret_key_here
# Optional but recommended:
STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret_here
NEXT_PUBLIC_APP_URL=http://localhost:3000  // For production: your actual domain
```

### 2. Error Handling
All components include basic error handling. For production, consider:
- Adding more specific error messages
- Logging errors to your monitoring system
- Showing user-friendly error messages

### 3. Testing
- Use Stripe's test mode keys (`sk_test_...` and `pk_test_...`) for development
- Test with Stripe's test card numbers:
  - `4242 4242 4242 4242` (Visa)
  - `4000 0025 0000 3155` (Requires authentication)
  - See [Stripe test cards](https://stripe.com/docs/testing#cards) for more

### 4. Metadata
Use the `metadata` parameter to pass service-specific information:
```tsx
<PaymentButton
  priceId="your_price_id"
  metadata={{
    service: "your-service-name",
    userId: "current-user-id",
    plan: "selected-plan",
    timestamp: new Date().toISOString(),
    // Add any other relevant data
  }}
/>
```

## Service Integration Examples

### AI Service
```tsx
<PaymentButton
  priceId="price_ai_consultation_hourly"
  metadata={{
    service: "ai-service",
    type: "consultation",
    duration: "1-hour"
  }}
/>
```

### Micro-SaaS Product
```tsx
<PaymentButton
  priceId="price_micro_saas_subscription"
  metadata={{
    service: "micro-saas-platform",
    product: "saas-subscription",
    billing: "monthly"
  }}
/>
```

### Consulting Solution
```tsx
<PaymentButton
  priceId="price_enterprise_solution"
  metadata={{
    service: "enterprise-solutions",
    solution: "custom-ai",
    engagement: "project-based"
  }}
/>
```

## Troubleshooting

### Common Issues
1. **"Invalid API Key"**: Check that both STRIPE_PUBLIC_KEY and STRIPE_SECRET_KEY are correctly set in .env
2. **"Price not found"**: Verify the priceId exists in your Stripe Dashboard
3. **"Domain not allowed"**: Ensure your domain is registered in Stripe Dashboard > Settings > Domains
4. **Webhook not firing**: Check webhook endpoint is correctly configured in Stripe Dashboard

### Getting Help
- Stripe Documentation: https://stripe.com/docs/payments/checkout
- Test Cards: https://stripe.com/docs/testing#cards
- Error Codes: https://stripe.com/docs/error-codes

## Conclusion

With this implementation, **all Zion Tech Group services and solutions can now easily accept Stripe payments** by:
1. Importing and using the `PaymentButton` component
2. Or using the `PricingCard` component for displaying options
3. Or directly calling the payment API for custom flows

The payment system is secure, scalable, and ready to handle both one-time payments and subscriptions for any service in the Zion Tech Group ecosystem.

**To get started:**
1. Create your products and prices in Stripe Dashboard
2. Copy the Price IDs
3. Use the PaymentButton or PricingCard components in your services
4. Start accepting payments!
