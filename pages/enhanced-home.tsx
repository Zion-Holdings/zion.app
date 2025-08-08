import Head from 'next/head';

export default function EnhancedHomePage() {
  return (
    <>
      <Head><title>Enhanced Home</title></Head>
      <div className="py-10">
        <h1 className="text-3xl font-semibold mb-4">Enhanced Home</h1>
        <p className="text-gray-600 dark:text-gray-300">Enhanced content coming soon.</p>
      </div>
    </>
  );
}