import { } from 'next/navigation';

export const metadata = {
  title: "Contract Lifecycle Intelligence - Zion Tech Group",
  description: "AI contract lifecycle management: extract clauses and dates, auto-flag risk, renewal calendar, benchmark against market terms, amendment tracker across 200+ contract types.",
  alternates: {
    canonical: `https://ziontechgroup.com/services/ai-contract-lifecycle-intelligence`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Contract Lifecycle Intelligence</h1>
        <p className="text-lg text-gray-300 mb-8">AI contract lifecycle management: extract clauses and dates, auto-flag risk, renewal calendar, benchmark against market terms, amendment tracker across 200+ contract types.</p>
        
        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Clause extraction matching against 200+ contract type templates</li>
            <li>Auto renewal calendar plus amendment tracker with approval chain</li>
            <li>Benchmark pricing and T&amp;Cs against anonymised peer market medians</li>
            <li>Obligation tracker with reminders at 90, 30, and 7 days pre-renewal</li>
          </ul>
        </div>
        
        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Cut contract review time by 75%</li>
            <li>Never miss a renewal window with proactive alerts three months ahead</li>
            <li>Negotiate with anonymised industry peer data as leverage</li>
            <li>Full audit trail — every change, version, and approval timestamped</li>
          </ul>
        </div>
        
        <div className="border border-purple-500 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Basic</h3>
              <p className="text-2xl font-bold mb-2">$2499</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border-2 border-purple-500">
              <h3 className="font-semibold mb-2">Pro</h3>
              <p className="text-2xl font-bold mb-2">$6999</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Enterprise</h3>
              <p className="text-2xl font-bold mb-2">$19999</p>
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
