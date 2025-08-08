import Head from 'next/head';
import Link from 'next/link';
import services from '../../data/services/services.json';

type Service = {
  slug: string;
  name: string;
  description: string;
};

export default function ProductsIndex() {
  const items = (services as Service[]).slice(0, 6);
  return (
    <div>
      <Head>
        <title>Products — Zion Tech Solutions</title>
        <meta name="description" content="AI tools and accelerators to speed up delivery." />
      </Head>
      <h1 className="text-3xl font-bold mb-6">Products & Accelerators</h1>
      <div className="grid md:grid-cols-3 gap-4">
        {items.map((s) => (
          <div key={s.slug} className="enhanced-card">
            <h3 className="font-semibold">{s.name}</h3>
            <p className="text-sm opacity-80 mt-1">{s.description}</p>
          </div>
        ))}
      </div>
      <div className="mt-6">
        <Link href="/contact"><a className="enhanced-button enhanced-button-primary">Request a Demo</a></Link>
      </div>
    </div>
  );
}