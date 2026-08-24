import { notFound } from 'next/navigation';
import Link from 'next/link';
import StandardPage from '@/components/StandardPage';
import { getServicesData } from '@/lib/services-data';
import type { ServiceSummary } from '@/lib/services-data';

// Server component — data is fetched server-side only.
// Dynamic route uses fallback for incremental static regeneration.

export const dynamic = 'force-static';
export const dynamicParams = false;
export const revalidate = false;
export const runtime = 'nodejs';

export async function generateStaticParams() {
  // Do not pre-render service pages at build time — too many slugs.
  // Pages are generated on-demand via ISR with fallback.
  return [];
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const services = await getServicesData();
  const service = services.find(s => s.url?.includes(slug)) || undefined;
  if (!service) return { title: 'Service Not Found' };
  const title = [service.title, 'Zion Tech Group'].filter(Boolean).join(' - ');
  return {
    title,
    description: service.description || 'AI/IT service by Zion Tech Group.',
    alternates: { canonical: `https://ziontechgroup.com/services/${slug}` },
    openGraph: {
      title: service.title || 'Service',
      description: service.description || 'AI/IT service by Zion Tech Group.',
      url: `https://ziontechgroup.com/services/${slug}`,
      type: 'service',
    },
  };
}

export default async function DynamicServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const services = await getServicesData();
  const service = services.find(s => s.url?.includes(slug)) || undefined;

  if (!service) {
    notFound();
  }

  const title = service.title || slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  const description = service.description || 'AI/IT service by Zion Tech Group.';
  const features = service.features || ['Tailored automation', 'Enterprise integration', 'Delivery with measurable outcomes'];

  return (
    <StandardPage
      title={title}
      breadcrumbItems={[
        { label: 'Home', href: '/' },
        { label: 'Services', href: '/services' },
        { label: title },
      ]}
    >
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-4">{title}</h1>
        <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">{description}</p>

        <div className="bg-slate-900 rounded-xl p-6 mb-8 text-left">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            {features.map((feature, idx) => (
              <li key={idx}>{feature}</li>
            ))}
          </ul>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
          <Link href="/services" className="text-purple-300 hover:text-purple-200">← Back to All Services</Link>
          <Link href="/tools" className="text-slate-400 hover:text-slate-300">Try our free tools →</Link>
        </div>
        <div className="text-center mt-8">
          <a
            href="https://calendly.com/kleber-ziontechgroup/consultation"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-colors"
          >
            Book a Consultation
          </a>
        </div>
      </div>
    </StandardPage>
  );
}