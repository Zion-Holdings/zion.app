import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Logistics Route Optimization | Zion Tech Group",
  description: "AI-powered route planning for delivery fleets. Reduces fuel costs by 20%, improves on-time delivery, and handles real-time traffic and weather adjustments.",
  openGraph: {
    title: "Logistics Route Optimization | Zion Tech Group",
    description: "AI-powered route planning for delivery fleets. Reduces fuel costs by 20%, improves on-time delivery, and handles real-time traffic and weather adjustments.",
    url: "https://ziontechgroup.com/services/logistics-route-optimization/",
    type: 'website',
  },
  alternates: { canonical: "/services/logistics-route-optimization/" },
};

export default function LogisticsRouteOptimizationPage() {
  return (
    <StandardPage
      title="Logistics Route Optimization"
      subtitle="AI-powered route planning for delivery fleets. Reduces fuel costs by 20%, improves on-time delivery, and handles real-time traffic and weather adjustments."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services/" },
        { label: "Logistics Route Optimization" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-5xl mx-auto">AI-powered route planning for delivery fleets. Reduces fuel costs by 20%, improves on-time delivery, and handles real-time traffic and weather adjustments.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from a Wayback Machine snapshot (20260614135756) of ziontechgroup.com.</p>
    </StandardPage>
  );
}
