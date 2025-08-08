import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Zion</title>
      </Head>
      <div className="py-16">
        <h1 className="text-3xl font-bold text-white">Welcome to Zion</h1>
        <p className="mt-2 text-white/80">Explore our AI Marketplace of curated IT services.</p>
        <Link href="/services"><a className="mt-6 inline-block rounded-full px-5 py-2 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 text-white">Browse Services</a></Link>
      </div>
    </div>
  );
};

export default Home;