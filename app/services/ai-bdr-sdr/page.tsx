import { } from 'next/navigation';

export const metadata = {
  title: "AI BDR/SDR Agent - Zion Tech Group",
  description: "Autonomous AI Business Development & Sales Development Representative: prospect, qualify, email, book meetings, and nurture leads 24/7 without human interventio",
  alternates: {
    canonical: `https://ziontechgroup.com/services/ai-bdr-sdr`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">AI BDR/SDR Agent</h1>
        <p className="text-lg text-gray-300 mb-8">Autonomous AI Business Development &amp; Sales Development Representative: prospect, qualify, email, book meetings, and nurture leads 24/7 without human intervention.</p>
        
        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Lead research &amp; enrichment (LinkedIn, company data)</li>
            <li>Personalized cold email &amp; LinkedIn outreach</li>
            <li>Intent signal detection &amp; prioritization</li>
            <li>Automated meeting booking (Calendly integration)</li>
            <li>CRM sync (HubSpot, Salesforce)</li>
          </ul>
        </div>
        
        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Generate 50+ qualified meetings/month</li>
            <li>80% lower cost-per-lead vs human BDRs</li>
            <li>24/7 prospecting across timezones</li>
            <li>Scalable outbound engine</li>
          </ul>
        </div>
        
        <div className="border border-purple-500 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Basic</h3>
              <p className="text-2xl font-bold mb-2">$699</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border-2 border-purple-500">
              <h3 className="font-semibold mb-2">Pro</h3>
              <p className="text-2xl font-bold mb-2">$1299</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Enterprise</h3>
              <p className="text-2xl font-bold mb-2">$3499</p>
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
