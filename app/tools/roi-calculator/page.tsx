import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: 'ROI Calculator | Zion Tech Group',
  description: 'Estimate project ROI and timeline from baseline metrics.',
  openGraph: {
    title: 'ROI Calculator',
    description: 'Simple AI/IT ROI estimator.',
    url: 'https://ziontechgroup.com/tools/roi-calculator/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ROI Calculator',
    description: 'Simple AI/IT ROI estimator.',
  },
  alternates: { canonical: '/tools/roi-calculator/' },
};

const INPUTS = [
  {
    label: 'Monthly operational cost',
    hint: 'Current labor, tooling, and exception handling cost for the target workflow.',
  },
  {
    label: 'Automation target',
    hint: 'Percent of repeatable work you expect to automate in the first 90 days.',
  },
  {
    label: 'Implementation weeks',
    hint: 'Planned delivery duration including pilot, instrumentation, and handoff.',
  },
  {
    label: 'Risk allowance',
    hint: 'Buffer for change management, fallback handling, and exceptions.',
  },
];


export default function RoiCalculatorPage() {
  return (
<>
    <JsonLd data={{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "ROI Calculator",
  "description": "Estimate project ROI and timeline from baseline metrics.",
  "applicationCategory": "BusinessApplication",
  "applicationSuite": "Zion Tech Group Tools",
  "operatingSystem": "Any",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Zion Tech Group",
    "url": "https://ziontechgroup.com"
  },
  "url": "https://ziontechgroup.com/tools/roi-calculator/",
  "@id": "https://ziontechgroup.com/tools/roi-calculator/",
  "featureList": [
    "Free to use",
    "No installation required",
    "Browser-based"
  ],
  "softwareVersion": "1.0"
}} />
    <StandardPage
      title="ROI Calculator"
      subtitle="Use these inputs to build an early ROI estimate before scoping a pilot."
      breadcrumbItems={[
        { label: 'Home', href: '/' },
        { label: 'Tools' },
        { label: 'ROI Calculator' },
      ]}
      actions={[
        { label: 'Browse all tools', href: '/tools/', style: 'primary' },
        { label: 'Start a project', href: '/contact/', style: 'secondary' },
      ]}
    >
      <div className="max-w-5xl mx-auto grid gap-4">
        <div className="grid gap-4 md:grid-cols-2">
          {INPUTS.map((item) => (
            <div key={item.label} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
              <label className="block text-sm text-slate-300 mb-1">{item.label}</label>
              <p className="text-slate-400 text-xs mb-3">{item.hint}</p>
              <input
                type="text"
                placeholder="0"
                className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-white outline-none focus:border-purple-500"
              />
            </div>
          ))}
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h2 className="text-xl font-bold text-white mb-2">How to use this estimate</h2>
          <p className="text-slate-300 text-sm leading-relaxed mb-3">
            Start with one workflow, keep scope small, and measure weekly. Use this estimate to set expectations with stakeholders and to choose the right engagement model.
          </p>
          <p className="text-slate-300 text-sm leading-relaxed">
            Include operational costs: monitoring, on-call coverage, training, and exception handling. Ignoring these creates unrealistic ROI models.
          </p>
        </div>

        <div className="rounded-2xl border border-purple-500/30 bg-purple-900/20 p-6">
          <h2 className="text-xl font-bold text-white mb-2">Want a validated estimate?</h2>
          <p className="text-slate-300 text-sm mb-4">
            Share your baseline numbers and target workflow. We will return a short list of best-fit services with estimated ROI and timeline.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/contact/" className="btn-primary text-center">Contact us</Link>
            <Link href="/services/" className="btn-secondary text-center">Browse services</Link>
          </div>
        </div>
      </div>
      <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
        <h2 className="text-lg font-bold text-white mb-3">Related offerings</h2>
        <div className="grid gap-3 sm:grid-cols-3">
          <Link href="/services/" className="rounded-xl border border-slate-700 bg-slate-950 p-4 hover:border-purple-500/40">
            <h3 className="text-white font-semibold text-sm mb-1">Enterprise Services</h3>
            <p className="text-slate-400 text-xs mb-2">AI, IT, security, and data programs with measurable outcomes.</p>
            <span className="text-purple-300 text-xs font-semibold inline-block">View services →</span>
          </Link>
          <Link href="/solutions/" className="rounded-xl border border-slate-700 bg-slate-950 p-4 hover:border-purple-500/40">
            <h3 className="text-white font-semibold text-sm mb-1">Industry Solutions</h3>
            <p className="text-slate-400 text-xs mb-2">Purpose-built AI and IT solutions by industry.</p>
            <span className="text-purple-300 text-xs font-semibold inline-block">View solutions →</span>
          </Link>
          <Link href="/blog/" className="rounded-xl border border-slate-700 bg-slate-950 p-4 hover:border-purple-500/40">
            <h3 className="text-white font-semibold text-sm mb-1">Insights & Guides</h3>
            <p className="text-slate-400 text-xs mb-2">Practical guidance on AI, IT, automation, and enterprise delivery.</p>
            <span className="text-purple-300 text-xs font-semibold inline-block">Read blog →</span>
          </Link>
        </div>
      </div>
    
      {/* Injected JSON-LD Schemas */}
      <JsonLd data={{
  "@context": "https://schema.org",
  "@type": [
    "SoftwareApplication",
    "WebApplication"
  ],
  "name": "Roi Calculator",
  "applicationCategory": "WebApplication",
  "applicationSubCategory": "DeveloperTool",
  "description": "Interactive tool: Roi Calculator.",
  "url": "https://ziontechgroup.com/tools/roi-calculator/",
  "featureList": [
    "Free online tool",
    "No registration required",
    "Instant results",
    "Browser-based",
    "Client-side processing"
  ],
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Zion Tech Group",
    "url": "https://ziontechgroup.com",
    "email": "hello@ziontechgroup.com",
    "telephone": "+1 (302) 464 0950"
  },
  "operatingSystem": "All (web-based)",
  "browserRequirements": "Modern web browser with JavaScript enabled",
  "softwareVersion": "1.0"
} }} />
      <JsonLd data={{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Is the Roi Calculator free to use?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, this tool is completely free. No registration or payment required."
      }
    },
    {
      "@type": "Question",
      "name": "How do I use the Roi Calculator?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Simply open the Roi Calculator page, enter your inputs, and click run to get instant results."
      }
    },
    {
      "@type": "Question",
      "name": "Does this tool store my data?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. All processing happens client-side. Your data never leaves your browser."
      }
    },
    {
      "@type": "Question",
      "name": "Can I use this tool for commercial projects?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, our free tools can be used for both personal and commercial projects."
      }
    }
  ]
} }} /></StandardPage>
  </>
  );
}