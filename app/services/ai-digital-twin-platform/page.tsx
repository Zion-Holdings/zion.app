import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'AI Digital Twin Platform | Zion Tech Group',
  description: 'Create accurate digital twins of your physical assets, processes, and operations with our AI-powered digital twin platform. Simulate, predict, and optimize in real-time.',
  alternates: {
    canonical: 'https://ziontechgroup.com/services/ai-digital-twin-platform/',
  },
};

export default function DigitalTwinPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white p-6">
      <div className="mx-auto max-w-4xl">
        <Link href="/services" className="mb-6 inline-flex items-center gap-2 text-slate-400 hover:text-white">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Services
        </Link>
        
        <h1 className="text-4xl font-bold mb-4">AI-Powered Digital Twin Platform</h1>
        
        <div className="mb-8">
          <p className="text-xl text-slate-300 mb-6">
            Build intelligent digital twins that learn, adapt, and predict. 
            Our AI-driven digital twin platform creates virtual replicas of your 
            physical assets, processes, and operations for real-time monitoring and optimization.
          </p>
          
          <div className="bg-gradient-to-r from-emerald-900/30 to-teal-900/30 rounded-xl p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-emerald-400">Digital Twin Capabilities</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-teal-400 mb-2">Asset Twinning</h3>
                <ul className="text-slate-300 space-y-1">
                  <li>• Real-time monitoring of equipment performance</li>
                  <li>• Predictive maintenance with AI anomaly detection</li>
                  <li>• Asset lifecycle management and optimization</li>
                  <li>• Remote diagnostics and troubleshooting</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-green-400 mb-2">Process Twinning</h3>
                <ul className="text-slate-300 space-y-1">
                  <li>• Real-time process optimization</li>
                  <li>• What-if scenario simulation</li>
                  <li>• Quality prediction and improvement</li>
                  <li>• Energy consumption optimization</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-slate-900/50 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-blue-400">Use Cases</h2>
          <div className="space-y-4">
            <div className="border border-slate-800 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-cyan-400 mb-2">Manufacturing Operations</h3>
              <p className="text-slate-300 mt-2">
                Create digital replicas of production lines to predict bottlenecks, 
                optimize throughput, and prevent costly downtime. Our AI twins 
                continuously learn from production data to improve efficiency.
              </p>
            </div>
            <div className="border border-slate-800 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-purple-400 mb-2">Smart Building Management</h3>
              <p className="text-slate-300 mt-2">
                Digital twins of entire facilities for energy optimization, 
                tenant experience enhancement, and predictive maintenance of 
                HVAC, electrical, and plumbing systems.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-900/20 to-cyan-900/20 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-cyan-400">Platform Advantages</h2>
          <ul className="space-y-2 text-slate-300">
            <li className="flex items-start">
              <span className="text-cyan-400 mr-2">✓</span>
              <span>AI-powered predictive models for accurate forecasting</span>
            </li>
            <li className="flex items-start">
              <span className="text-cyan-400 mr-2">✓</span>
              <span>Real-time data ingestion from IoT sensors and systems</span>
            </li>
            <li className="flex items-start">
              <span className="text-cyan-400 mr-2">✓</span>
              <span>Scalable cloud-native architecture for enterprise workloads</span>
            </li>
            <li className="flex items-start">
              <span className="text-cyan-400 mr-2">✓</span>
              <span>Integration with existing ERP, SCADA, and IIoT systems</span>
            </li>
            <li className="flex items-start">
              <span className="text-cyan-400 mr-2">✓</span>
              <span>3D visualization and AR/VR compatibility</span>
            </li>
          </ul>
        </div>

        <div className="text-center">
          <Link href="https://calendly.com/kleber-ziontechgroup" className="inline-block bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-200">
            Schedule a Digital Twin Demo
          </Link>
          <p className="mt-4 text-slate-400">Discover free AI tools at <Link href="https://ziontechgroup.com/free-tools" className="text-emerald-400 hover:underline">ziontechgroup.com/free-tools</Link></p>
        </div>
      </div>
    </main>
  );
}