import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const NetworkSecurityChat: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Network Security Chat - Zion Tech Solutions</title>
        <meta name="description" content="Network Security Chat blog post" />
      </Head>
      
      <main>
        <h1>Network Security Chat</h1>
        <p>Service details coming soon...</p>
        <Link href="/services">Back to Services</Link>
      </main>
    </div>
  );
};

export default NetworkSecurityChat;