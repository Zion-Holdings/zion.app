import React from 'react';
import Homepage2047 from '../components/Homepage2047';
import ErrorBoundary from '../components/ErrorBoundary';

const HomePage: React.FC = () => {
  return (
    <ErrorBoundary>
      <Homepage2047 />
    </ErrorBoundary>
  );
};

export default HomePage;
