import Head from 'next/head';

export default function AboutPage() {
  return (
    <>
      <Head><title>About</title></Head>
      <div className="py-10">
        <h1 className="text-3xl font-semibold mb-4">About</h1>
        <p className="text-gray-600 dark:text-gray-300">About content coming soon.</p>
      </div>
    </>
  );
}