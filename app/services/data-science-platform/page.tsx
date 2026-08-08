import { } from 'next/navigation';

export const metadata = {
  title: "Data Science Platform (Managed) - Zion Tech Group",
  description: "Managed data science on Kubernetes: MLflow tracking, model registry, managed feature store, KServe/Seldon inference, model CI/CD, GPU scheduling. Batch + real-t",
  alternates: {
    canonical: `https://ziontechgroup.com/services/data-science-platform`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Data Science Platform (Managed)</h1>
        <p className="text-lg text-gray-300 mb-8">Managed data science on Kubernetes: MLflow tracking, model registry, managed feature store, KServe/Seldon inference, model CI/CD, GPU scheduling. Batch + real-time inference.</p>
        
        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>MLflow experiment tracking + model registry</li>
            <li>Managed feature store (Feast) auto-provisioned</li>
            <li>KServe/Seldon batch + real-time inference</li>
            <li>Model CI/CD per training run + gate before prod</li>
            <li>GPU scheduling per experiment, no queue</li>
          </ul>
        </div>
        
        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Ship ML models in days not weeks</li>
            <li>Track every experiment without losing results</li>
            <li>Feature store serves sub-10ms at 10k QPS</li>
            <li>Model versioning + canary rollout, no manual deploy</li>
          </ul>
        </div>
        
        <div className="border border-purple-500 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Basic</h3>
              <p className="text-2xl font-bold mb-2">$1499</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border-2 border-purple-500">
              <h3 className="font-semibold mb-2">Pro</h3>
              <p className="text-2xl font-bold mb-2">$3999</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Enterprise</h3>
              <p className="text-2xl font-bold mb-2">$12999</p>
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
