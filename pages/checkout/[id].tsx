import React, { lazy, Suspense } from 'react';
import { withAuthGuard } from '@/components/AuthGuard';

const CheckoutPage = lazy(() => import('@/pages/CheckoutPage'));

function CheckoutId() {
  return (
    <Suspense fallback={<div>Loading checkout...</div>}>
      <CheckoutPage />
    </Suspense>
  );
}

export default withAuthGuard(CheckoutId);
