import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const BusinessIntelligenceChat: NextPage = () => {
  return (
    <div>
      <Head>
        <title>BusinessIntelligenceChat - Zion Tech Solutions</title>
        <meta name="description" content="BusinessIntelligenceChat blog post" />
      </Head>
      
      <main>
        <h1>BusinessIntelligenceChat</h1>
        <p>Blog content coming soon...</p>
        <Link href="/blog"><a>Back to Blog</a></Link>
      </main>
    </div>
  );
};

export default BusinessIntelligenceChat;