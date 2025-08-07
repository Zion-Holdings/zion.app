import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const DatabaseDesignChat: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Database Design Chat - Zion Tech Solutions</title>
        <meta name="description" content="Database Design Chat blog post" />
      </Head>
      
      <main>
        <h1>Database Design Chat</h1>
        <p>Service details coming soon...</p>
        <Link href="/services">Back to Services</Link>
      </main>
    </div>
  );
};

export default DatabaseDesignChat;