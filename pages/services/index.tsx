import Head from 'next/head';
import Link from 'next/link';

export default function ServicesIndex() {
  return (
    <div>
      <Head>
        <title>Services — Zion Tech Solutions</title>
        <meta name="description" content="AI development, cloud, data analytics, and blockchain services." />
      </Head>
      <h1 className="text-3xl font-bold mb-6">Services</h1>
      <ul className="grid md:grid-cols-2 gap-4">
        <li className="enhanced-card"><Link href="/services/ai-development"><a className="underline">AI Development</a></Link></li>
        <li className="enhanced-card"><Link href="/services/cloud-services"><a className="underline">Cloud & MLOps</a></Link></li>
        <li className="enhanced-card"><Link href="/services/data-analytics"><a className="underline">Data Analytics</a></Link></li>
        <li className="enhanced-card"><Link href="/services/blockchain"><a className="underline">Web3 & Blockchain</a></Link></li>
      </ul>
    </div>
  );
}