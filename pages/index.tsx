import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home - Zion Tech Solutions</title>
        <meta name="description" content="Welcome to Zion Tech Solutions" />
      </Head>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold">Welcome</h1>
        <p>Home page content coming soon.</p>
      </div>
    </>
  );
};

export default Home;