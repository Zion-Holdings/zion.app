import Link from 'next/link';

export const metadata = {
  title: 'Free AI Resources | Zion Tech Group',
  description: 'Free AI resources, templates, and learning materials for IT teams and developers. Accelerate your AI adoption with our comprehensive resource library.',
  keywords: ['AI resources', 'AI templates', 'free AI', 'learning materials', 'Zion Tech Group'],
  authors: { name: 'Zion Tech Group' },
  openGraph: {
    title: 'Free AI Resources | Zion Tech Group',
    description: 'Free AI resources, templates, and learning materials for IT teams.',
    url: 'https://ziontechgroup.com/free-resources/',
    type: 'article',
    siteName: 'Zion Tech Group',
  },
  alternates: { canonical: 'https://ziontechgroup.com/free-resources/' },
};

export default function FreeResourcesPage() {
  return (
    <div className="relative min-h-screen bg-slate-950">
      <article className="relative mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl mb-6">
          Free AI Resources
        </h1>
        <p className="text-lg text-slate-300 mb-8">
          Resources, templates, and learning materials to accelerate your AI adoption
        </p>
        
        <section className="prose prose-invert max-w-none">
          <h2>Why Free Resources Matter</h2>
          <p>
            AI implementation requires the right foundations. Our free resources provide 
            proven frameworks, checklists, and templates that save months of trial and error.
          </p>

          <h2>Available Resources</h2>
          <ul>
            <li><strong>AI Readiness Assessment</strong> - 20-question framework to evaluate your organization's AI maturity</li>
            <li><strong>Vendor Evaluation Checklist</strong> - Criteria for selecting AI vendors and partners</li>
            <li><strong>Implementation Playbook</strong> - Step-by-step guide for deploying AI solutions</li>
            <li><strong>ROI Calculator Template</strong> - Estimate business impact and justify AI investments</li>
            <li><strong>Security & Compliance Checklist</strong> - Ensure GDPR, CCPA, HIPAA compliance in AI systems</li>
          </ul>

          <h2>Download Our AI Blueprint</h2>
          <p>
            Get our comprehensive AI implementation blueprint delivered to your email.
          </p>
        </section>

        <section className="mt-12 grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-violet-500/30 bg-slate-900/60 p-6">
            <h2 className="mb-2 text-xl font-bold text-white">Get Started</h2>
            <p className="text-slate-300">Contact us for a personalized AI assessment.</p>
            <div className="mt-4">
              <Link href="/contact/" className="rounded-xl bg-white px-6 py-3 text-sm font-semibold text-slate-900 inline-block">
                Contact Us
              </Link>
            </div>
          </div>
          <div className="rounded-2xl border border-violet-500/30 bg-slate-900/60 p-6">
            <h2 className="mb-2 text-xl font-bold text-white">Our Services</h2>
            <p className="text-slate-300">See how we can help transform your business.</p>
            <Link
              href="/services/"
              className="mt-4 inline-block rounded-xl border border-white/30 px-6 py-3 text-sm font-semibold text-white"
            >
              Browse Services
            </Link>
          </div>
        </section>
      </article>
    </div>
  );
}