import React from 'react';
import Homepage2044 from '../components/Homepage2044';
import EnhancedErrorBoundary from '../components/EnhancedErrorBoundary';

const HomePage: React.FC = () => {
  return (
    <EnhancedErrorBoundary>
      <Homepage2044 />
    </EnhancedErrorBoundary>
  );
};

export default HomePage;
