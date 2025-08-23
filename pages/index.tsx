import React from 'react';
import EnhancedHomepage2045V2 from '../components/EnhancedHomepage2045V2';
import ErrorBoundary from '../components/ErrorBoundary';

const HomePage: React.FC = () => {
  return (
    <ErrorBoundary>
      <EnhancedHomepage2045V2 />
    </ErrorBoundary>
  );
};

export default HomePage;
