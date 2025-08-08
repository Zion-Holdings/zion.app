import Head from 'next/head';

export default function AuthIndexPage() {
  return (
    <>
      <Head><title>Auth - Zion</title></Head>
      <div className="py-12">
        <h1 className="text-3xl font-bold">Auth</h1>
        <p className="mt-2 text-gray-600">Sign in/up coming soon.</p>
      </div>
    </>
  );
}