import React from 'react';
import EnhancedHomepage2025 from '../components/EnhancedHomepage2025';
import ErrorBoundary from '../components/ErrorBoundary';

const HomePage: React.FC = () => {
  return (
    <ErrorBoundary>
      <EnhancedHomepage2025 />
    </ErrorBoundary>
  );
};

export default HomePage;
