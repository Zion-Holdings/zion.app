// app/configurator/page.tsx - Service Configurator Wizard
// Server component: fetches data server-side, lazy-loads the client wizard.
import { Suspense } from 'react';
import { getServicesSearchIndex, getServicesCount } from '@/lib/services-data';
import type { ServiceSummary } from '@/lib/services-data';
import dynamic from 'next/dynamic';

const ServiceConfiguratorWidget = dynamic(
  () => import('@/components/ServiceConfiguratorWidget'),
  { ssr: false, loading: () => <p className="text-slate-400">Loading configurator…</p> }
);

export const metadata = {
  title: 'Service Configurator | Zion Tech Group',
  description: 'Answer a few questions and get a tailored AI/IT service proposal.',
};

export default function ConfiguratorPage() {
  // Server-side: read a lean projection of the services data.
  // The 516 KB trimmed JSON is parsed here, only fields needed by the wizard are passed down.
  const services = getServicesSearchIndex();
  const total = getServicesCount();

  return (
    <Suspense fallback={<p className="text-slate-400">Loading configurator…</p>}>
      <ServiceConfiguratorWidget services={services} totalServices={total} />
    </Suspense>
  );
}
