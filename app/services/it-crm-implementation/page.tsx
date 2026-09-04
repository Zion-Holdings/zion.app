import Link from 'next/link';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata = {
  title: "IT CRM Implementation & Customer Data Platform - Zion Tech Group",
  description: "CRM implementation and customer data platform setup. Salesforce, HubSpot, or Microsoft Dynamics — with custom workflows, integrations, and analytics.",
  alternates: {
    canonical: `https://ziontechgroup.com/services/it-crm-implementation`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <BreadcrumbSchema path={`/services/it-crm-implementation`} title="IT CRM Implementation & Customer Data Platform" />
        <h1 className="text-4xl font-bold mb-6">🤝 IT CRM Implementation & Customer Data Platform</h1>
        <p className="text-lg text-gray-300 mb-8">CRM implementation and customer data platform setup. Salesforce, HubSpot, or Microsoft Dynamics — with custom workflows, integrations, and analytics.</p>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>CRM selection and licensing optimization</li>
            <li>Custom object and workflow design</li>
            <li>Sales process automation</li>
            <li>Marketing automation integration</li>
            <li>Customer data platform (CDP) setup</li>
            <li>Integration with ERP, marketing, and support tools</li>
            <li>Custom dashboards and reporting</li>
            <li>User training and adoption programs</li>
          </ul>
        </div>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Increase sales productivity by 35%</li>
            <li>Unify customer data across all systems</li>
            <li>Automate sales and marketing workflows</li>
            <li>Improve customer retention with 360-degree view</li>
          </ul>
        </div>

        <div className="border border-purple-500 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Basic</h3>
              <p className="text-2xl font-bold mb-2">$$3,000/mo/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border-2 border-purple-500">
              <h3 className="font-semibold mb-2">Pro</h3>
              <p className="text-2xl font-bold mb-2">$$8,000/mo/month</p>
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
