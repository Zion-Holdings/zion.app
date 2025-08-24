import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import dynamic from 'next/dynamic';

const FeedbackWidget = dynamic(() => import('../../components/feedback/FeedbackWidget'), { ssr: false });

const CustomerSupportChatbot: NextPage = () => {
  return (
    <div>
      <Head>
        <title>CustomerSupportChatbot - Zion Tech Solutions</title>
        <meta name="description" content="CustomerSupportChatbot service" />
      </Head>
      
      <main>
        <h1>CustomerSupportChatbot</h1>
        <p>Service details coming soon...</p>
        <FeedbackWidget />
        <Link href="/services">Back to Services</Link>
      </main>
    </div>
  );
};

export default CustomerSupportChatbot;