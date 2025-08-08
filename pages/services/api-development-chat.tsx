import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import UseTokensButton from '../../components/tokens/UseTokensButton';

const ApiDevelopmentChat: NextPage = () => {
  return (
    <div>
      <Head>
        <title>ApiDevelopmentChat - Zion Tech Solutions</title>
        <meta name="description" content="ApiDevelopmentChat service" />
      </Head>
      
      <main className="space-y-4">
        <h1>ApiDevelopmentChat</h1>
        <p>Service details coming soon...</p>
        <UseTokensButton serviceId="api-development-chat" />
        <Link href="/services">Back to Services</Link>
      </main>
    </div>
  );
};

export default ApiDevelopmentChat;