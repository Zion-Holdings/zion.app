import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const MobileAppDevelopmentChat: NextPage = () => {
  return (
    <div>
      <Head>
        <title>MobileAppDevelopmentChat - Zion Tech Solutions</title>
        <meta name="description" content="MobileAppDevelopmentChat service" />
      </Head>
      
      <main>
        <h1>MobileAppDevelopmentChat</h1>
        <p>Service details coming soon...</p>
        <Link href="/services"><a>Back to Services</a></Link>
      </main>
    </div>
  );
};

export default MobileAppDevelopmentChat;