import type { NextPage } from 'next';
import Head from 'next/head';

const ResetPasswordPage: NextPage = () => (
  <div>
    <Head><title>Reset Password</title></Head>
    <h1 className="text-2xl font-semibold">Reset Password</h1>
    <p className="text-gray-600 dark:text-gray-400 mt-2">Enter a new password. (placeholder)</p>
  </div>
);

export default ResetPasswordPage;