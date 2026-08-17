import type { Metadata } from 'next';
import PageTemplate from '@/components/PageTemplate';

export const metadata: Metadata = {
  title: "AI Predictive Analytics & Decision Intelligence - Zion Tech Group",
  description: "Enterprise predictive analytics with automated model selection, explainable AI, and real-time forecasting. No ML expertise required — connect data and get predictions.",
  alternates: {
    canonical: `https://ziontechgroup.com/services/ai-predictive-analytics`,
  },
};

export default function ServicePage() {
  return (
    <PageTemplate
      title="AI Predictive Analytics & Decision Intelligence"
      description="Enterprise predictive analytics with automated model selection, explainable AI, and real-time forecasting. No ML expertise required — connect data and get predictions."
      canonical="https://ziontechgroup.com/services/ai-predictive-analytics"
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Services', href: '/services' },
        { label: 'AI Predictive Analytics', href: '/services/ai-predictive-analytics' },
      ]}
    >
      <div className="bg-slate-900 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-white">Key Features</h2>
        <ul className="list-disc list-inside space-y-2 text-slate-300">
          <li>Automated model selection and training</li>
          <li>Explainable AI with feature importance</li>
          <li>Real-time forecasting and anomaly detection</li>
          <li>50+ data connectors (databases, APIs, files)</li>
          <li>Custom dashboards and alerts</li>
        </ul>
      </div>

      <div className="bg-slate-900 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-white">Benefits</h2>
        <ul className="list-disc list-inside space-y-2 text-slate-300">
          <li>35% improvement in forecast accuracy</li>
          <li>Zero ML expertise required</li>
          <li>Real-time predictions at scale</li>
          <li>Embed intelligence in any application</li>
        </ul>
      </div>

      <div className="border border-purple-500 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-white">Pricing</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-slate-800 p-4 rounded-lg border border-slate-700">
            <h3 className="font-semibold mb-2 text-white">Basic</h3>
            <p className="text-2xl font-bold text-purple-400 mb-2">$1,999/mo</p>
            <ul className="text-sm text-slate-400 space-y-1">
              <li>Up to 100K predictions/month</li>
              <li>30+ data connectors</li>
              <li>Email support</li>
            </ul>
          </div>
          <div className="bg-slate-800 p-4 rounded-lg border-2 border-purple-500">
            <h3 className="font-semibold mb-2 text-white">Pro</h3>
            <p className="text-2xl font-bold text-purple-400 mb-2">$4,999/mo</p>
            <ul className="text-sm text-slate-400 space-y-1">
              <li>Unlimited predictions</li>
              <li>70+ data connectors</li>
              <li>Priority support</li>
              <li>Custom model training</li>
            </ul>
          </div>
          <div className="bg-slate-800 p-4 rounded-lg border border-slate-700">
            <h3 className="font-semibold mb-2 text-white">Enterprise</h3>
            <p className="text-2xl font-bold text-purple-400 mb-2">Custom</p>
            <ul className="text-sm text-slate-400 space-y-1">
              <li>Dedicated infrastructure</li>
              <li>SLA support</li>
              <li>On-prem deployment option</li>
            </ul>
          </div>
        </div>
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
    </PageTemplate>
  );
}
