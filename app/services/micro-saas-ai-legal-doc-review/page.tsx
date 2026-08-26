import { } from 'next/navigation';

export const metadata = {
  title: "AI Legal Document Review & Due Diligence - Zion Tech Group",
  description: "AI-powered legal document review for M&A due diligence, contract analysis, and compliance review. Reduces review time by 90% while improving accuracy.",
  alternates: {
    canonical: `https://ziontechgroup.com/services/micro-saas-ai-legal-doc-review`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">AI Legal Document Review &amp; Due Diligence</h1>
        <p className="text-lg text-gray-300 mb-8">AI-powered legal document review for M&amp;A due diligence, contract analysis, and compliance review. Reduces review time by 90% while improving accuracy.</p>
        
        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Bulk document upload and AI classification</li>
            <li>Key clause extraction and risk flagging</li>
            <li>Redline comparison between document versions</li>
            <li>M&amp;A due diligence checklist automation</li>
            <li>Regulatory compliance gap analysis</li>
          </ul>
        </div>
        
        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Reduce document review time by 90%</li>
            <li>Catch risky clauses human reviewers miss</li>
            <li>Accelerate M&amp;A due diligence timelines</li>
            <li>Lower legal review costs by 60%</li>
          </ul>
        </div>
        
        <div className="border border-purple-500 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Basic</h3>
              <p className="text-2xl font-bold mb-2">$499/mo/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border-2 border-purple-500">
              <h3 className="font-semibold mb-2">Pro</h3>
              <p className="text-2xl font-bold mb-2">$1,499/mo/month</p>
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
