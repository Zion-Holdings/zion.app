
import Head from 'next/head';
import Link from 'next/link';

const TechnicalWritingChat = () => {
  return (
    <div>
      <Head>
        <title>TechnicalWritingChat - Zion Tech Solutions</title>
        <meta name="description" content="TechnicalWritingChat blog post" />
      </Head>
      
      <main>
        <h1>TechnicalWritingChat</h1>
        <p>Blog content coming soon...</p>
        <Link href="/blog">Back to Blog</Link>
      </main>
    </div>
  );
};

export default TechnicalWritingChat;