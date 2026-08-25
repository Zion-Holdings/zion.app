import Link from 'next/link';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata = {
  title: "AI Medical Imaging Analysis Assistant - Zion Tech Group",
  description: "AI-powered medical imaging analysis that assists radiologists in detecting anomalies in X-rays, CT scans, MRIs, and pathology slides. FDA-cleared algorithms with 95%+ sensitivity.",
  alternates: {
    canonical: `https://ziontechgroup.com/services/ai-medical-imaging-assistant`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <BreadcrumbSchema path={`/services/ai-medical-imaging-assistant`} title="AI Medical Imaging Analysis Assistant" />
        <h1 className="text-4xl font-bold mb-6">🏥 AI Medical Imaging Analysis Assistant</h1>
        <p className="text-lg text-gray-300 mb-8">AI-powered medical imaging analysis that assists radiologists in detecting anomalies in X-rays, CT scans, MRIs, and pathology slides. FDA-cleared algorithms with 95%+ sensitivity.</p>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>X-ray, CT, MRI, and pathology image analysis</li>
            <li>Automated anomaly detection and classification</li>
            <li>Priority flagging for urgent findings</li>
            <li>Structured report generation</li>
            <li>Integration with PACS and EMR systems</li>
            <li>Longitudinal comparison with prior studies</li>
            <li>Quality assurance and peer review tools</li>
            <li>HIPAA-compliant infrastructure</li>
          </ul>
        </div>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Detect abnormalities with 95%+ sensitivity</li>
            <li>Reduce radiologist reading time by 40%</li>
            <li>Flag urgent cases for immediate attention</li>
            <li>Improve diagnostic consistency across providers</li>
          </ul>
        </div>

        <div className="border border-purple-500 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Basic</h3>
              <p className="text-2xl font-bold mb-2">$$4,999/mo/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border-2 border-purple-500">
              <h3 className="font-semibold mb-2">Pro</h3>
              <p className="text-2xl font-bold mb-2">$$12,000/mo/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Enterprise</h3>
              <p className="text-2xl font-bold mb-2">$Custom/month</p>
            </div>
          </div>
        </div>
        <div className="border-t border-slate-800 mt-8 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
          <Link href="/services/" className="text-purple-300 hover:text-purple-200">← Back to All Services</Link>
          <Link href="/tools/" className="text-slate-400 hover:text-slate-300">Try our free tools →</Link>
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
