import { } from 'next/navigation';

export const metadata = {
  title: "GitOps Enterprise Platform - Zion Tech Group",
  description: "Full GitOps on Kubernetes: ArgoCD + Argo Rollouts (canary/blue-green), Terraform provisioning, Kyverno admission policy, automated drift remediation.",
  alternates: {
    canonical: `https://ziontechgroup.com/services/cloud-gitops-enterprise-platform`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">GitOps Enterprise Platform</h1>
        <p className="text-lg text-gray-300 mb-8">Full GitOps on Kubernetes: ArgoCD + Argo Rollouts (canary/blue-green), Terraform provisioning, Kyverno admission policy, automated drift remediation.</p>
        
        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>ArgoCD GitOps synced per environment</li>
            <li>Argo Rollouts progressive delivery (canary/blue-green)</li>
            <li>Terraform EKS/GKE/AKS provisioning</li>
            <li>Kyverno admission policies + OPA-Gatekeeper</li>
            <li>Drift auto-remediation reconciler</li>
          </ul>
        </div>
        
        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>GitOps audit trail, no manual kubectl</li>
            <li>Progressive delivery canary/blue-green</li>
            <li>Zero-drift enforced by reconciler</li>
            <li>Policy-as-code = compliance-by-configuration</li>
          </ul>
        </div>
        
        <div className="border border-purple-500 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Basic</h3>
              <p className="text-2xl font-bold mb-2">$999</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border-2 border-purple-500">
              <h3 className="font-semibold mb-2">Pro</h3>
              <p className="text-2xl font-bold mb-2">$2999</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Enterprise</h3>
              <p className="text-2xl font-bold mb-2">$9999</p>
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
