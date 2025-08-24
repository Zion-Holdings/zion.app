import type { NextPage } from 'next';
import Head from 'next/head';

const NotFoundPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>404 - Zion Tech Solutions</title>
        <meta name="description" content="404 page" />
      </Head>
      
      <main>
        <h1>404</h1>
        <p>Page not found.</p>
      </main>
    </div>
  );
};

export default NotFoundPage;