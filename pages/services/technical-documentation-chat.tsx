import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const TechnicalDocumentationChat: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Technical Documentation Chat - Zion Tech Solutions</title>
        <meta name="description" content="Technical Documentation Chat blog post" />
      </Head>
      
      <main>
        <h1>Technical Documentation Chat</h1>
        <p>Service details coming soon...</p>
        <Link href="/services">Back to Services</Link>
      </main>
    </div>
  );
};

export default TechnicalDocumentationChat;