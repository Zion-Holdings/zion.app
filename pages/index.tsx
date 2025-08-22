import React from 'react';
import SEO from '../components/SEO';
import Homepage2025 from '../components/Homepage2025';
import Layout from '../components/layout/Layout';

export default function IndexPage() {
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
