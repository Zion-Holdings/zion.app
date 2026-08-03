import { } from 'next/navigation';

export const metadata = {
  title: "AI Computer Vision Quality Inspection - Zion Tech Group",
  description: "Use vision AI to detect defects, verify assemblies, and measure consistency in production or logistics.",
  alternates: {
    canonical: `https://ziontechgroup.com/services/ai-computer-vision-quality-inspection`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">AI Computer Vision Quality Inspection</h1>
        <p className="text-lg text-gray-300 mb-8">Use vision AI to detect defects, verify assemblies, and measure consistency in production or logistics. Integrates with cameras and MES systems to reduce rejects and inspection costs.</p>
        
        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Defect detection and classification</li>
            <li>Assembly verification against CAD/specs</li>
            <li>Dashboarding and alerting</li>
            <li>Camera and PLC/MES integrations</li>
            <li>Continuous improvement from feedback loops</li>
          </ul>
        </div>
        
        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Reduce defect escapes and rework</li>
            <li>Faster inspections than manual review</li>
            <li>Consistent measurements and reports</li>
          </ul>
        </div>
        
        <div className="border border-purple-500 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Basic</h3>
              <p className="text-2xl font-bold mb-2">$499/mo</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border-2 border-purple-500">
              <h3 className="font-semibold mb-2">Pro</h3>
              <p className="text-2xl font-bold mb-2">$1,299/mo</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Enterprise</h3>
              <p className="text-2xl font-bold mb-2">$3,499/mo</p>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <a href="/contact" className="btn-primary text-lg px-10 py-4">Get a Free Proposal →</a>
        </div>
      </div>
    </main>
  );
}
