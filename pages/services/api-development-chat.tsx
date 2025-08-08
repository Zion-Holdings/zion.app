import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const ApiDevelopmentChat: NextPage = () => {
  return (
    <div>
      <Head>
        <title>ApiDevelopmentChat - Zion Tech Solutions</title>
        <meta name="description" content="ApiDevelopmentChat service" />
      </Head>
      
      <main>
        <h1>ApiDevelopmentChat</h1>
        <p>Service details coming soon...</p>
        <Link href="/services"><a>Back to Services</a></Link>
      </main>
    </div>
  );
};

export default ApiDevelopmentChat;