import { } from 'next/navigation';

export const metadata = {
  title: "Legacy System Modernization & Re-Platforming - Zion Tech Group",
  description: "Migrate from legacy mainframes, monoliths, or outdated tech stacks to cloud-native microservices with minimal business disruption.",
  alternates: {
    canonical: `https://ziontechgroup.com/services/legacy-system-modernization`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Legacy System Modernization &amp; Re-Platforming</h1>
        <p className="text-lg text-gray-300 mb-8">Migrate from legacy mainframes, monoliths, or outdated tech stacks to cloud-native microservices with minimal business disruption.</p>
        
        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>System analysis &amp; dependency discovery</li>
            <li>Strangler fig pattern migration planning</li>
            <li>Database migration with CDC (change data capture)</li>
            <li>API gateway &amp; service mesh setup</li>
            <li>Cut-over planning &amp; rollback strategy</li>
          </ul>
        </div>
        
        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Reduce TCO by up to 70%</li>
            <li>Improve system scalability &amp; agility</li>
            <li>Eliminate vendor lock-in &amp; EOL risks</li>
            <li>Modern developer experience (CI/CD, containers)</li>
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
              <p className="text-2xl font-bold mb-2">$5999</p>
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
