import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import UseTokensButton from '../../components/tokens/UseTokensButton';

const CloudMigrationServicesChat: NextPage = () => {
  return (
    <div>
      <Head>
        <title>CloudMigrationServicesChat - Zion Tech Solutions</title>
        <meta name="description" content="CloudMigrationServicesChat service" />
      </Head>
      
      <main className="space-y-4">
        <h1>CloudMigrationServicesChat</h1>
        <p>Service details coming soon...</p>
        <UseTokensButton serviceId="cloud-migration-services-chat" />
        <Link href="/services">Back to Services</Link>
      </main>
    </div>
  );
};

export default CloudMigrationServicesChat;