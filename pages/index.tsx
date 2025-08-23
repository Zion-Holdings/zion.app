import React from 'react';
import Homepage2045 from '../components/Homepage2045';
import Navigation from '../components/layout/Navigation';
import Footer from '../components/layout/Footer';
import ErrorBoundary from '../components/ErrorBoundary';

const HomePage: React.FC = () => {
  return (
    <ErrorBoundary>
      <Navigation />
      <Homepage2045 />
      <Footer />
    </ErrorBoundary>
  );
};

export default HomePage;
