import React from 'react';
import Layout from '../components/layout/Layout';
import Homepage2025 from '../components/Homepage2025';

const HomePage: React.FC = () => {
  const seoConfig = {
    title: "Zion Tech Group - Revolutionary AI & Quantum Technology Solutions",
    description: "Pioneering the future of technology with innovative AI consciousness, quantum computing, and autonomous solutions that transform businesses worldwide. Leading-edge 2040-2041 technology.",
    keywords: "AI, artificial intelligence, quantum computing, autonomous systems, technology solutions, business transformation, Zion Tech Group, 2040 technology, consciousness AI",
    image: "/og-image.svg",
    url: "https://ziontechgroup.com",
    type: "website"
  };

  return (
    <Layout seo={seoConfig}>
      <Homepage2025 />
    </Layout>
  );
};

export default HomePage;
