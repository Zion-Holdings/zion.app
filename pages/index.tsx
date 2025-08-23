import React from 'react';
import Layout from '../components/layout/Layout';
import EnhancedHomepage2025 from '../components/EnhancedHomepage2025';

const HomePage: React.FC = () => {
  const seoConfig = {
    title: "Zion Tech Group - Revolutionary AI & Quantum Technology Solutions 2025",
    description: "Pioneering the future of technology with innovative AI consciousness, quantum computing, and autonomous solutions that transform businesses worldwide. Leading-edge 2040-2041 technology with cutting-edge micro SAAS services.",
    keywords: "AI, artificial intelligence, quantum computing, autonomous systems, technology solutions, business transformation, Zion Tech Group, 2040 technology, consciousness AI, micro SAAS, IT services, AI services, futuristic technology",
    image: "/og-image.svg",
    url: "https://ziontechgroup.com",
    type: "website"
  };

  return (
    <Layout seo={seoConfig}>
      <EnhancedHomepage2025 />
    </Layout>
  );
};

export default HomePage;
