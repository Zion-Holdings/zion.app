
export const metadata = { title: "Financial Services & FinTech", description: "AI-powered solutions for banking, insurance, fintech, and capital markets." };
import Link from 'next/link';

export default function SolutionPage() {
  const services = [
            { icon: "💳", name: "Fraud Detection AI", href: "/ai-fraud-detection", desc: "Real-time transaction monitoring with 94% detection rate." },
            { icon: "📊", name: "Risk Analytics", href: "/ai-predictive-analytics", desc: "Credit risk modeling, portfolio optimization, stress testing." },
            { icon: "🔒", name: "Compliance Automation", href: "/compliance-automation", desc: "SOC 2, PCI-DSS, SOX compliance monitoring and reporting." },
            { icon: "💱", name: "Algorithmic Trading", href: "/ai-stock-portfolio-manager", desc: "ML-powered trading strategies and portfolio management." },
            { icon: "🏦", name: "Digital Banking Platform", href: "/ai-smart-invoice", desc: "Modern core banking with AI-powered customer experiences." },
            { icon: "📱", name: "Mobile Banking", href: "/mobile-app-development", desc: "Secure mobile banking with biometric authentication." },
  ];
  return (
    <div className="relative overflow-hidden">
      <section className="relative overflow-hidden border-b border-purple-500/20 bg-gradient-to-b from-slate-950 via-purple-950/30 to-slate-900">
        <div className="relative mx-auto max-w-5xl px-4 pb-20 pt-24 sm:px-6 lg:px-8">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-purple-400">Financial Services & FinTech</p>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Financial Services & FinTech</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">AI-powered solutions for banking, insurance, fintech, and capital markets.</p>
        </div>
      </section>
      <section className="bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Link key={i} href={s.href} className="group rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/30 transition-colors">
                <span className="text-3xl">{s.icon}</span>
                <h3 className="mt-3 text-lg font-semibold text-white group-hover:text-purple-300">{s.name}</h3>
                <p className="mt-2 text-sm text-slate-400">{s.desc}</p>
              </Link>
            ))}
          </div>
          <div className="mt-12 rounded-2xl border border-purple-500/20 bg-gradient-to-r from-purple-900/30 to-pink-900/20 p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">Need Custom Solutions?</h2>
            <p className="text-slate-300 mb-6">Our experts can tailor solutions to your specific requirements.</p>
            <Link href="/consultation" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3 text-sm font-semibold text-white">Schedule a Consultation</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
