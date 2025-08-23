import React from 'react';
import SEO from '../components/SEO';
import Homepage2025 from '../components/Homepage2025';
import Layout from '../components/layout/Layout';

const HomePage: React.FC = () => {
  const seoConfig = {
    title: "Zion Tech Group - Revolutionary AI, Quantum & Space Technology Solutions 2040",
    description: "Pioneering the future of technology with innovative AI consciousness, quantum computing, autonomous systems, and space technology solutions that transform businesses worldwide. Leading-edge 2040 technology with 100+ innovative services.",
    keywords: "AI, artificial intelligence, quantum computing, autonomous systems, space technology, holographic communication, brain-computer interface, synthetic biology, technology solutions, business transformation, Zion Tech Group, 2040 technology, consciousness AI, quantum cybersecurity, space mining",
    image: "/og-image.svg",
    url: "https://ziontechgroup.com",
    type: "website"
  };

export default function Home() {
  return (
    <>
      <SEO />
      <Layout>
        <main id="main">
          <Homepage2025 showInternalNav={false} />
        </main>
      </Layout>
    </>
  );
}
