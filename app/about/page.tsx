import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata = {
  title: 'About | Zion Tech Group',
  description: 'About Zion Tech Group — mission, leadership, and what we build.',

};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-950 py-20">
      <div className="container-page">
        <Breadcrumb
          items={[
            { label: 'Home', href: '/' },
            { label: 'About', href: '/about' },
          ]}
          className="mb-8"
        />
        <h1 className="text-4xl font-bold text-white mb-4">About Zion Tech Group</h1>
        <p className="text-slate-300 text-lg leading-relaxed max-w-3xl">
          Zion Tech Group designs and builds AI-driven systems for enterprises that need reliable automation,
          secure infrastructure, and measurable ROI. We operate across AI services, IT delivery, cloud,
          security, data, and automation — turning complex requirements into production-ready platforms.
        </p>
      </div>
    </main>
  );
}
