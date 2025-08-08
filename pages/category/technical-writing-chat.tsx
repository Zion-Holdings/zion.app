import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const TechnicalWritingChat: NextPage = () => {
  return (
    <div>
      <Head>
        <title>TechnicalWritingChat - Zion Tech Solutions</title>
        <meta name="description" content="TechnicalWritingChat blog post" />
      </Head>
      
      <main>
        <h1>TechnicalWritingChat</h1>
        <p>Blog content coming soon...</p>
        <Link href="/blog"><a>Back to Blog</a></Link>
      </main>
    </div>
  );
};

export default TechnicalWritingChat;