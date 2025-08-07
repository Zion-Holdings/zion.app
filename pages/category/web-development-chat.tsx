import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const WebDevelopmentChat: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Web Development Chat - Zion Tech Solutions</title>
        <meta name="description" content="Web Development Chat blog post" />
      </Head>
      
      <main>
        <h1>Web Development Chat</h1>
        <p>Blog content coming soon...</p>
        <Link href="/blog">Back to Blog</Link>
      </main>
    </div>
  );
};

export default WebDevelopmentChat;