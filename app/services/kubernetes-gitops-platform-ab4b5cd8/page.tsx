
export const metadata = {
  title: "Kubernetes GitOps Platform - Zion Tech Group",
  description: "GitOps-driven Kubernetes operations: declarative manifests stored in Git, automated drift detection and reconciliation, environment promotion workflows, progres",
  alternates: {
    canonical: `https://ziontechgroup.com/services/kubernetes-gitops-platform-ab4b5cd8`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Kubernetes GitOps Platform</h1>
        <p className="text-lg text-gray-300 mb-8">GitOps-driven Kubernetes operations: declarative manifests stored in Git, automated drift detection and reconciliation, environment promotion workflows, progressive delivery (canary/blue-green), and built-in secrets management with external vault sync.</p>
        
        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Declarative manifests in Git — single source of truth for every cluster</li>
            <li>Drift detection + auto-reconciliation every 60 seconds</li>
            <li>Environment promotion: dev → staging → prod with approval gates</li>
            <li>Progressive delivery: canary, blue-green, feature flags, canary analysis</li>
            <li>Secrets: Vault, AWS Secrets Manager, Azure Key Vault with auto-rotation</li>
          </ul>
        </div>
        
        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Reduce change-failure rate 50-80% via declarative GitOps + audit trail</li>
            <li>Deploy environments 5-10× faster with automated promotion pipelines</li>
            <li>Eliminate it works on my machine via environment-per-branch workflows</li>
          </ul>
        </div>
        
        <div className="border border-purple-500 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Basic</h3>
              <p className="text-2xl font-bold mb-2">$199/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border-2 border-purple-500">
              <h3 className="font-semibold mb-2">Pro</h3>
              <p className="text-2xl font-bold mb-2">$749/month</p>
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
