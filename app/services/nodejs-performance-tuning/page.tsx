import { } from 'next/navigation';

export const metadata = {
  title: "Node.js Performance Tuning & Profiling - Zion Tech Group",
  description: "Deep performance optimization for Node.js applications: event loop analysis, memory leak detection, concurrency tuning, and scalability architecture review.",
  alternates: {
    canonical: `https://ziontechgroup.com/services/nodejs-performance-tuning`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Node.js Performance Tuning &amp; Profiling</h1>
        <p className="text-lg text-gray-300 mb-8">Deep performance optimization for Node.js applications: event loop analysis, memory leak detection, concurrency tuning, and scalability architecture review.</p>
        
        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Event loop delay monitoring &amp; troubleshooting</li>
            <li>Memory profiling &amp; leak detection</li>
            <li>CPU &amp; I/O bottleneck analysis</li>
            <li>Cluster &amp; worker threads optimization</li>
            <li>Garbage collection tuning</li>
          </ul>
        </div>
        
        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Improve request throughput by 3–5x</li>
            <li>Reduce latency p99 by 60%</li>
            <li>Lower cloud compute costs (fewer instances)</li>
            <li>Prevent runtime crashes in production</li>
          </ul>
        </div>
        
        <div className="border border-purple-500 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Basic</h3>
              <p className="text-2xl font-bold mb-2">$699</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border-2 border-purple-500">
              <h3 className="font-semibold mb-2">Pro</h3>
              <p className="text-2xl font-bold mb-2">$1599</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Enterprise</h3>
              <p className="text-2xl font-bold mb-2">$4599</p>
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
