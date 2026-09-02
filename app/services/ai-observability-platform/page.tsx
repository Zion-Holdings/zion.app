import StandardPage from "@/components/StandardPage";
import Link from "next/link";

export const metadata = {
  title: "AI Observability Platform - Zion Tech Group",
  description: "Comprehensive AI observability and monitoring platform for tracking model performance, detecting anomalies, and optimizing AI operations.",
  alternates: { canonical: "https://ziontechgroup.com/services/ai-observability-platform" }
};

export default function AIObservabilityPlatformPage() {
  return (
    <StandardPage
      title="AI Observability Platform"
      subtitle="Comprehensive AI observability and monitoring platform for tracking model performance, detecting anomalies, and optimizing AI operations."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services/" },
        { label: "AI Observability Platform" },
      ]}
    >
      <div className="max-w-4xl mx-auto">
        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>Real-time model performance monitoring</li>
            <li>Anomaly detection and alerting</li>
            <li>Model drift analysis</li>
            <li>Custom dashboard creation</li>
            <li>Integration with existing ML pipelines</li>
            <li>Automated reporting and insights</li>
          </ul>
        </div>
        <div className="border-t border-slate-800 mt-8 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
          <Link href="/services/" className="text-purple-300 hover:text-purple-200">← Back to All Services</Link>
          <Link href="/tools/" className="text-slate-400 hover:text-slate-300">Try our free tools →</Link>
        </div>
      </div>
    </StandardPage>
  );
}
