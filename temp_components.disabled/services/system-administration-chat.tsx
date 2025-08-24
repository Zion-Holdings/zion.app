import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import UseTokensButton from '../../components/tokens/UseTokensButton';

const SystemAdministrationChat: NextPage = () => {
  return (
    <div>
      <Head>
        <title>SystemAdministrationChat - Zion Tech Solutions</title>
        <meta name="description" content="SystemAdministrationChat service" />
      </Head>
      
      <main className="space-y-4">
        <h1>SystemAdministrationChat</h1>
        <p>Service details coming soon...</p>
        <UseTokensButton serviceId="system-administration-chat" />
        <Link href="/services">Back to Services</Link>
      </main>
    </div>
  );
};

export default SystemAdministrationChat;