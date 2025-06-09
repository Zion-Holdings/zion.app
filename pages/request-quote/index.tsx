import ErrorBoundary from "@/components/GlobalErrorBoundary";
import React from "react"; // Suspense might still be needed if QuoteWizard uses it internally, or for the loading state.
import dynamic from 'next/dynamic';

const QuoteWizard = dynamic(() =>
  import("@/components/quote/QuoteWizard").then((module) => module.QuoteWizard),
  {
    loading: () => <div>Loading quote wizard...</div> // Optional: if not using suspense from parent
  }
);

export default function RequestQuotePage() {
  return (
    <ErrorBoundary>
      {/* Suspense can be kept if you want to use React.Suspense features,
          or rely on next/dynamic's own loading state.
          Using suspense: true in dynamic options often works well. */}
      <React.Suspense fallback={<div>Loading quote wizard...</div>}>
        <QuoteWizard category="services" />
      </React.Suspense>
    </ErrorBoundary>
  );
}