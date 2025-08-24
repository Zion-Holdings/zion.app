import Head from 'next/head';

export default function AuthCallbackPage() {
  return (
    <>
      <Head><title>Auth Callback - Zion</title></Head>
      <div className="py-12">
        <h1 className="text-3xl font-bold">Auth Callback</h1>
        <p className="mt-2 text-gray-600">Redirecting...</p>
      </div>
    </>
  );
}