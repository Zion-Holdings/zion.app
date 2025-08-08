import Head from 'next/head';
import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Zion</title>
      </Head>
      <div className="py-12">
        <h1 className="text-4xl font-extrabold">Zion</h1>
        <p className="mt-3 text-gray-700">AI-native, trustless, talent-first.</p>
        <div className="mt-6 flex gap-4">
          <Link href="/manifesto"><a className="rounded-md bg-black px-4 py-2 text-white">Manifesto</a></Link>
          <Link href="/roadmap"><a className="rounded-md border px-4 py-2">Roadmap</a></Link>
        </div>
      </div>
    </>
  );
}