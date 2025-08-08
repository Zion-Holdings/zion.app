import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const BusinessIntelligenceChat: NextPage = () => {
  return (
    <div>
      <Head>
        <title>BusinessIntelligenceChat - Zion Tech Solutions</title>
        <meta name="description" content="BusinessIntelligenceChat service" />
      </Head>
      
      <main>
        <h1>BusinessIntelligenceChat</h1>
        <p>Service details coming soon...</p>
        <Link href="/services"><a>Back to Services</a></Link>
      </main>
    </div>
  );
};

export default BusinessIntelligenceChat;