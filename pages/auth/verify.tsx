import type { NextPage } from 'next';
import Head from 'next/head';

const VerifyEmailPage: NextPage = () => (
  <div>
    <Head><title>Verify Email</title></Head>
    <h1 className="text-2xl font-semibold">Verify Email</h1>
    <p className="text-gray-600 dark:text-gray-400 mt-2">Please verify your email address. (placeholder)</p>
  </div>
);

export default VerifyEmailPage;