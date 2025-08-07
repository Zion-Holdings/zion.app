import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const UiUxDesignChat: NextPage = () => {
  return (
    <div>
      <Head>
        <title>UiUxDesignChat - Zion Tech Solutions</title>
        <meta name="description" content="UiUxDesignChat service" />
      </Head>
      
      <main>
        <h1>UiUxDesignChat</h1>
        <p>Service details coming soon...</p>
        <Link href="/services">Back to Services</Link>
      </main>
    </div>
  );
};

export default UiUxDesignChat;