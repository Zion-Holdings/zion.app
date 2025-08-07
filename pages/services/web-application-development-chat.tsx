import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const WebApplicationDevelopmentChat: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Web Application Development Chat - Zion Tech Solutions</title>
        <meta name="description" content="Web Application Development Chat blog post" />
      </Head>
      
      <main>
        <h1>Web Application Development Chat</h1>
        <p>Service details coming soon...</p>
        <Link href="/services">Back to Services</Link>
      </main>
    </div>
  );
};

export default WebApplicationDevelopmentChat;