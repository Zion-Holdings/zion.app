import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const LandingPageGenerator: NextPage = () => {
  return (
    <div>
      <Head>
        <title>LandingPageGenerator - Zion Tech Solutions</title>
        <meta name="description" content="LandingPageGenerator service" />
      </Head>
      
      <main>
        <h1>LandingPageGenerator</h1>
        <p>Service details coming soon...</p>
        <a href="/services">Back to Services</a>
      </main>
    </div>
  );
};

export default LandingPageGenerator;