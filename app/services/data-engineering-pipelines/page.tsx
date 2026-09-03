import StandardPage from "@/components/StandardPage";
import Link from "next/link";

export const metadata = {
  title: "Data Engineering Pipelines - Zion Tech Group",
  description: "Design and operate reliable data pipelines for analytics, ML, and business intelligence across cloud and on-prem.",
  alternates: { canonical: "https://ziontechgroup.com/services/data-engineering-pipelines" }
};

export default function DataPipelinesPage() {
  return (
    <StandardPage
      title="Data Engineering Pipelines"
      subtitle="Design and operate reliable data pipelines for analytics, ML, and business intelligence across cloud and on-prem."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services/" },
        { label: "Data Engineering Pipelines" },
      ]}
    >
      <div className="max-w-4xl mx-auto">
        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>Streaming and batch pipelines</li>
            <li>Schema governance</li>
            <li>Data quality checks</li>
            <li>Pipeline orchestration</li>
            <li>Cost-aware scaling</li>
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
