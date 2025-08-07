import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const TechnicalWritingChat: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Technical Writing Chat - Zion Tech Solutions</title>
        <meta name="description" content="Technical Writing Chat blog post" />
      </Head>
      
      <main>
        <h1>Technical Writing Chat</h1>
        <p>Blog content coming soon...</p>
        <Link href="/blog">Back to Blog</Link>
      </main>
    </div>
  );
};

export default TechnicalWritingChat;