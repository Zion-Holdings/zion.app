import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import UseTokensButton from '../../components/tokens/UseTokensButton';

const WebApplicationDevelopmentChat: NextPage = () => {
  return (
    <div>
      <Head>
        <title>WebApplicationDevelopmentChat - Zion Tech Solutions</title>
        <meta name="description" content="WebApplicationDevelopmentChat service" />
      </Head>
      
      <main className="space-y-4">
        <h1>WebApplicationDevelopmentChat</h1>
        <p>Service details coming soon...</p>
        <UseTokensButton serviceId="web-application-development-chat" />
        <Link href="/services">Back to Services</Link>
      </main>
    </div>
  );
};

export default WebApplicationDevelopmentChat;