import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const MobileDevelopmentChat: NextPage = () => {
  return (
    <div>
      <Head>
        <title>MobileDevelopmentChat - Zion Tech Solutions</title>
        <meta name="description" content="MobileDevelopmentChat blog post" />
      </Head>
      
      <main>
        <h1>MobileDevelopmentChat</h1>
        <p>Blog content coming soon...</p>
        <Link href="/blog"><a>Back to Blog</a></Link>
      </main>
    </div>
  );
};

export default MobileDevelopmentChat;