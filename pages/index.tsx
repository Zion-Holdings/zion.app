import React from 'react';
import OptimizedHomepage from '../components/OptimizedHomepage';
import ErrorBoundary from '../components/ErrorBoundary';

const HomePage: React.FC = () => {
  return (
    <ErrorBoundary>
      <OptimizedHomepage />
    </ErrorBoundary>
  );
};

export default HomePage;
