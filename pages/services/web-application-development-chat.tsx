import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const WebApplicationDevelopmentChat: NextPage = () => {
  return (
    <div>
      <Head>
        <title>WebApplicationDevelopmentChat - Zion Tech Solutions</title>
        <meta name="description" content="WebApplicationDevelopmentChat service" />
      </Head>
      
      <main>
        <h1>WebApplicationDevelopmentChat</h1>
        <p>Service details coming soon...</p>
        <Link href="/services"><a>Back to Services</a></Link>
      </main>
    </div>
  );
};

export default WebApplicationDevelopmentChat;