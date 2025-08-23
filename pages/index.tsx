import React from 'react';
import EnhancedHomepage from '../components/EnhancedHomepage';
import ErrorBoundary from '../components/ErrorBoundary';

const HomePage: React.FC = () => {
  return (
    <ErrorBoundary>
      <EnhancedHomepage />
    </ErrorBoundary>
  );
};

export default HomePage;
