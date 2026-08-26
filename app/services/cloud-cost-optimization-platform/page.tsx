import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Cloud Cost Optimization Platform | Zion Tech Group',
  description: 'Multi-cloud cost optimization platform for automated spend reduction, resource rightsizing, and FinOps governance.',
  alternates: { canonical: '/services/cloud-cost-optimization-platform/' },
};

export default function CloudCostOptimizationPlatformPage() {
  return (
    <main className="min-h-screen bg-slate-950 py-20">
      <div className="container-page">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Cloud Cost Optimization Platform
        </h1>
        <p className="text-slate-300 text-lg mb-6">
          Multi-cloud cost optimization platform for automated spend reduction, 
          resource rightsizing, and FinOps governance across AWS, Azure, and GCP.
        </p>
        <ul className="list-disc pl-6 text-slate-300 space-y-1 mb-8">
          <li>Automated idle resource detection and rightsizing recommendations</li>
          <li>Multi-cloud spend visibility with unified dashboards</li>
          <li>Commitment optimization (Reserved Instances, Savings Plans, CUDs)</li>
          <li>Anomaly detection and budget alerting</li>
          <li>FinOps governance: tagging policies, chargeback/showback</li>
          <li>Kubernetes cost allocation and optimization (EKS, AKS, GKE)</li>
        </ul>
        <Link href="/contact/" className="btn-primary">
          Request a cost assessment
        </Link>
      </div>
    </main>
  );
}