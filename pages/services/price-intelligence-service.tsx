import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const PriceIntelligenceService: NextPage = () => {
  return (
    <div>
      <Head>
        <title>PriceIntelligenceService - Zion Tech Solutions</title>
        <meta name="description" content="PriceIntelligenceService service" />
      </Head>
      
      <main>
        <h1>PriceIntelligenceService</h1>
        <p>Service details coming soon...</p>
        <Link href="/services"><a>Back to Services</a></Link>
      </main>
    </div>
  );
};

export default PriceIntelligenceService;