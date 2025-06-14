import { jsx as _jsx } from "react/jsx-runtime";
import ErrorBoundary from "@/components/GlobalErrorBoundary";
import React from "react"; // Suspense might still be needed if QuoteWizard uses it internally, or for the loading state.
import dynamic from 'next/dynamic';
const QuoteWizard = dynamic(() => import("@/components/quote/QuoteWizard").then((module) => module.QuoteWizard));
export default function RequestQuotePage() {
    return (_jsx(ErrorBoundary, { children: _jsx(React.Suspense, { fallback: _jsx("div", { children: "Loading quote wizard..." }), children: _jsx(QuoteWizard, { category: "services" }) }) }));
}
