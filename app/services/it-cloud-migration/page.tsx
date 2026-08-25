import Link from 'next/link';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata = {
  title: "IT Cloud Migration & Modernization Factory - Zion Tech Group",
  description: "End-to-end cloud migration and application modernization. Rehost, re-platform, or refactor workloads to AWS, Azure, or GCP with zero downtime and automated testing.",
  alternates: {
    canonical: `https://ziontechgroup.com/services/it-cloud-migration`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <BreadcrumbSchema path={`/services/it-cloud-migration`} title="IT Cloud Migration & Modernization Factory" />
        <h1 className="text-4xl font-bold mb-6">☁️ IT Cloud Migration & Modernization Factory</h1>
        <p className="text-lg text-gray-300 mb-8">End-to-end cloud migration and application modernization. Rehost, re-platform, or refactor workloads to AWS, Azure, or GCP with zero downtime and automated testing.</p>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Cloud readiness assessment and roadmap</li>
            <li>Rehost, re-platform, refactor strategies</li>
            <li>Database migration with zero downtime</li>
            <li>Containerization and Kubernetes migration</li>
            <li>Automated testing and validation</li>
            <li>Cost optimization and FinOps</li>
            <li>Security and compliance validation</li>
            <li>Post-migration support and optimization</li>
          </ul>
        </div>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Migrate in half the time with automation</li>
            <li>Reduce cloud costs by 30% from day one</li>
            <li>Zero downtime during migration</li>
            <li>Modernize legacy apps for cloud-native</li>
          </ul>
        </div>

        <div className="border border-purple-500 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Basic</h3>
              <p className="text-2xl font-bold mb-2">$$10,000/mo/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border-2 border-purple-500">
              <h3 className="font-semibold mb-2">Pro</h3>
              <p className="text-2xl font-bold mb-2">$$25,000/mo/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Enterprise</h3>
              <p className="text-2xl font-bold mb-2">$Custom/month</p>
            </div>
          </div>
        </div>
        <div className="border-t border-slate-800 mt-8 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
          <Link href="/services/" className="text-purple-300 hover:text-purple-200">← Back to All Services</Link>
          <Link href="/tools/" className="text-slate-400 hover:text-slate-300">Try our free tools →</Link>
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
