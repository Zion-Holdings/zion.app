import JsonLd from '@/components/JsonLd';
import Link from 'next/link';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata = {
  title: "IT Microsoft 365 Deployment & Management - Zion Tech Group",
  description: "Complete Microsoft 365 deployment, migration, and management. Exchange, SharePoint, Teams, OneDrive, and security configuration.",
  alternates: {
    canonical: `https://ziontechgroup.com/services/it-microsoft-365`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
    <JsonLd data={'@context': 'https://schema.org', '@type': 'Service', 'name': 'IT Microsoft 365 Deployment & Management', 'description': 'Complete Microsoft 365 deployment, migration, and management. Exchange, SharePoint, Teams, OneDrive, and security configuration.', 'serviceType': 'it', 'provider': {'@type': 'Organization', 'name': 'Zion Tech Group', 'url': 'https://ziontechgroup.com', 'contactPoint': {'@type': 'ContactPoint', 'email': 'kleber@ziontechgroup.com', 'telephone': '+1 302 464 0950', 'contactType': 'sales'}}, 'serviceArea': {'@type': 'Place', 'name': 'technology'}, 'hasOfferCatalog': {'@type': 'OfferCatalog', 'name': 'IT Microsoft 365 Deployment & Management Pricing Plans', 'itemListElement': [{'@type': 'Offer', 'name': 'Basic', 'price': '$8/user/mo', 'priceCurrency': 'USD'}, {'@type': 'Offer', 'name': 'Pro', 'price': '$15/user/mo', 'priceCurrency': 'USD'}, {'@type': 'Offer', 'name': 'Enterprise', 'price': 'Custom', 'priceCurrency': 'USD'}]}} />
    <JsonLd data={'@context': 'https://schema.org', '@type': 'FAQPage', 'mainEntity': [{'@type': 'Question', 'name': 'M365 licensing optimization and procurement', 'acceptedAnswer': {'@type': 'Answer', 'text': 'M365 licensing optimization and procurement'}}, {'@type': 'Question', 'name': 'Email migration from legacy systems', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Email migration from legacy systems'}}, {'@type': 'Question', 'name': 'SharePoint and OneDrive deployment', 'acceptedAnswer': {'@type': 'Answer', 'text': 'SharePoint and OneDrive deployment'}}, {'@type': 'Question', 'name': 'What business impact can I expect?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Optimize M365 licensing costs by 30%; Migrate without business disruption; Secure M365 with best-practice configuration'}}, {'@type': 'Question', 'name': 'How do I get started with this service?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Contact our team at hello@ziontechgroup.com or book a free consultation at https://calendly.com/kleber-ziontechgroup/consultation to get started.'}}]} />
      <div className="max-w-4xl mx-auto">
        <BreadcrumbSchema path={`/services/it-microsoft-365`} title="IT Microsoft 365 Deployment & Management" />
        <h1 className="text-4xl font-bold mb-6">📎 IT Microsoft 365 Deployment & Management</h1>
        <p className="text-lg text-gray-300 mb-8">Complete Microsoft 365 deployment, migration, and management. Exchange, SharePoint, Teams, OneDrive, and security configuration.</p>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>M365 licensing optimization and procurement</li>
            <li>Email migration from legacy systems</li>
            <li>SharePoint and OneDrive deployment</li>
            <li>Teams configuration and governance</li>
            <li>M365 security and compliance setup</li>
            <li>Intune device management</li>
            <li>User training and adoption programs</li>
            <li>Ongoing management and support</li>
          </ul>
        </div>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Optimize M365 licensing costs by 30%</li>
            <li>Migrate without business disruption</li>
            <li>Secure M365 with best-practice configuration</li>
            <li>Drive user adoption with training</li>
          </ul>
        </div>

        <div className="border border-purple-500 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Basic</h3>
              <p className="text-2xl font-bold mb-2">$$8/user/mo/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border-2 border-purple-500">
              <h3 className="font-semibold mb-2">Pro</h3>
              <p className="text-2xl font-bold mb-2">$$15/user/mo/month</p>
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
      </div></main>
  );
}
