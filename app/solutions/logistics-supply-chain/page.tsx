import type { Metadata } from 'next';
import Link from 'next/link';
import PageWrapper from '@/components/PageWrapper';
import Section from '@/components/Section';

export const metadata: Metadata = {
  title: 'Logistics & Supply Chain | Zion Tech Group',
  description: 'AI-powered logistics and supply chain solutions.',
  alternates: { canonical: '/solutions/logistics-supply-chain' },
};

const services = [
  { icon: "🚚", name: "Route Optimization", href: "/ai-route-optimizer", desc: "AI route planning with real-time traffic and weather." },
  { icon: "🏭", name: "Warehouse Automation", href: "/smart-inventory", desc: "Automated picking, sorting, and inventory management." },
  { icon: "📡", name: "Fleet Management", href: "/iot-platform", desc: "Real-time vehicle tracking, fuel optimization, maintenance." },
  { icon: "📦", name: "Supply Chain Visibility", href: "/supply-chain-optimizer", desc: "End-to-end supply chain tracking and optimization." },
  { icon: "🔮", name: "Demand Forecasting", href: "/ai-predictive-analytics", desc: "ML-powered demand prediction for inventory planning." },
  { icon: "📊", name: "Logistics Analytics", href: "/data-analytics", desc: "Cost analysis, delivery performance, carrier optimization." },
];

export default function SolutionPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <PageWrapper>
        <div className="text-center mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-purple-400 mb-3">Logistics & Supply Chain</p>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-4">Logistics & Supply Chain</h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto leading-relaxed">
            AI-powered logistics and supply chain solutions.
          </p>
        </div>
      </PageWrapper>

      <Section>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Link key={i} href={s.href} className="group rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/30 transition-colors">
              <span className="text-3xl">{s.icon}</span>
              <h3 className="mt-3 text-lg font-semibold text-white group-hover:text-purple-300">{s.name}</h3>
              <p className="mt-2 text-sm text-slate-400">{s.desc}</p>
            </Link>
          ))}
        </div>
      </Section>

      <Section variant="accent">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-3">Need Custom Solutions?</h2>
          <p className="text-slate-300 mb-6">Our experts can tailor solutions to your specific requirements.</p>
          <Link href="/consultation" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3 text-sm font-semibold text-white">Schedule a Consultation</Link>
        </div>
      </Section>
    </main>
  );
}