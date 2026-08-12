import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { allServices } from '@/data/servicesData';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';

interface PageProps {
  params: Promise<{ industry: string }>;
}

export async function generateStaticParams() {
  const industries = Array.from(new Set(allServices.map(s => s.industry).filter(Boolean)));
  return industries.map(industry => ({ industry }));
}

export async function generateMetadata({ params }: PageProps) {
  const { industry } = await params;
  const title = industry.replace(/-/g, ' ');
  return {
    title,
    description: `${title} IT and AI solutions from Zion Tech Group.`,
    alternates: { canonical: `/industry-solutions/${industry}/` },
  };
}

export default async function IndustrySolutionPage({ params }: PageProps) {
  const { industry } = await params;
  const decoded = decodeURIComponent(industry).replace(/-/g, ' ');
  const services = allServices.filter(s => (s.industry || '').toLowerCase() === decoded.toLowerCase());
  if (!services.length) notFound();

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navigation />
      <main className="container-page py-16">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-4">{decoded}</h1>
          <p className="text-slate-300 text-lg mb-8">Service catalog for {decoded} — {services.length} solution{services.length === 1 ? '' : 's'} available.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(svc => (
              <Link key={svc.id} href={`/services/${svc.id}/`} className="glass-card flex flex-col hover:border-purple-500/40 hover:shadow-lg hover:shadow-purple-500/10 group">
                <h3 className="text-sm font-semibold text-white mb-2 group-hover:text-purple-300">{svc.title}</h3>
                <p className="text-slate-400 text-xs flex-1 line-clamp-3">{svc.description}</p>
                <span className="text-purple-300 text-xs font-semibold mt-3">View service →</span>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
