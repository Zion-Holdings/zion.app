import React, { lazy, Suspense } from 'react';'
import { withAuthGuard } from '@/components/AuthGuard';
;'
const CheckoutPage: unknown unknown = lazy(() => import('@/pages/Checkout'));
;
function Checkout(): unknown {) {;
  return (;
    <Suspense fallback={<div>Loading checkout...</div>}>;
      <CheckoutPage />;
    </Suspense>;
  );
};
;
export default withAuthGuard(Checkout);
'