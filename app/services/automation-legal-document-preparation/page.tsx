import Link from 'next/link';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata = {
  title: "Legal Document Preparation and Filing - Zion Tech Group",
  description: "Legal document preparation: template-per-case-type, clause auto-match per case facts, e-sign per jurisdiction, deadline tracking, regulatory filing per state and federal authority, and evidence binder auto-compile with exhibit order per relevance score.",
  alternates: {
    canonical: `https://ziontechgroup.com/services/automation-legal-document-preparation`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <BreadcrumbSchema path={`/services/automation-legal-document-preparation`} title="Legal Document Preparation and Filing" />
        <h1 className="text-4xl font-bold mb-6">♿ Legal Document Preparation and Filing</h1>
        <p className="text-lg text-gray-300 mb-8">Legal document preparation: template-per-case-type, clause auto-match per case facts, e-sign per jurisdiction, deadline tracking, regulatory filing per state and federal authority, and evidence binder auto-compile with exhibit order per relevance score.</p>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Template library per case type with clause auto-match per case facts entered</li>
            <li>E-sign integrates per jurisdiction via DocuSign or HelloSign embedded signing</li>
            <li>Deadline auto-calculation per court rules per state</li>
            <li>Evidence binder auto-compile with exhibit auto-order by relevance per document</li>
            <li>Regulatory filing per authority per batch or per individual case per filing limit</li>
            <li>Prior precedent search per case law by citation auto-detected per case type</li>
          </ul>
        </div>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Reduce costs with legal document preparation and filing</li>
            <li>Improve operational efficiency</li>
            <li>Scale without complexity</li>
            <li>Enterprise-grade reliability</li>
          </ul>
        </div>

        <div className="border border-purple-500 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Basic</h3>
              <p className="text-2xl font-bold mb-2">$$99/mo/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border-2 border-purple-500">
              <h3 className="font-semibold mb-2">Pro</h3>
              <p className="text-2xl font-bold mb-2">$$299/mo/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Enterprise</h3>
              <p className="text-2xl font-bold mb-2">$$999/mo/month</p>
            </div>
          </div>
        </div>
        <div className="border-t border-slate-800 mt-8 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
          <Link href="/services/" className="text-purple-300 hover:text-purple-200">← Back to All Services</Link>
          <Link href="/tools/" className="text-slate-400 hover:text-slate-300">Try our free tools →</Link>
        </div>

        <div className="text-center">
          <a
            href="https://calendly.com/kleber-ziontechgroup/consultation"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-colors"
          >
            Book a Consultation
          </a>
        </div>
      </div>
    </main>
  );
}
