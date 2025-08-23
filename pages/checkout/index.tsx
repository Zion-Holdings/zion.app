import React, { lazy, Suspense } from 'react';
import { withAuthGuard } from '@/components/AuthGuard';

const CheckoutPage = lazy(() => import('@/pages/Checkout'));

function Checkout() {
  return (
    <Suspense fallback={<div>Loading checkout...</div>}>
      <CheckoutPage />
    </Suspense>
  );
}

export default withAuthGuard(Checkout);
