import type { NextPage } from 'next';
import Head from 'next/head';

const ForgotPasswordPage: NextPage = () => (
  <div>
    <Head><title>Forgot Password</title></Head>
    <h1 className="text-2xl font-semibold">Forgot Password</h1>
    <p className="text-gray-600 dark:text-gray-400 mt-2">Please check your email to reset your password. (placeholder)</p>
  </div>
);

export default ForgotPasswordPage;