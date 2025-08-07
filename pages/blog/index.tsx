import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const index: NextPage = () => {
  return (
    <div>
      <Head>
        <title>index - Zion Tech Solutions</title>
        <meta name="description" content="index blog post" />
      </Head>
      
      <main>
        <h1>index</h1>
        <p>Blog content coming soon...</p>
        <Link href="/blog">Back to Blog</Link>
      </main>
    </div>
  );
};

export default index;