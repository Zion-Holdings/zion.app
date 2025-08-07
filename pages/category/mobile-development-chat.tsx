import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const MobileDevelopmentChat: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Mobile Development Chat - Zion Tech Solutions</title>
        <meta name="description" content="Mobile Development Chat blog post" />
      </Head>
      
      <main>
        <h1>Mobile Development Chat</h1>
        <p>Blog content coming soon...</p>
        <Link href="/blog">Back to Blog</Link>
      </main>
    </div>
  );
};

export default MobileDevelopmentChat;