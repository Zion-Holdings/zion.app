import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Zion</title>
      </Head>
      <div className="py-12">
        <h1 className="text-3xl font-semibold mb-4">Welcome to Zion</h1>
        <p className="text-gray-600 mb-6">Explore fundraising tools for every stage.</p>
        <Link href="/fundraising"><a className="px-4 py-2 rounded bg-black text-white dark:bg-white dark:text-black">Go to Fundraising</a></Link>
      </div>
    </>
  );
}