import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const ApiDevelopmentChat: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Api Development Chat - Zion Tech Solutions</title>
        <meta name="description" content="Api Development Chat blog post" />
      </Head>
      
      <main>
        <h1>Api Development Chat</h1>
        <p>Service details coming soon...</p>
        <Link href="/services">Back to Services</Link>
      </main>
    </div>
  );
};

export default ApiDevelopmentChat;