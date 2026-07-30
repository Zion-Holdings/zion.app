import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI-Powered Customer Analytics Platform',
  description: 'Advanced customer analytics platform that delivers actionable insights from behavioral data. AI-driven segmentation, lifetime value prediction, churn prevention, and personalized recommendations that boost revenue by 30%+. Real-time customer intelligence for e-commerce, SaaS, and financial services.',
  alternates: {
    canonical: 'https://ziontechgroup.com/services/ai-powered-customer-analytics-platform',
  },
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            AI-Powered Customer Analytics Platform
          </h1>
          <p className="text-xl text-gray-400 mb-8">
            Transform customer data into revenue growth with AI-powered analytics. Real-time behavioral insights, predictive lifetime value modeling, and automated personalization at scale.
          </p>
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-900/30 text-purple-300 text-sm">
            <span className="mr-2">📊</span>
            <span>Customer Intelligence</span>
          </div>
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Key Features</h2>
          <ul className="grid md:grid-cols-2 gap-4">
            <li className="text-gray-300">Real-time customer journey mapping with event-level tracking</li>
            <li className="text-gray-300">AI-powered RFM segmentation and lifetime value prediction</li>
            <li className="text-gray-300">Churn risk scoring with automated intervention triggers</li>
            <li className="text-gray-300">Personalized product recommendations with A/B testing</li>
            <li className="text-gray-300">Multi-channel attribution modeling (web, mobile, email, ads)</li>
            <li className="text-gray-300">Cohort analysis with retention curve forecasting</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Business Benefits</h2>
          <ul className="space-y-3">
            <li className="text-purple-300">Increase customer lifetime value by 25-40% through predictive personalization</li>
            <li className="text-purple-300">Reduce churn by 30%+ with proactive intervention workflows</li>
            <li className="text-purple-300">Drive 20-35% revenue growth from existing customer base</li>
            <li className="text-purple-300">Cut customer acquisition costs by 40% through better targeting</li>
          </ul>
        </section>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-slate-800 rounded-xl p-6 border border-purple-500/20">
            <h3 className="text-xl font-bold mb-4">Starter</h3>
            <p className="text-3xl font-bold text-purple-400 mb-4">$499</p>
            <ul className="space-y-2 mb-4">
              <li className="text-gray-400 text-sm">Up to 10k customers</li>
              <li className="text-gray-400 text-sm">Basic analytics</li>
              <li className="text-gray-400 text-sm">Email support</li>
            </ul>
            <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg">
              Get Started
            </button>
          </div>
          <div className="bg-slate-800 rounded-xl p-6 border border-purple-400">
            <h3 className="text-xl font-bold mb-4">Growth</h3>
            <p className="text-3xl font-bold text-purple-300 mb-4">$1,299</p>
            <ul className="space-y-2 mb-4">
              <li className="text-gray-400 text-sm">Up to 100k customers</li>
              <li className="text-gray-400 text-sm">AI predictions + personalization</li>
              <li className="text-gray-400 text-sm">Priority support</li>
            </ul>
            <button className="w-full bg-purple-500 hover:bg-purple-600 text-white py-2 rounded-lg">
              Upgrade
            </button>
          </div>
          <div className="bg-slate-800 rounded-xl p-6 border border-purple-400">
            <h3 className="text-xl font-bold mb-4">Enterprise</h3>
            <p className="text-3xl font-bold text-purple-300 mb-4">$Custom</p>
            <ul className="space-y-2 mb-4">
              <li className="text-gray-400 text-sm">Unlimited customers</li>
              <li className="text-gray-400 text-sm">Custom ML models</li>
              <li className="text-gray-400 text-sm">Dedicated CSM</li>
            </ul>
            <button className="w-full bg-purple-500 hover:bg-purple-600 text-white py-2 rounded-lg">
              Contact Sales
            </button>
          </div>
        </div>

        <section className="mt-16 bg-slate-900 rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-6">Get Started</h2>
          <p className="text-gray-400 mb-6">Ready to unlock the value in your customer data?</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="mailto:kleber@ziontechgroup.com" className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold transition-colors">
              Contact Us
            </a>
            <a href="/contact" className="px-6 py-3 border border-purple-500 hover:bg-purple-900/20 rounded-lg transition-colors">
              Book a Demo
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}