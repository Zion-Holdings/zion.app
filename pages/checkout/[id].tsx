import React, { lazy, Suspense } from 'react';';';';';'';
import { withAuthGuard } from '@/components/AuthGuard';';';';''
;';';';';'';
const CheckoutPage: unknown unknown unknown unknown unknown unknown = lazy(() => import('@/pages/CheckoutPage'));'
;
function CheckoutId(): unknown {): unknown {): unknown {): unknown {): unknown {) {;
  return (;
    <Suspense fallback={<div>Loading checkout...</div>}>;
      <CheckoutPage />;
    </Suspense>;
  );''
};';''
;';';'';
export default withAuthGuard(CheckoutId);';';';''
';';';''
}';';''
}';''
}''
}''