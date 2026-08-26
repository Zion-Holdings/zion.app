# Stripe Payment Quick Reference

## Component Usage
```tsx
import PaymentButton from '@/components/PaymentButton';
import PricingCard from '@/components/PricingCard';

<PaymentButton 
  priceId="price_1HmR..." 
  metadata={{ service: "myservice" }} 
/>

<PricingCard
  title="My Service"
  price="$29/month"
  priceId="price_1HmR..."
  features=["Feature 1", "Feature 2"]
/>
```

## API Endpoints
- POST /api/payments/create-checkout-session
- POST /api/payments/webhook
- GET /api/payments/success
- GET /api/payments/cancel

## Environment Variables
```env
STRIPE_PUBLIC_KEY=pk_live_...
STRIPE_SECRET_KEY=sk_live_...
# Optional:
STRIPE_WEBHOOK_SECRET=whsec_...
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

## Stripe Dashboard Setup
1. Products → Create Product
2. Prices → Create Price (one-time or subscription)
3. Developers → Webhooks → Add endpoint: /api/payments/webhook
4. Developers → API keys → Get publishable & secret keys
