import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Zion OS</title>
        <meta name="description" content="Zion OS - Protocol Nation" />
      </Head>
      <main className="space-y-6">
        <h1 className="text-3xl font-semibold">Zion OS</h1>
        <p className="text-gray-600 dark:text-gray-300">Explore the Year 10 simulator.</p>
        <div className="flex gap-4">
          <Link href="/simulator/2040"><a className="underline">Simulator 2040</a></Link>
          <Link href="/vision/year10"><a className="underline">Year 10 Vision</a></Link>
        </div>
      </main>
    </div>
  );
};

export default Home;