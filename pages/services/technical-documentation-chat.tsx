import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import UseTokensButton from '../../components/tokens/UseTokensButton';

const TechnicalDocumentationChat: NextPage = () => {
  return (
    <div>
      <Head>
        <title>TechnicalDocumentationChat - Zion Tech Solutions</title>
        <meta name="description" content="TechnicalDocumentationChat service" />
      </Head>
      
      <main className="space-y-4">
        <h1>TechnicalDocumentationChat</h1>
        <p>Service details coming soon...</p>
        <UseTokensButton serviceId="technical-documentation-chat" />
        <Link href="/services">Back to Services</Link>
      </main>
    </div>
  );
};

export default TechnicalDocumentationChat;