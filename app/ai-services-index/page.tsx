import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: 'AI Services Index | Zion Tech Group',
  description: 'Index of Zion Tech Group AI services and solutions.',
  openGraph: {
    title: 'AI Services Index | Zion Tech Group',
    description: 'A focused view of AI-native services for automation, assistants, analytics, and infrastructure.',
    url: 'https://ziontechgroup.com/ai-services/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Services Index | Zion Tech Group',
    description: 'A focused view of AI-native services for automation, assistants, analytics, and infrastructure.',
  },
  alternates: { canonical: '/ai-services/' },
};


export default function AiServicesIndexPage() {
  return (
<>
    <StandardPage
      title="AI Services"
      subtitle="A focused view of AI-native services for automation, assistants, analytics, and infrastructure."
      breadcrumbItems={[
        { label: 'Home', href: '/' },
        { label: 'AI Services' },
      ]}
      actions={[
        { label: 'Browse services', href: '/services/', style: 'primary' },
        { label: 'Contact us', href: '/contact/', style: 'secondary' },
      ]}
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h3 className="text-white font-semibold mb-2">AI automation</h3>
          <p className="text-slate-400 text-sm">Reduce manual work with triage, routing, and knowledge assistants.</p>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h3 className="text-white font-semibold mb-2">Managed AI</h3>
          <p className="text-slate-400 text-sm">Production monitoring, cost controls, and governance for AI features.</p>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h3 className="text-white font-semibold mb-2">AI strategy</h3>
          <p className="text-slate-400 text-sm">Roadmaps, use-case selection, and executive-ready ROI planning.</p>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row gap-3 mt-10">
        <a href="/contact/" className="btn-primary text-center">Talk to an Engineer</a>
        <a href="/services/" className="btn-secondary text-center">All Services</a>
      </div>

      <div className="mt-12 rounded-2xl border border-slate-800 bg-slate-900/60 p-8 max-w-5xl mx-auto">
        <h2 className="text-xl font-bold text-white mb-4">How we deliver AI</h2>
        <ul className="list-disc list-inside text-slate-300 space-y-2 text-sm">
          <li>Use-case selection tied to revenue, cost, or risk reduction.</li>
          <li>Automation with guardrails, observability, and review loops.</li>
          <li>Production support, monitoring, and continuous improvement.</li>
          <li>Executive-ready reporting on adoption, value, and ROI.</li>
        </ul>
        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <a href="/services/" className="btn-primary text-center">Browse services</a>
          <a href="/contact/" className="btn-secondary text-center">Talk to us</a>
        </div>
      </div>
    </StandardPage>
  </>
  );
}