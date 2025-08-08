import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const WebDevelopmentChat: NextPage = () => {
  return (
    <div>
      <Head>
        <title>WebDevelopmentChat - Zion Tech Solutions</title>
        <meta name="description" content="WebDevelopmentChat blog post" />
      </Head>
      
      <main>
        <h1>WebDevelopmentChat</h1>
        <p>Blog content coming soon...</p>
        <Link href="/blog"><a>Back to Blog</a></Link>
      </main>
    </div>
  );
};

export default WebDevelopmentChat;