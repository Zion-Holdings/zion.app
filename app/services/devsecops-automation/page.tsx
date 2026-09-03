import StandardPage from "@/components/StandardPage";
import Link from "next/link";

export const metadata = {
  title: "DevSecOps Automation - Zion Tech Group",
  description: "Embed security into CI/CD with automated scanning, policy gates, secret management, and compliance reporting.",
  alternates: { canonical: "https://ziontechgroup.com/services/devsecops-automation" }
};

export default function DevSecOpsPage() {
  return (
    <StandardPage
      title="DevSecOps Automation"
      subtitle="Embed security into CI/CD with automated scanning, policy gates, secret management, and compliance reporting."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services/" },
        { label: "DevSecOps Automation" },
      ]}
    >
      <div className="max-w-4xl mx-auto">
        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>SAST/DAST scanning</li>
            <li>Policy as code enforcement</li>
            <li>Secrets rotation automation</li>
            <li>Compliance evidence generation</li>
            <li>Vulnerability management</li>
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
