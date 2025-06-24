import React, { lazy, Suspense } from 'react';

const CheckoutPage = lazy(() => import('@/pages/CheckoutPage'));

export default function CheckoutId() {
  return (
    <Suspense fallback={<div>Loading checkout...</div>}>
      <CheckoutPage />
    </Suspense>
  );
}
