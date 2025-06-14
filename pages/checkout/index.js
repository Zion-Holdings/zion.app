import { jsx as _jsx } from "react/jsx-runtime";
import { lazy, Suspense } from 'react';
const CheckoutPage = lazy(() => import('@/pages/Checkout'));
export default function Checkout() {
    return (_jsx(Suspense, { fallback: _jsx("div", { children: "Loading checkout..." }), children: _jsx(CheckoutPage, {}) }));
}
