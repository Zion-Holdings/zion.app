import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const index: NextPage = () => {
  return (
    <div>
      <Head>
        <title>index - Zion Tech Solutions</title>
        <meta name="description" content="index service" />
      </Head>
      
      <main>
        <h1>index</h1>
        <p>Service details coming soon...</p>
        <Link href="/services">Back to Services</Link>
      </main>
    </div>
  );
};

export default index;