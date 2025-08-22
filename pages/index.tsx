import React from 'react';
import SEO from '../components/SEO';
import dynamic from 'next/dynamic';
const Homepage2025 = dynamic(() => import('../components/Homepage2025'), { ssr: false });

export default function IndexPage() {
  return (
    <>
      <SEO />
      <Homepage2025 />
    </>
  );
}
