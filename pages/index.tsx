import React from 'react';
import Homepage2045 from '../components/Homepage2045';
import ErrorBoundary from '../components/ErrorBoundary';

const HomePage: React.FC = () => {
  return (
    <ErrorBoundary>
      <Homepage2045 />
    </ErrorBoundary>
  );
};

export default HomePage;
