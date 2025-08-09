import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import ShareBar from '../../components/ShareBar';

const BusinessIntelligenceChat: NextPage = () => {
  const title = 'BusinessIntelligenceChat - Zion Tech Solutions';
  const desc = 'BusinessIntelligenceChat service';
  const ogImage = '/og/default.svg';
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={desc} />
        <meta property="og:title" content="BusinessIntelligenceChat" />
        <meta property="og:description" content={desc} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:type" content="article" />
      </Head>
      
      <main>
        <h1>BusinessIntelligenceChat</h1>
        <p>Service details coming soon...</p>
        <ShareBar title="BusinessIntelligenceChat" summary={desc} imageUrl={ogImage} />
        <Link href="/services"><a>Back to Services</a></Link>
      </main>
    </div>
  );
};

export default BusinessIntelligenceChat;