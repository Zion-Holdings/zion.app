import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import ShareBar from '../../components/ShareBar';

const Index: NextPage = () => {
  const title = 'Blog - Zion Tech Solutions';
  const desc = 'Latest insights from Zion';
  const ogImage = '/og/default.svg';
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={desc} />
        <meta property="og:title" content="Blog" />
        <meta property="og:description" content={desc} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:type" content="website" />
      </Head>
      
      <main>
        <h1>Index</h1>
        <p>Blog content coming soon...</p>
        <ShareBar title="Blog" summary={desc} imageUrl={ogImage} />
        <Link href="/blog"><a>Back to Blog</a></Link>
      </main>
    </div>
  );
};

export default Index;