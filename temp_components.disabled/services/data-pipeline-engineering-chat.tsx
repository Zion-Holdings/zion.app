import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import UseTokensButton from '../../components/tokens/UseTokensButton';

const DataPipelineEngineeringChat: NextPage = () => {
  return (
    <div>
      <Head>
        <title>DataPipelineEngineeringChat - Zion Tech Solutions</title>
        <meta name="description" content="DataPipelineEngineeringChat service" />
      </Head>
      
      <main className="space-y-4">
        <h1>DataPipelineEngineeringChat</h1>
        <p>Service details coming soon...</p>
        <UseTokensButton serviceId="data-pipeline-engineering-chat" />
        <Link href="/services">Back to Services</Link>
      </main>
    </div>
  );
};

export default DataPipelineEngineeringChat;