import React from 'react';
import EnhancedHomepage2046 from '../components/EnhancedHomepage2046';
import ErrorBoundary from '../components/ErrorBoundary';

const HomePage: React.FC = () => {
  return (
    <ErrorBoundary>
      <EnhancedHomepage2046 />
    </ErrorBoundary>
  );
};

export default HomePage;
