import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const CybersecurityChat: NextPage = () => {
  return (
    <div>
      <Head>
        <title>CybersecurityChat - Zion Tech Solutions</title>
        <meta name="description" content="CybersecurityChat blog post" />
      </Head>
      
      <main>
        <h1>CybersecurityChat</h1>
        <p>Blog content coming soon...</p>
        <Link href="/blog"><a>Back to Blog</a></Link>
      </main>
    </div>
  );
};

export default CybersecurityChat;