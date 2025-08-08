import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import UseTokensButton from '../../components/tokens/UseTokensButton';

const QualityAssuranceTestingChat: NextPage = () => {
  return (
    <div>
      <Head>
        <title>QualityAssuranceTestingChat - Zion Tech Solutions</title>
        <meta name="description" content="QualityAssuranceTestingChat service" />
      </Head>
      
      <main className="space-y-4">
        <h1>QualityAssuranceTestingChat</h1>
        <p>Service details coming soon...</p>
        <UseTokensButton serviceId="quality-assurance-testing-chat" />
        <Link href="/services">Back to Services</Link>
      </main>
    </div>
  );
};

export default QualityAssuranceTestingChat;