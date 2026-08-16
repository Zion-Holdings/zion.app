
export const metadata = {
  title: "Edge AI Deployment Platform - Zion Tech Group",
  description: "One-click edge AI model deployment to 50k+ global edge points-of-presence: ONNX/TensorRT/GGUF model package, auto-scaling inference, A/B model rollout, cold-war",
  alternates: {
    canonical: `https://ziontechgroup.com/services/edge-ai-deployment-platform-f16ab9cb`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Edge AI Deployment Platform</h1>
        <p className="text-lg text-gray-300 mb-8">One-click edge AI model deployment to 50k+ global edge points-of-presence: ONNX/TensorRT/GGUF model package, auto-scaling inference, A/B model rollout, cold-warm-cache tiering, and robust offline-first sync for disconnected sites.</p>
        
        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>One-click deploy ONNX/TensorRT/GGUF model to global edge PoPs</li>
            <li>Cold-warm model cache tiers reduce first-inference latency by 80%+</li>
            <li>A/B model rollout: blue-green promotion of new model versions with traffic splitting</li>
            <li>Offline-first sync buffer: 24 h message queue for disconnected branch-store sites</li>
            <li>Hardware-accelerated inference: works on Jetson, Coral TPU, RK3588 edge hardware</li>
          </ul>
        </div>
        
        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Inference latency &lt;50ms for retail and industrial edge use cases vs. 300+ ms round-trip to cloud</li>
            <li>Model version rollover in 30 s vs. hours of cloud-deployment pipeline wrangle</li>
            <li>Offline-first operation means edge store shelf-price updates stay synced even with 2 d of fibre cut</li>
          </ul>
        </div>
        
        <div className="border border-purple-500 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Basic</h3>
              <p className="text-2xl font-bold mb-2">$249/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border-2 border-purple-500">
              <h3 className="font-semibold mb-2">Pro</h3>
              <p className="text-2xl font-bold mb-2">$899/month</p>
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
