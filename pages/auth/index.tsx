import Head from 'next/head';

export default function AuthPage() {
  return (
    <>
      <Head><title>Auth</title></Head>
      <div className="py-10">
        <h1 className="text-3xl font-semibold mb-4">Auth</h1>
        <p className="text-gray-600 dark:text-gray-300">Authentication landing page.</p>
      </div>
    </>
  );
}