import Link from 'next/link';

export const metadata = {
  title: 'New AI Services | Zion Tech Group',
  description: 'Explore Zion Tech Group\'s newest AI service offerings and recent capabilities.',
  alternates: { canonical: '/new-ai-services/' },
};

export default function NewAIServicesPage() {
  return (
    <div className="relative min-h-screen bg-slate-950">
      <article className="relative mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl mb-6">
          New AI Services
        </h1>
        <p className="text-lg text-slate-300 mb-8">
          Our latest AI capabilities are focused on measurable outcomes, safer automation, and faster deployment cycles.
        </p>

        <section className="prose prose-invert max-w-none">
          <h2>What is new</h2>
          <ul>
            <li>AI customer success and churn prevention</li>
            <li>AI observability and anomaly detection</li>
            <li>Autonomous QA and code deployment</li>
            <li>AI performance monitoring for executive governance</li>
          </ul>

          <h2>Why it matters</h2>
          <p>
            Buyers in 2026 are shifting from experimental AI to operating models with clear ownership, monitoring, and rollback criteria.
            These services reduce risk and accelerate time to value.
          </p>
        </section>

        <section className="mt-12 grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-violet-500/30 bg-slate-900/60 p-6">
            <h2 className="mb-2 text-xl font-bold text-white">View all services</h2>
            <p className="text-slate-300">Browse the complete portfolio and implementation patterns.</p>
            <Link href="/services/" className="mt-4 inline-block rounded-xl bg-white px-6 py-3 text-sm font-semibold text-slate-900">
              Services
            </Link>
          </div>
          <div className="rounded-2xl border border-violet-500/30 bg-slate-900/60 p-6">
            <h2 className="mb-2 text-xl font-bold text-white">Talk to us</h2>
            <p className="text-slate-300">Get a scoped pilot plan for your environment.</p>
            <Link href="/contact/" className="mt-4 inline-block rounded-xl border border-white/30 px-6 py-3 text-sm font-semibold text-white">
              Contact
            </Link>
          </div>
        </section>
      </article>
    </div>
  );
}
