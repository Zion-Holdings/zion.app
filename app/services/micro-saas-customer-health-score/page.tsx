import { } from 'next/navigation';

export const metadata = {
  title: "Micro-SaaS Customer Health Score Platform - Zion Tech Group",
  description: "B2B SaaS customer health monitoring that aggregates product usage, support tickets, NPS scores, and payment history into a single health score. Predicts churn 6",
  alternates: {
    canonical: `https://ziontechgroup.com/services/micro-saas-customer-health-score`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Micro-SaaS Customer Health Score Platform</h1>
        <p className="text-lg text-gray-300 mb-8">B2B SaaS customer health monitoring that aggregates product usage, support tickets, NPS scores, and payment history into a single health score. Predicts churn 60 days in advance.</p>
        
        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Composite health score (0-100) per customer account</li>
            <li>Product usage tracking and feature adoption metrics</li>
            <li>Support ticket sentiment analysis and escalation triggers</li>
            <li>NPS/CSAT survey automation and trend analysis</li>
            <li>Payment history and contract renewal tracking</li>
          </ul>
        </div>
        
        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Predict churn 60 days before it happens</li>
            <li>Prioritize CSM time on highest-risk accounts</li>
            <li>Increase net revenue retention by 15-25%</li>
            <li>Data-driven renewal and expansion conversations</li>
          </ul>
        </div>
        
        <div className="border border-purple-500 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Basic</h3>
              <p className="text-2xl font-bold mb-2">$99/mo/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border-2 border-purple-500">
              <h3 className="font-semibold mb-2">Pro</h3>
              <p className="text-2xl font-bold mb-2">$299/mo/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Enterprise</h3>
              <p className="text-2xl font-bold mb-2">$Custom/month</p>
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
      </div>
    </main>
  );
}
