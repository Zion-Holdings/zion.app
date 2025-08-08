import type { NextPage } from 'next';
import Head from 'next/head';

const EnhancedHomePage: NextPage = () => (
  <div>
    <Head><title>Enhanced Home - Zion</title></Head>
    <h1 className="text-2xl font-semibold">Enhanced Home</h1>
    <p className="text-gray-600 dark:text-gray-400 mt-2">Improved layout demo.</p>
  </div>
);

export default EnhancedHomePage;