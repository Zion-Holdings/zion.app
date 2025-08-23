import React from 'react';
import EnhancedHomepage2044 from '../components/EnhancedHomepage2044';
import ErrorBoundary from '../components/ErrorBoundary';

const HomePage: React.FC = () => {
  return (
    <ErrorBoundary>
      <EnhancedHomepage2044 />
    </ErrorBoundary>
  );
};

export default HomePage;
