import { ErrorBoundary } from "@/components/ErrorBoundary";
import React, { lazy, Suspense } from "react";

const QuoteWizard = lazy(() =>
  import("@/components/quote/QuoteWizard").then((module) => ({
    default: module.QuoteWizard,
  }))
);

export default function RequestQuotePage() {
  return (
    <ErrorBoundary fallback={<div>Quote wizard failed to load</div>}>
      <Suspense fallback={<div>Loading quote wizard...</div>}>
        <QuoteWizard />
      </Suspense>
    </ErrorBoundary>
  );
}
