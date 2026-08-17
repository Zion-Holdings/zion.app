import type { Metadata } from 'next';
import PageTemplate from '@/components/PageTemplate';

export const metadata: Metadata = {
  title: 'Services | Zion Tech Group',
  description: 'End-to-end AI, cloud, and growth operations services: help desk automation, development acceleration, outreach, cost optimization, DevOps, fleet, observability, data, and more.',
  alternates: { canonical: '/services' },
};

export default function ServicesPage() {
  return (
    <PageTemplate
      title="AI & IT Services"
      description="Browse our catalog of 14,000+ AI and IT services across 30+ categories — from machine learning and cybersecurity to cloud infrastructure, automation, DevOps, micro-SaaS, and IoT."
      category="Service Catalog"
      heroIcon="🧩"
      actions={[
        { label: 'Browse All Categories', href: '/services', style: 'primary' },
        { label: 'Get a Free Proposal', href: '/contact', style: 'secondary' },
      ]}
      breadcrumbItems={[
        { label: 'Home', href: '/' },
        { label: 'Services', href: '/services' },
      ]}
      layout="hero"
    >
      <div className="max-w-4xl mx-auto">
        <p className="text-slate-300 text-lg leading-relaxed mb-8">
          Zion Tech Group offers transparent, real-time AI and IT services that scale — from machine learning and cybersecurity to cloud infrastructure and automation.
        </p>
        <p className="text-slate-300 text-lg leading-relaxed">
          Browse our complete service catalog by category below, or use the search tools to find the right solution for your business.
        </p>
      </div>
    </PageTemplate>
  );
}