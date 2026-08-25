import Link from 'next/link';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata = {
  title: "AI Autonomous Vehicle Perception & Planning - Zion Tech Group",
  description: "AI perception and planning stack for autonomous vehicles. Object detection, path planning, and decision-making for self-driving cars, trucks, and drones.",
  alternates: {
    canonical: `https://ziontechgroup.com/services/ai-autonomous-vehicles`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <BreadcrumbSchema path={`/services/ai-autonomous-vehicles`} title="AI Autonomous Vehicle Perception & Planning" />
        <h1 className="text-4xl font-bold mb-6">🚗 AI Autonomous Vehicle Perception & Planning</h1>
        <p className="text-lg text-gray-300 mb-8">AI perception and planning stack for autonomous vehicles. Object detection, path planning, and decision-making for self-driving cars, trucks, and drones.</p>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Multi-sensor fusion (camera, LiDAR, radar)</li>
            <li>Real-time object detection and tracking</li>
            <li>Path planning and trajectory optimization</li>
            <li>Behavior prediction for other road users</li>
            <li>Simulation environment for testing</li>
            <li>Edge deployment on NVIDIA, Qualcomm platforms</li>
            <li>Safety validation and verification</li>
            <li>HD map integration and localization</li>
          </ul>
        </div>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Detect objects with 99.9% accuracy</li>
            <li>Plan safe paths in complex environments</li>
            <li>Test millions of scenarios in simulation</li>
            <li>Deploy to edge with real-time performance</li>
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
