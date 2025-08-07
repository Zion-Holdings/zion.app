import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const NetworkSecurityChat: NextPage = () => {
  return (
    <div>
      <Head>
        <title>NetworkSecurityChat - Zion Tech Solutions</title>
        <meta name="description" content="NetworkSecurityChat service" />
      </Head>
      
      <main>
        <h1>NetworkSecurityChat</h1>
        <p>Service details coming soon...</p>
        <Link href="/services">Back to Services</Link>
      </main>
    </div>
  );
};

export default NetworkSecurityChat;