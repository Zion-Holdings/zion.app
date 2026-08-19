import { } from 'next/navigation';

export const metadata = {
  title: "ChurnShield — Churn Prediction Micro-SaaS - Zion Tech Group",
  description: "Plug-and-play churn prediction for SaaS businesses. Connect your Stripe/Braintree account, and get AI-powered churn risk scores for every customer. Automated re",
  alternates: {
    canonical: `https://ziontechgroup.com/services/micro-saas-churn-prediction-saas`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">ChurnShield — Churn Prediction Micro-SaaS</h1>
        <p className="text-lg text-gray-300 mb-8">Plug-and-play churn prediction for SaaS businesses. Connect your Stripe/Braintree account, and get AI-powered churn risk scores for every customer. Automated retention campaigns and win-back workflows.</p>
        
        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Stripe/Braintree native integration</li>
            <li>Per-customer churn risk scoring</li>
            <li>Automated retention email campaigns</li>
            <li>Win-back workflow builder</li>
            <li>Revenue impact forecasting</li>
          </ul>
        </div>
        
        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Reduce churn by 20-35%</li>
            <li>Automate retention efforts</li>
            <li>Identify at-risk accounts early</li>
            <li>Increase MRR retention</li>
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
