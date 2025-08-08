import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import UseTokensButton from '../../components/tokens/UseTokensButton';

const MobileAppDevelopmentChat: NextPage = () => {
  return (
    <div>
      <Head>
        <title>MobileAppDevelopmentChat - Zion Tech Solutions</title>
        <meta name="description" content="MobileAppDevelopmentChat service" />
      </Head>
      
      <main className="space-y-4">
        <h1>MobileAppDevelopmentChat</h1>
        <p>Service details coming soon...</p>
        <UseTokensButton serviceId="mobile-app-development-chat" />
        <Link href="/services">Back to Services</Link>
      </main>
    </div>
  );
};

export default MobileAppDevelopmentChat;