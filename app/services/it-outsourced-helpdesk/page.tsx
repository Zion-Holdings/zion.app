import { } from 'next/navigation';

export const metadata = {
  title: "Outsourced IT Helpdesk (Tier 1-2) - Zion Tech Group",
  description: "White-label or co-branded IT helpdesk. Certified technicians handle password resets, software issues, hardware troubleshooting, onboarding.",
  alternates: {
    canonical: `https://ziontechgroup.com/services/it-outsourced-helpdesk`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Outsourced IT Helpdesk (Tier 1-2)</h1>
        <p className="text-lg text-gray-300 mb-8">White-label or co-branded IT helpdesk. Certified technicians handle password resets, software issues, hardware troubleshooting, onboarding.</p>
        
        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Unlimited tickets (phone, chat, email)</li>
            <li>CompTIA A+ certified technicians</li>
            <li>Under 5-min first response</li>
            <li>Escalation for complex issues</li>
            <li>Your environment knowledge base</li>
            <li>SLA-backed response times</li>
          </ul>
        </div>
        
        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>24/7 support without hiring</li>
            <li>Under 5-min response</li>
            <li>Scales for onboarding surges</li>
            <li>Detailed ticket analytics</li>
          </ul>
        </div>
        
        <div className="border border-purple-500 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Basic</h3>
              <p className="text-2xl font-bold mb-2">$999</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border-2 border-purple-500">
              <h3 className="font-semibold mb-2">Pro</h3>
              <p className="text-2xl font-bold mb-2">$2,499</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Enterprise</h3>
              <p className="text-2xl font-bold mb-2">$Custom</p>
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
