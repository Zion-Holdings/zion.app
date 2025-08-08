import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const Index: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Index - Zion Tech Solutions</title>
        <meta name="description" content="Index blog post" />
      </Head>
      
      <main>
        <h1>Index</h1>
        <p>Blog content coming soon...</p>
        <a href="/blog">Back to Blog</a>
      </main>
    </div>
  );
};

export default Index;