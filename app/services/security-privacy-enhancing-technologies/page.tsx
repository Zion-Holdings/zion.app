import { } from 'next/navigation';

export const metadata = {
  title: "Privacy Enhancing Technologies - Zion Tech Group",
  description: "Privacy Enhancing Technologies consulting and implementation: differential privacy budget tracking, homomorphic encryption proof-of-concept, zero-knowledge proo",
  alternates: {
    canonical: `https://ziontechgroup.com/services/security-privacy-enhancing-technologies`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Privacy Enhancing Technologies</h1>
        <p className="text-lg text-gray-300 mb-8">Privacy Enhancing Technologies consulting and implementation: differential privacy budget tracking, homomorphic encryption proof-of-concept, zero-knowledge proof circuits, TEE enclave design, synthetic data generation, and compliance audit-readiness report.</p>
        
        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Differential privacy budget tracker with dataset privacy score per column</li>
            <li>Zero-knowledge proof circuit design and deployment audit for selected use cases</li>
            <li>TEE Trusted Execution Environment enclave architecture review and threat model</li>
            <li>Synthetic data generator — privacy-preserving by construction with attribute correlation learned</li>
          </ul>
        </div>
        
        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Share data safely — privacy budget score shows real risk per dataset before release</li>
            <li>Zero-knowledge proof circuits enable compliant verification without data leaving the silo</li>
            <li>TEE review catches enclave implementation errors before production PII is processed</li>
            <li>Synthetic datasets used in development and testing mean no real PII ever at risk</li>
          </ul>
        </div>
        
        <div className="border border-purple-500 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Basic</h3>
              <p className="text-2xl font-bold mb-2">$2999</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border-2 border-purple-500">
              <h3 className="font-semibold mb-2">Pro</h3>
              <p className="text-2xl font-bold mb-2">$9999</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Enterprise</h3>
              <p className="text-2xl font-bold mb-2">$34999</p>
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
