import Link from 'next/link';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata = {
  title: "AI ESG Reporting & Sustainability Platform - Zion Tech Group",
  description: "Automated ESG data collection, scoring, and reporting: GHG emissions tracking, social impact measurement, governance scoring, and GRI/SASB/TCFD compliant reports.",
  alternates: {
    canonical: `https://ziontechgroup.com/services/ai-esg-reporting-platform`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <BreadcrumbSchema path={`/services/ai-esg-reporting-platform`} title="AI ESG Reporting & Sustainability Platform" />
        <h1 className="text-4xl font-bold mb-6">🌱 AI ESG Reporting & Sustainability Platform</h1>
        <p className="text-lg text-gray-300 mb-8">Automated ESG data collection, scoring, and reporting: GHG emissions tracking, social impact measurement, governance scoring, and GRI/SASB/TCFD compliant reports.</p>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Automated GHG emissions tracking</li>
            <li>Social impact measurement</li>
            <li>ESG governance scoring</li>
            <li>GRI/SASB/TCFD report generation</li>
            <li>Supply chain ESG monitoring</li>
            <li>Benchmarking against peers</li>
          </ul>
        </div>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Automate ESG reporting</li>
            <li>Reduce audit costs by 60%</li>
            <li>Benchmark against 10K+ companies</li>
          </ul>
        </div>

        <div className="border border-purple-500 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Basic</h3>
              <p className="text-2xl font-bold mb-2">$299/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border-2 border-purple-500">
              <h3 className="font-semibold mb-2">Pro</h3>
              <p className="text-2xl font-bold mb-2">$799/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Enterprise</h3>
              <p className="text-2xl font-bold mb-2">$2499/month</p>
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
