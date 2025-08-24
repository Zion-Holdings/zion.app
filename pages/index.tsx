import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Zion</title>
      </Head>
      <div className="py-12">
        <h1 className="text-3xl font-bold">Zion</h1>
        <p className="mt-2 opacity-70">Welcome to Zion. Explore our upcoming global summit.</p>
        <Link href="/summit"><a className="mt-4 inline-block underline">Go to Summit</a></Link>
      </div>
    </div>
  );
}