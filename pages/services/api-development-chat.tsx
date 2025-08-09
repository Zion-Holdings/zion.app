import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import ShareBar from '../../components/ShareBar';

const ApiDevelopmentChat: NextPage = () => {
  const title = 'ApiDevelopmentChat - Zion Tech Solutions';
  const desc = 'ApiDevelopmentChat service';
  const ogImage = '/og/default.svg';
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={desc} />
        <meta property="og:title" content="ApiDevelopmentChat" />
        <meta property="og:description" content={desc} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:type" content="article" />
      </Head>
      
      <main>
        <h1>ApiDevelopmentChat</h1>
        <p>Service details coming soon...</p>
        <ShareBar title="ApiDevelopmentChat" summary={desc} imageUrl={ogImage} />
        <Link href="/services"><a>Back to Services</a></Link>
      </main>
    </div>
  );
};

export default ApiDevelopmentChat;