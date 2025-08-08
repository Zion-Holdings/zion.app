import Head from 'next/head';
import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Zion</title>
        <meta name="description" content="Zion Protocol — Open, sovereign, trusted AI." />
      </Head>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">Zion Protocol</h1>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl">Open, sovereign, trusted AI infrastructure. Explore the Foundation portal and governance commitments.</p>
        <div className="flex gap-3 text-sm">
          <Link href="/foundation"><a className="px-3 py-2 rounded border">Foundation</a></Link>
          <Link href="/governance/trust"><a className="px-3 py-2 rounded border">Governance & Trust</a></Link>
        </div>
      </div>
    </>
  );
}