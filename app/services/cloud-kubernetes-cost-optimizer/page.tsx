import { } from 'next/navigation';

export const metadata = {
  title: "Kubernetes Cost Optimizer - Zion Tech Group",
  description: "K8s cluster cost engine: per-container CPU and RAM right-sizing via VPA plus workload profiling, spot-compatible scheduling for bursty workloads, cost attributi",
  alternates: {
    canonical: `https://ziontechgroup.com/services/cloud-kubernetes-cost-optimizer`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Kubernetes Cost Optimizer</h1>
        <p className="text-lg text-gray-300 mb-8">K8s cluster cost engine: per-container CPU and RAM right-sizing via VPA plus workload profiling, spot-compatible scheduling for bursty workloads, cost attribution per team or namespace, idle resource crawler, and budget alerts.</p>
        
        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Per-container right-sizing via VPA and workload profiling with safe-in-place patch</li>
            <li>Spot-compatible scheduling for bursty workloads onto sporadically preemptible instances</li>
            <li>Cost allocation per workload to the owning team or namespace by codebase tag</li>
            <li>Idle resource crawler — auto-suspend or delete untouched workloads after 7 idle days</li>
          </ul>
        </div>
        
        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>30 to 45 percent Kubernetes cluster cost reduction without workload changes</li>
            <li>Spot scheduling achieves 70 percent cheaper compute with 30 percent latency tradeoff clearly displayed</li>
            <li>Cost per team billed to codebase removes any debate about who spent what</li>
            <li>Idle cleanup recovers 15 percent of spend invisible in typical monthly reporting</li>
          </ul>
        </div>
        
        <div className="border border-purple-500 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Basic</h3>
              <p className="text-2xl font-bold mb-2">$1999</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border-2 border-purple-500">
              <h3 className="font-semibold mb-2">Pro</h3>
              <p className="text-2xl font-bold mb-2">$5999</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Enterprise</h3>
              <p className="text-2xl font-bold mb-2">$17999</p>
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
