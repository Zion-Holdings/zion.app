import Link from 'next/link';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata = {
  title: "AI-Powered Legal Document Analyzer - Zion Tech Group",
  description: "Intelligent contract review at scale — extracts clauses, evaluates risk, compares against gold-standard templates, and generates redline suggestions. Handles 50+ document types from NDAs to M&A agreements, cutting legal review costs by 70%.",
  alternates: {
    canonical: `https://ziontechgroup.com/services/wave127-ai-legal-document-analyzer`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <BreadcrumbSchema path={`/services/wave127-ai-legal-document-analyzer`} title="AI-Powered Legal Document Analyzer" />
        <h1 className="text-4xl font-bold mb-6">⚖️ AI-Powered Legal Document Analyzer</h1>
        <p className="text-lg text-gray-300 mb-8">Intelligent contract review at scale — extracts clauses, evaluates risk, compares against gold-standard templates, and generates redline suggestions. Handles 50+ document types from NDAs to M&A agreements, cutting legal review costs by 70%.</p>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Automated clause extraction & classification</li>
            <li>Risk scoring with explanations & citations</li>
            <li>Template comparison & deviation analysis</li>
            <li>Redline & markup suggestion generation</li>
            <li>50+ document type support (NDA, SaaS, M&A, etc.)</li>
            <li>Obligation extraction & deadline tracking</li>
            <li>Multi-language contract analysis</li>
            <li>Integration with CLM platforms (Ironclad, DocuSign)</li>
          </ul>
        </div>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>70% reduction in legal review costs</li>
            <li>Never miss a risky clause again</li>
            <li>Standardize contracts across the organization</li>
            <li>Accelerate deal cycles from weeks to days</li>
          </ul>
        </div>

        <div className="border border-purple-500 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Basic</h3>
              <p className="text-2xl font-bold mb-2">$199/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border-2 border-purple-500">
              <h3 className="font-semibold mb-2">Pro</h3>
              <p className="text-2xl font-bold mb-2">$5997/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Enterprise</h3>
              <p className="text-2xl font-bold mb-2">$14997/month</p>
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
