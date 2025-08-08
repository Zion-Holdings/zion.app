import Head from 'next/head';

export default function AuthCallbackPage() {
  return (
    <>
      <Head><title>Auth Callback</title></Head>
      <div className="py-10">
        <h1 className="text-3xl font-semibold mb-4">Auth Callback</h1>
        <p className="text-gray-600 dark:text-gray-300">Handling authentication callback...</p>
      </div>
    </>
  );
}