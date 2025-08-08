import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import UseTokensButton from '../../components/tokens/UseTokensButton';

const BusinessIntelligenceChat: NextPage = () => {
  return (
    <div>
      <Head>
        <title>BusinessIntelligenceChat - Zion Tech Solutions</title>
        <meta name="description" content="BusinessIntelligenceChat service" />
      </Head>
      
      <main className="space-y-4">
        <h1>BusinessIntelligenceChat</h1>
        <p>Service details coming soon...</p>
        <UseTokensButton serviceId="business-intelligence-chat" />
        <Link href="/services">Back to Services</Link>
      </main>
    </div>
  );
};

export default BusinessIntelligenceChat;