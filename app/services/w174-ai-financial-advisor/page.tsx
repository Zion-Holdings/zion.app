import Link from 'next/link';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata = {
  title: "AI Financial Advisory Copilot - Zion Tech Group",
  description: "AI copilot for financial advisors: portfolio analysis, risk assessment, compliance checking, and client communication drafting. SEC/FINRA compliant with audit trails.",
  alternates: {
    canonical: `https://ziontechgroup.com/services/w174-ai-financial-advisor`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <BreadcrumbSchema path={`/services/w174-ai-financial-advisor`} title="AI Financial Advisory Copilot" />
        <h1 className="text-4xl font-bold mb-6">💼 AI Financial Advisory Copilot</h1>
        <p className="text-lg text-gray-300 mb-8">AI copilot for financial advisors: portfolio analysis, risk assessment, compliance checking, and client communication drafting. SEC/FINRA compliant with audit trails.</p>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Portfolio analysis and rebalancing suggestions</li>
            <li>Risk assessment with scenario modeling</li>
            <li>Compliance checking (SEC, FINRA, suitability)</li>
            <li>Client report and communication drafting</li>
            <li>Market intelligence and news summarization</li>
            <li>Regulatory change monitoring and impact analysis</li>
            <li>Audit trail for all AI-generated recommendations</li>
          </ul>
        </div>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Serve 3x more clients with AI assistance</li>
            <li>Compliance checks on every recommendation</li>
            <li>Real-time market intelligence in every meeting</li>
            <li>Full audit trail for regulatory examinations</li>
          </ul>
        </div>

        <div className="border border-purple-500 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Basic</h3>
              <p className="text-2xl font-bold mb-2">$$599/mo/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border-2 border-purple-500">
              <h3 className="font-semibold mb-2">Pro</h3>
              <p className="text-2xl font-bold mb-2">$$1,799/mo/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Enterprise</h3>
              <p className="text-2xl font-bold mb-2">$$5,999/mo/month</p>
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
