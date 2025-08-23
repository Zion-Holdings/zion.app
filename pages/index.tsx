import React from 'react';
import EnhancedHomepage2040 from '../components/EnhancedHomepage2040';
import ErrorBoundary from '../components/ErrorBoundary';

const HomePage: React.FC = () => {
  return (
    <ErrorBoundary>
      <EnhancedHomepage2040 />
    </ErrorBoundary>
  );
};

export default HomePage;
