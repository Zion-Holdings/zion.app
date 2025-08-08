import type { NextPage } from 'next';
import Head from 'next/head';

const HomePage: NextPage = () => {
  return (
    <div>
      <Head><title>Zion OS</title></Head>
      <h1 className="text-2xl font-semibold">Welcome to Zion OS</h1>
      <p className="text-gray-600 dark:text-gray-400 mt-2">Explore services, or create a digital nation.</p>
    </div>
  );
};

export default HomePage;