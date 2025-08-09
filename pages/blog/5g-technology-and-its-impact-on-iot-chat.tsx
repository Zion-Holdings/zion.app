import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import ShareBar from '../../components/ShareBar';

const Chat5gTechnologyAndItsImpactOnIotChat: NextPage = () => {
  const title = '5gTechnologyAndItsImpactOnIotChat - Zion Tech Solutions';
  const desc = '5gTechnologyAndItsImpactOnIotChat blog post';
  const ogImage = '/og/default.svg';
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={desc} />
        <meta property="og:title" content="5gTechnologyAndItsImpactOnIotChat" />
        <meta property="og:description" content={desc} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:type" content="article" />
      </Head>
      
      <main>
        <h1>5gTechnologyAndItsImpactOnIotChat</h1>
        <p>Blog content coming soon...</p>
        <ShareBar title="5gTechnologyAndItsImpactOnIotChat" summary={desc} imageUrl={ogImage} />
        <Link href="/blog"><a>Back to Blog</a></Link>
      </main>
    </div>
  );
};

export default Chat5gTechnologyAndItsImpactOnIotChat;