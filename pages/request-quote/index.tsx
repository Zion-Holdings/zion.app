import { ErrorBoundary } from "@/components/ErrorBoundary";
import { QuoteWizard } from "@/components/quote/QuoteWizard";

export default function RequestQuotePage() {
  return (
    <ErrorBoundary fallback={<div>Quote wizard failed to load</div>}>
      <QuoteWizard />
    </ErrorBoundary>
  );
}
