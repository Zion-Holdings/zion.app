import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const SystemAdministrationChat: NextPage = () => {
  return (
    <div>
      <Head>
        <title>SystemAdministrationChat - Zion Tech Solutions</title>
        <meta name="description" content="SystemAdministrationChat service" />
      </Head>
      
      <main>
        <h1>SystemAdministrationChat</h1>
        <p>Service details coming soon...</p>
        <Link href="/services">Back to Services</Link>
      </main>
    </div>
  );
};

export default SystemAdministrationChat;