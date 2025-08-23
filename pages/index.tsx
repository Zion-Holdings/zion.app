import React from 'react';
import Homepage2046 from '../components/Homepage2046';
import ErrorBoundary from '../components/ErrorBoundary';

const HomePage: React.FC = () => {
  return (
    <ErrorBoundary>
      <Homepage2046 />
    </ErrorBoundary>
  );
};

export default HomePage;
