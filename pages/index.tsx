import React from 'react';
import Homepage2044 from '../components/Homepage2044';
import ErrorBoundary from '../components/ErrorBoundary';

const HomePage: React.FC = () => {
  return (
    <ErrorBoundary>
      <Homepage2044 />
    </ErrorBoundary>
  );
};

export default HomePage;
