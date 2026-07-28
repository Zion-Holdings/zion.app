import { } from 'next/navigation';

export const metadata = {
  title: "Healthcare AI Diagnostics Assistant - Zion Tech Group",
  description: "FDA-aligned AI assistant for clinical decision support. Analyzes medical imaging (X-ray, CT, MRI), correlates patient history, and surfaces differential diagnos",
  alternates: {
    canonical: `https://ziontechgroup.com/services/wave127-healthcare-ai-diagnostics`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Healthcare AI Diagnostics Assistant</h1>
        <p className="text-lg text-gray-300 mb-8">FDA-aligned AI assistant for clinical decision support. Analyzes medical imaging (X-ray, CT, MRI), correlates patient history, and surfaces differential diagnoses with evidence citations — augmenting clinician judgment, not replacing it.</p>
        
        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Medical imaging analysis (X-ray, CT, MRI, ultrasound)</li>
            <li>Differential diagnosis with evidence scoring</li>
            <li>Patient history correlation &amp; risk factorization</li>
            <li>FDA 510(k) alignment &amp; validation tracking</li>
            <li>Clinical workflow integration (EHR/FHIR)</li>
          </ul>
        </div>
        
        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Augment diagnostic accuracy — not replace clinical judgment</li>
            <li>Reduce diagnostic turnaround from hours to minutes</li>
            <li>Equitable AI with continuous bias monitoring</li>
            <li>Full regulatory traceability for CMS / Joint Commission</li>
          </ul>
        </div>
        
        <div className="border border-purple-500 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Basic</h3>
              <p className="text-2xl font-bold mb-2">$N/A/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border-2 border-purple-500">
              <h3 className="font-semibold mb-2">Pro</h3>
              <p className="text-2xl font-bold mb-2">$29997/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Enterprise</h3>
              <p className="text-2xl font-bold mb-2">$69997/month</p>
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
