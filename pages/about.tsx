import Head from 'next/head';

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About Zion</title>
      </Head>
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">About</h1>
        <p className="text-gray-600 dark:text-gray-300">Zion builds open, sovereign AI infrastructure and public-good protocols.</p>
      </div>
    </>
  );
}