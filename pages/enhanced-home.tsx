import Head from 'next/head';

export default function EnhancedHome() {
  return (
    <>
      <Head>
        <title>Enhanced Home</title>
      </Head>
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">Enhanced Home</h1>
        <p className="text-gray-600 dark:text-gray-300">Enhanced UI demo page.</p>
      </div>
    </>
  );
}