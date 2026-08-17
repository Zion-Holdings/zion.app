import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: 'Configurator | Zion Tech Group',
  description: 'Start a configurator-style intake for Zion Tech Group services.',
  openGraph: {
    title: 'Configurator | Zion Tech Group',
    description: 'Tell us your constraints and get a short engagement plan.',
    url: 'https://ziontechgroup.com/configurator/',
    type: 'website',
  },
  alternates: { canonical: '/configurator/' },
};

export default function ConfiguratorPage() {
  return (
    <StandardPage
      title="Configurator"
      subtitle="Pick your priorities and we’ll propose a lightweight engagement plan."
      breadcrumbItems={[
        { label: 'Home', href: '/' },
        { label: 'Configurator' },
      ]}
    >
      <div className="max-w-3xl mx-auto">
        <p className="text-slate-300 text-lg leading-relaxed mb-8">
          Use this intake to scope cloud, security, data, automation, or AI work. We’ll return a short plan with recommended services, milestones, and timeline.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a href="/contact" className="btn-primary text-center">Start intake</a>
          <a href="/services" className="btn-secondary text-center">Browse services</a>
        </div>
      </div>
    </StandardPage>
  );
}
