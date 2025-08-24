import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import UseTokensButton from '../../components/tokens/UseTokensButton';

const AiModelDevelopmentChat: NextPage = () => {
  return (
    <div>
      <Head>
        <title>AiModelDevelopmentChat - Zion Tech Solutions</title>
        <meta name="description" content="AiModelDevelopmentChat service" />
      </Head>
      
      <main className="space-y-4">
        <h1>AiModelDevelopmentChat</h1>
        <p>Service details coming soon...</p>
        <UseTokensButton serviceId="ai-model-development-chat" />
        <Link href="/services">Back to Services</Link>
      </main>
    </div>
  );
};

export default AiModelDevelopmentChat;