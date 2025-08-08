import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import UseTokensButton from '../../components/tokens/UseTokensButton';

const PerformanceOptimizationChat: NextPage = () => {
  return (
    <div>
      <Head>
        <title>PerformanceOptimizationChat - Zion Tech Solutions</title>
        <meta name="description" content="PerformanceOptimizationChat service" />
      </Head>
      
      <main className="space-y-4">
        <h1>PerformanceOptimizationChat</h1>
        <p>Service details coming soon...</p>
        <UseTokensButton serviceId="performance-optimization-chat" />
        <Link href="/services">Back to Services</Link>
      </main>
    </div>
  );
};

export default PerformanceOptimizationChat;