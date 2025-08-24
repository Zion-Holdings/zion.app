import React from 'react';
import Layout from '../components/layout/Layout';
import InteractivePricingCalculator from '../components/InteractivePricingCalculator';
import ErrorBoundary from '../components/ErrorBoundary';

const PricingCalculatorPage: React.FC = () => {
  return (
    <ErrorBoundary>
      <Layout>
        <div className="min-h-screen bg-black text-white pt-20">
          <InteractivePricingCalculator />
        </div>
      </Layout>
    </ErrorBoundary>
  );
};

export default PricingCalculatorPage;