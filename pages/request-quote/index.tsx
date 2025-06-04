import ErrorBoundary from "@/components/GlobalErrorBoundary";
import React, { lazy, Suspense } from "react";

const QuoteWizard = lazy(() =>
  import("@/components/quote/QuoteWizard").then((module) => ({
    default: module.QuoteWizard,
  }))
);

export default function RequestQuotePage() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<div>Loading quote wizard...</div>}>
        {/* Default to services category until additional categories are supported */}
        <QuoteWizard category="services" />
      </Suspense>
    </ErrorBoundary>
  );
}
