import React, { lazy, Suspense } from 'react';

const CheckoutPage = lazy(() => import('@/pages/Checkout'));

export default function Checkout() {
  return (
    <Suspense fallback={<div>Loading checkout...</div>}>
      <CheckoutPage />
    </Suspense>
  );
}
