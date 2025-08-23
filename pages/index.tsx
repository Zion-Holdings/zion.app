import React from 'react';
import EnhancedHomepage2025 from '../components/EnhancedHomepage2025';
import ErrorBoundary from '../components/ErrorBoundary';
import SEOHead from '../components/SEOHead';

const HomePage: React.FC = () => {
  return (
    <>
      <SEOHead />
      <ErrorBoundary>
        <EnhancedHomepage2025 />
      </ErrorBoundary>
    </>
  );
};

export default HomePage;
