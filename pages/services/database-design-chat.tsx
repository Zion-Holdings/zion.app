import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const DatabaseDesignChat: NextPage = () => {
  return (
    <div>
      <Head>
        <title>DatabaseDesignChat - Zion Tech Solutions</title>
        <meta name="description" content="DatabaseDesignChat service" />
      </Head>
      
      <main>
        <h1>DatabaseDesignChat</h1>
        <p>Service details coming soon...</p>
        <Link href="/services">Back to Services</Link>
      </main>
    </div>
  );
};

export default DatabaseDesignChat;