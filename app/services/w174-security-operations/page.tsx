import { } from 'next/navigation';

export const metadata = {
  title: "Security Operations Maturity Assessment - Zion Tech Group",
  description: "Assess and roadmap your security operations maturity. Gap analysis against NIST CSF, CMMC, and CIS Controls. Build vs buy recommendations with 3-year TCO.",
  alternates: {
    canonical: `https://ziontechgroup.com/services/w174-security-operations`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Security Operations Maturity Assessment</h1>
        <p className="text-lg text-gray-300 mb-8">Assess and roadmap your security operations maturity. Gap analysis against NIST CSF, CMMC, and CIS Controls. Build vs buy recommendations with 3-year TCO.</p>
        
        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>NIST CSF maturity assessment</li>
            <li>CMMC and CIS Controls gap analysis</li>
            <li>Current state evaluation (people, process, tech)</li>
            <li>Risk-prioritized roadmap</li>
            <li>Build vs buy analysis with TCO</li>
          </ul>
        </div>
        
        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Know where you stand vs industry frameworks</li>
            <li>Prioritized roadmap maximizes risk reduction per dollar</li>
            <li>Build vs buy saves 30-50% vs wrong choices</li>
            <li>Quick wins deliver value immediately</li>
          </ul>
        </div>
        
        <div className="border border-purple-500 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Basic</h3>
              <p className="text-2xl font-bold mb-2">$4,999/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border-2 border-purple-500">
              <h3 className="font-semibold mb-2">Pro</h3>
              <p className="text-2xl font-bold mb-2">$14,999/month</p>
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
