import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Link from 'next/link';
import EnhancedLayout from '@/components/layout/EnhancedLayout';
import services from '@/data/services/services.json';

const ServiceDetail: NextPage = () => {
  const router = useRouter();
  const { slug } = router.query as { slug?: string };
  const items = services as any[];
  const service = items.find((s) => s.slug === slug);

  if (!service) {
    return (
      <EnhancedLayout>
        <Head>
          <title>Service Not Found - Zion Tech Solutions</title>
        </Head>
        <div className="space-y-4">
          <h1 className="text-xl font-semibold">Service not found</h1>
          <Link href="/services"><a className="text-blue-600 hover:underline">Back to Services</a></Link>
        </div>
      </EnhancedLayout>
    );
  }

  const priceRange = `$${service.priceRangeUSD[0]} - $${service.priceRangeUSD[1]}`;

  return (
    <EnhancedLayout>
      <Head>
        <title>{service.name} - Zion Tech Solutions</title>
      </Head>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-4">
          <img src={`https://picsum.photos/seed/${encodeURIComponent(service.slug)}/1200/600`} alt={service.name} className="w-full rounded-lg border border-gray-200 dark:border-gray-800" />
          <div>
            <h1 className="text-2xl font-semibold">{service.name}</h1>
            <p className="opacity-80">Category: {service.category}</p>
          </div>
          <p className="leading-relaxed">{service.description}</p>
          <div className="flex flex-wrap gap-2">
            <span className="text-xs px-2 py-1 rounded-full bg-gray-100 dark:bg-zinc-800 text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-zinc-700">{service.category}</span>
          </div>
        </div>
        <aside className="md:col-span-1 space-y-3 p-4 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-zinc-900 h-max">
          <div className="text-sm opacity-70">Price Range</div>
          <div className="text-xl font-semibold">{priceRange}</div>
          <Link href={`/contact?subject=${encodeURIComponent('Quote request: ' + service.name)}`}>
            <a className="inline-flex items-center justify-center w-full px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700">Request Quote</a>
          </Link>
          <Link href="/services"><a className="text-sm text-blue-600 hover:underline">Back to Services</a></Link>
        </aside>
      </div>
    </EnhancedLayout>
  );
};

export default ServiceDetail;