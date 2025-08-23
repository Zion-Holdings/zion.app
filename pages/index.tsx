import React from 'react';
import Homepage2045 from '../components/Homepage2045';
import UltraFuturisticNavigation2045 from '../components/layout/UltraFuturisticNavigation2045';
import UltraFuturisticFooter2045 from '../components/layout/UltraFuturisticFooter2045';
import ErrorBoundary from '../components/ErrorBoundary';

const HomePage: React.FC = () => {
  return (
    <ErrorBoundary>
      <UltraFuturisticNavigation2045 />
      <Homepage2045 />
      <UltraFuturisticFooter2045 />
    </ErrorBoundary>
  );
};

export default HomePage;
