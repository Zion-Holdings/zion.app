import React from 'react';
import SEO from '../components/SEO';
import Homepage2044 from '../components/Homepage2044';
import ErrorBoundary from '../components/ErrorBoundary';

const HomePage: React.FC = () => {
  return (
    <>
      <SEO 
        title="Zion Tech Group - Revolutionary AI, Quantum Computing & Space Technology Solutions"
        description="Pioneering the future of technology with revolutionary AI consciousness, quantum computing, and autonomous solutions that transform businesses worldwide. Leading-edge services in AI, cybersecurity, space tech, and quantum solutions."
        keywords="AI, artificial intelligence, quantum computing, space technology, cybersecurity, machine learning, automation, Zion Tech Group, technology solutions, enterprise software, cloud computing, blockchain, IoT, robotics"
        type="website"
        url="https://ziontechgroup.com"
      />
      <ErrorBoundary>
        <Homepage2044 />
      </ErrorBoundary>
    </>
  );
};

export default HomePage;
