import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import UseTokensButton from '../../components/tokens/UseTokensButton';

const NetworkSecurityChat: NextPage = () => {
  return (
    <div>
      <Head>
        <title>NetworkSecurityChat - Zion Tech Solutions</title>
        <meta name="description" content="NetworkSecurityChat service" />
      </Head>
      
      <main className="space-y-4">
        <h1>NetworkSecurityChat</h1>
        <p>Service details coming soon...</p>
        <UseTokensButton serviceId="network-security-chat" />
        <Link href="/services">Back to Services</Link>
      </main>
    </div>
  );
};

export default NetworkSecurityChat;