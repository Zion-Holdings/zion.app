import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import UseTokensButton from '../../components/tokens/UseTokensButton';

const AiSeoAuditor: NextPage = () => {
  return (
    <div>
      <Head>
        <title>AiSeoAuditor - Zion Tech Solutions</title>
        <meta name="description" content="AiSeoAuditor service" />
      </Head>
      
      <main className="space-y-4">
        <h1>AiSeoAuditor</h1>
        <p>Service details coming soon...</p>
        <UseTokensButton serviceId="ai-seo-auditor" />
        <Link href="/services">Back to Services</Link>
      </main>
    </div>
  );
};

export default AiSeoAuditor;