import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const TechnicalDocumentationChat: NextPage = () => {
  return (
    <div>
      <Head>
        <title>TechnicalDocumentationChat - Zion Tech Solutions</title>
        <meta name="description" content="TechnicalDocumentationChat service" />
      </Head>
      
      <main>
        <h1>TechnicalDocumentationChat</h1>
        <p>Service details coming soon...</p>
        <Link href="/services"><a>Back to Services</a></Link>
      </main>
    </div>
  );
};

export default TechnicalDocumentationChat;