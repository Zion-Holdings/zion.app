import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const cybersecuritychat: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Cybersecurity Chat - Zion Tech Solutions</title>
        <meta name="description" content="Cybersecurity Chat blog post" />
      </Head>
      
      <main>
        <h1>CybersecurityChat</h1>
        <p>Blog content coming soon...</p>
        <Link href="/blog">Back to Blog</Link>
      </main>
    </div>
  );
};

export default cybersecuritychat;