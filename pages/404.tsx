import type { NextPage } from 'next';
import Head from 'next/head';

const NotFoundPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>404 - Page Not Found</title>
        <meta name="description" content="404 page" />
      </Head>
      <main>
        <h1>Page Not Found</h1>
        <p>The page you are looking for does not exist.</p>
      </main>
    </div>
  );
};

export default NotFoundPage;