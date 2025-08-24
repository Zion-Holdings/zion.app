import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const DataScienceChat: NextPage = () => {
  return (
    <div>
      <Head>
        <title>DataScienceChat - Zion Tech Solutions</title>
        <meta name="description" content="DataScienceChat blog post" />
      </Head>
      
      <main>
        <h1>DataScienceChat</h1>
        <p>Blog content coming soon...</p>
        <Link href="/blog"><a>Back to Blog</a></Link>
      </main>
    </div>
  );
};

export default DataScienceChat;