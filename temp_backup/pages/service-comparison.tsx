import React from 'react';
import Layout from '../components/layout/Layout';
import ServiceComparisonTool from '../components/ServiceComparisonTool';
import ErrorBoundary from '../components/ErrorBoundary';

const ServiceComparisonPage: React.FC = () => {
  return (
    <ErrorBoundary>
      <Layout>
        <div className="min-h-screen bg-black text-white pt-20">
          <ServiceComparisonTool />
        </div>
      </Layout>
    </ErrorBoundary>
  );
};

export default ServiceComparisonPage;