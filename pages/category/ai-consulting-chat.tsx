import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const AiConsultingChat: NextPage = () => {
  return (
    <div>
      <Head>
        <title>AiConsultingChat - Zion Tech Solutions</title>
        <meta name="description" content="AiConsultingChat blog post" />
      </Head>
      
      <main>
        <h1>AiConsultingChat</h1>
        <p>Blog content coming soon...</p>
        <Link href="/blog"><a>Back to Blog</a></Link>
      </main>
    </div>
  );
};

export default AiConsultingChat;