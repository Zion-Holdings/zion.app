import Head from 'next/head';

export default function Error403() {
  return (
    <>
      <Head>
        <title>403 - Zion App</title>
      </Head>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">403 - Forbidden</h1>
        <p className="text-lg mb-4">You don't have permission to access this resource.</p>
        <a href="/" className="text-blue-600 hover:underline">
          Return to Home
        </a>
      </div>
    </>
  );
}