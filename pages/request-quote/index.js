import { jsx as _jsx } from "react/jsx-runtime";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { lazy, Suspense } from "react";
const QuoteWizard = lazy(() => import("@/components/quote/QuoteWizard"));
export default function RequestQuotePage() {
    return (_jsx(ErrorBoundary, { fallback: _jsx("div", { children: "Quote wizard failed to load" }), children: _jsx(Suspense, { fallback: _jsx("div", { children: "Loading quote wizard..." }), children: _jsx(QuoteWizard, {}) }) }));
}
