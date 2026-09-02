import Link from 'next/link';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata = {
  title: "Customer Feedback Analyzer - Zion Tech Group",
  description: "Unified NLP-powered analysis across reviews, surveys, support tickets, and social mentions. Surfaces sentiment trends, emerging issues, and feature requests — turning unstructured feedback into strategic product intelligence.",
  alternates: {
    canonical: `https://ziontechgroup.com/services/wave126-customer-feedback-analyzer`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <BreadcrumbSchema path={`/services/wave126-customer-feedback-analyzer`} title="Customer Feedback Analyzer" />
        <h1 className="text-4xl font-bold mb-6">📊 Customer Feedback Analyzer</h1>
        <p className="text-lg text-gray-300 mb-8">Unified NLP-powered analysis across reviews, surveys, support tickets, and social mentions. Surfaces sentiment trends, emerging issues, and feature requests — turning unstructured feedback into strategic product intelligence.</p>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Multi-source ingestion (reviews, NPS, Zendesk, social)</li>
            <li>Sentiment analysis with emotion detection</li>
            <li>Topic modeling & theme clustering</li>
            <li>Feature request extraction & prioritization</li>
            <li>Competitor benchmarking from public reviews</li>
            <li>Trend detection & anomaly alerting</li>
            <li>Executive dashboards & automated reports</li>
            <li>API for product analytics integration</li>
          </ul>
        </div>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Understand customers at scale without reading every ticket</li>
            <li>Spot churn risks early from sentiment shifts</li>
            <li>Prioritize product roadmap with real data, not guesses</li>
            <li>Benchmark against competitors automatically</li>
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
              <p className="text-2xl font-bold mb-2">$997/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Enterprise</h3>
              <p className="text-2xl font-bold mb-2">$2497/month</p>
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
