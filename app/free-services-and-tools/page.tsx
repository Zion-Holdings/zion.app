import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'Free Services & Tools | Zion Tech Group',
  description:
    'Explore free AI and IT utilities from Zion Tech Group: SSL check, AI code review, ROI calculator, readiness audit, and more.',
};

const tools = [
  { title: 'AI Readiness Audit', desc: 'Assess your organization’s readiness for AI adoption.', href: '/tools/ai-readiness-audit/' },
  { title: 'SSL Checker', desc: 'Quick checks for certificate state and common exposure signals.', href: '/tools/ssl-checker/' },
  { title: 'AI Code Review', desc: 'AI-assisted review checkpoints for faster, safer changesets.', href: '/tools/ai-code-review/' },
  { title: 'AI Service Router', desc: 'Route requests across AI services with fallbacks and logging.', href: '/tools/ai-service-router/' },
  { title: 'Port Scanner', desc: 'Fast external port exposure checks for hardening workflows.', href: '/tools/port-scanner/' },
  { title: 'ROI Calculator', desc: 'Estimate return on AI and automation investments.', href: '/tools/roi-calculator/' },
];

export default function FreeToolsPage() {
  return (
    <main className="min-h-screen bg-slate-950 py-20">
      <div className="container-page">
        <Breadcrumb
          items={[
            { label: 'Home', href: '/' },
            { label: 'Free Services & Tools', href: '/free-services-and-tools' },
          ]}
          className="mb-8"
        />
        <h1 className="text-4xl font-bold text-white mb-4">Free Services & Tools</h1>
        <p className="text-slate-300 text-lg leading-relaxed max-w-3xl">
          Zion Tech Group offers practical AI and IT utilities you can use today. Use these to
          validate readiness, harden posture, estimate value, and speed up safe delivery.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {tools.map((t) => (
            <a key={t.href} href={t.href} className="block rounded-xl border border-slate-800 bg-slate-900/60 p-6 hover:border-cyan-600 transition-colors">
              <h2 className="text-xl font-semibold text-white">{t.title}</h2>
              <p className="mt-2 text-slate-300">{t.desc}</p>
              <span className="mt-4 inline-block text-cyan-400">Open tool →</span>
            </a>
          ))}
        </div>

        <div className="mt-12 rounded-xl border border-slate-800 bg-slate-900/60 p-6">
          <h2 className="text-xl font-semibold text-white">Want a tailored setup?</h2>
          <p className="mt-2 text-slate-300">
            If you want help choosing tools or deploying them in your workflow, contact us for
            a short scoping call.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <a href="/contact/" className="rounded-lg bg-cyan-500 px-4 py-2 font-semibold text-slate-950">Contact us</a>
            <a href="/services/" className="rounded-lg border border-slate-700 px-4 py-2 font-semibold text-slate-200">View services</a>
          </div>
        </div>
      </div>
    </main>
  );
}
