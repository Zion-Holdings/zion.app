import type { NextPage } from 'next';
import Head from 'next/head';

const AuthIndexPage: NextPage = () => (
  <div>
    <Head><title>Auth</title></Head>
    <h1 className="text-2xl font-semibold">Auth</h1>
    <p className="text-gray-600 dark:text-gray-400 mt-2">Sign in or sign up. (placeholder)</p>
  </div>
);

export default AuthIndexPage;