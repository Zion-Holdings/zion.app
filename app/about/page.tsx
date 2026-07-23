import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'About | Zion Tech Group',
  description:
    'About Zion Tech Group — mission, leadership, service areas, and what we build.',
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
          Zion Tech Group is a leading provider of global IT services, offering a
          comprehensive suite of solutions to businesses of all sizes. We help organizations
          achieve their objectives by combining deep industry expertise with cutting-edge
          technology across AI, cloud, cybersecurity, data, and automation.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <section className="rounded-xl border border-slate-800 bg-slate-900/60 p-6">
            <h2 className="text-xl font-semibold text-white">What we do</h2>
            <p className="mt-2 text-slate-300">
              From cloud strategy and implementation to managed services and security, we
              provide end-to-end support for modernization, cost optimization, and
              resilient operations.
            </p>
            <ul className="mt-3 list-disc pl-5 text-slate-300">
              <li>Cloud migration and optimization</li>
              <li>AI-first automation and observability</li>
              <li>Cybersecurity and incident response</li>
              <li>Data pipeline engineering</li>
            </ul>
          </section>

          <section className="rounded-xl border border-slate-800 bg-slate-900/60 p-6">
            <h2 className="text-xl font-semibold text-white">How we work</h2>
            <p className="mt-2 text-slate-300">
              We align on measurable outcomes, build with production standards, and
              maintain systems so teams can focus on growth rather than outages.
            </p>
            <ul className="mt-3 list-disc pl-5 text-slate-300">
              <li>Outcome-based engagement models</li>
              <li>Platform engineering and SRE practices</li>
              <li>Security-first architecture reviews</li>
              <li>Executive-friendly reporting and ROI tracking</li>
            </ul>
          </section>

          <section className="rounded-xl border border-slate-800 bg-slate-900/60 p-6 md:col-span-2">
            <h2 className="text-xl font-semibold text-white">Our approach</h2>
            <p className="mt-2 text-slate-300">
              Zion Tech Group operates at the intersection of AI and IT delivery. We don’t
              sell generic solutions — we design platforms tailored to each organization’s
              operating model, compliance needs, and growth targets.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a href="/services/" className="rounded-lg bg-cyan-500 px-4 py-2 font-semibold text-slate-950">Explore services</a>
              <a href="/contact/" className="rounded-lg border border-slate-700 px-4 py-2 font-semibold text-slate-200">Talk to us</a>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
