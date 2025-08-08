import type { NextPage } from 'next';
import Head from 'next/head';

const AuthCallbackPage: NextPage = () => (
  <div>
    <Head><title>Auth Callback</title></Head>
    <h1 className="text-2xl font-semibold">Auth Callback</h1>
    <p className="text-gray-600 dark:text-gray-400 mt-2">Processing authentication response...</p>
  </div>
);

export default AuthCallbackPage;