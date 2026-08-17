import type { Metadata } from 'next';
import Link from 'next/link';
import PageWrapper from '@/components/PageWrapper';
import Section from '@/components/Section';

export const metadata: Metadata = {
  title: 'Financial Services & FinTech | Zion Tech Group',
  description: 'AI-powered solutions for banking, insurance, fintech, and capital markets.',
  alternates: { canonical: '/solutions/financial-services' },
};

const services = [
  { icon: "💳", name: "Fraud Detection AI", href: "/ai-fraud-detection", desc: "Real-time transaction monitoring with 94% detection rate." },
  { icon: "📊", name: "Risk Analytics", href: "/ai-predictive-analytics", desc: "Credit risk modeling, portfolio optimization, stress testing." },
  { icon: "🔒", name: "Compliance Automation", href: "/compliance-automation", desc: "SOC 2, PCI-DSS, SOX compliance monitoring and reporting." },
  { icon: "💱", name: "Algorithmic Trading", href: "/ai-stock-portfolio-manager", desc: "ML-powered trading strategies and portfolio management." },
  { icon: "🏦", name: "Digital Banking Platform", href: "/ai-smart-invoice", desc: "Modern core banking with AI-powered customer experiences." },
  { icon: "📱", name: "Mobile Banking", href: "/mobile-app-development", desc: "Secure mobile banking with biometric authentication." },
];

export default function SolutionPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <PageWrapper>
        <div className="text-center mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-purple-400 mb-3">Financial Services & FinTech</p>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-4">Financial Services & FinTech</h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto leading-relaxed">
            AI-powered solutions for banking, insurance, fintech, and capital markets.
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