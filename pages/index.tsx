import React from 'react';
import EnhancedHomepage2045 from '../components/EnhancedHomepage2045';
import ErrorBoundary from '../components/ErrorBoundary';

const HomePage: React.FC = () => {
  return (
    <ErrorBoundary>
      <EnhancedHomepage2045 />
    </ErrorBoundary>
  );
};

export default HomePage;
