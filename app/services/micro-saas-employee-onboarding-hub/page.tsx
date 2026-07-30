import { } from 'next/navigation';

export const metadata = {
  title: "Micro-SaaS Employee Onboarding Hub - Zion Tech Group",
  description: "Automated employee onboarding platform that creates personalized onboarding journeys, tracks progress, collects e-signatures, and integrates with HRIS, Slack, a",
  alternates: {
    canonical: `https://ziontechgroup.com/services/micro-saas-employee-onboarding-hub`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Micro-SaaS Employee Onboarding Hub</h1>
        <p className="text-lg text-gray-300 mb-8">Automated employee onboarding platform that creates personalized onboarding journeys, tracks progress, collects e-signatures, and integrates with HRIS, Slack, and IT provisioning systems.</p>
        
        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Drag-and-drop onboarding journey builder</li>
            <li>Role-based onboarding templates (engineer, sales, manager)</li>
            <li>Automated IT provisioning (laptop, accounts, access)</li>
            <li>E-signature collection for policies and agreements</li>
            <li>Progress tracking dashboard for HR and managers</li>
          </ul>
        </div>
        
        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Reduce onboarding time from weeks to days</li>
            <li>Ensure 100% compliance with policy acknowledgments</li>
            <li>Improve new hire satisfaction scores by 35%</li>
            <li>Free HR team from manual onboarding tasks</li>
          </ul>
        </div>
        
        <div className="border border-purple-500 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Basic</h3>
              <p className="text-2xl font-bold mb-2">$199/mo/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border-2 border-purple-500">
              <h3 className="font-semibold mb-2">Pro</h3>
              <p className="text-2xl font-bold mb-2">$499/mo/month</p>
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
