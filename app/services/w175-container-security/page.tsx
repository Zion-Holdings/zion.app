import JsonLd from '@/components/JsonLd';
import Link from 'next/link';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata = {
  title: "Container & K8s Security Platform - Zion Tech Group",
  description: "Full container security: image scanning, runtime protection, K8s policy enforcement, network policy, and compliance. From build to runtime protection.",
  alternates: {
    canonical: `https://ziontechgroup.com/services/w175-container-security`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
    <JsonLd data={'@context': 'https://schema.org', '@type': 'Service', 'name': 'Container & K8s Security Platform', 'description': 'Full container security: image scanning, runtime protection, K8s policy enforcement, network policy, and compliance. From build to runtime protection.', 'serviceType': 'cloud', 'provider': {'@type': 'Organization', 'name': 'Zion Tech Group', 'url': 'https://ziontechgroup.com', 'contactPoint': {'@type': 'ContactPoint', 'email': 'kleber@ziontechgroup.com', 'telephone': '+1 302 464 0950', 'contactType': 'sales'}}, 'serviceArea': {'@type': 'Place', 'name': 'Cloud Security'}, 'hasOfferCatalog': {'@type': 'OfferCatalog', 'name': 'Container & K8s Security Platform Pricing Plans', 'itemListElement': [{'@type': 'Offer', 'name': 'Basic', 'price': '$299/mo', 'priceCurrency': 'USD'}, {'@type': 'Offer', 'name': 'Pro', 'price': '$899/mo', 'priceCurrency': 'USD'}, {'@type': 'Offer', 'name': 'Enterprise', 'price': '$2,999/mo', 'priceCurrency': 'USD'}]}} />
    <JsonLd data={'@context': 'https://schema.org', '@type': 'FAQPage', 'mainEntity': [{'@type': 'Question', 'name': 'Container image scanning (OS + app CVEs)', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Container image scanning (OS + app CVEs)'}}, {'@type': 'Question', 'name': 'SBOM generation and monitoring', 'acceptedAnswer': {'@type': 'Answer', 'text': 'SBOM generation and monitoring'}}, {'@type': 'Question', 'name': 'Runtime threat detection and blocking', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Runtime threat detection and blocking'}}, {'@type': 'Question', 'name': 'What business impact can I expect?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Never deploy vulnerable containers; Runtime protection catches zero-days; K8s policies enforce best practices'}}, {'@type': 'Question', 'name': 'How do I get started with this service?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Contact our team at hello@ziontechgroup.com or book a free consultation at https://calendly.com/kleber-ziontechgroup/consultation to get started.'}}]} />
      <div className="max-w-4xl mx-auto">
        <BreadcrumbSchema path={`/services/w175-container-security`} title="Container & K8s Security Platform" />
        <h1 className="text-4xl font-bold mb-6">🐳 Container & K8s Security Platform</h1>
        <p className="text-lg text-gray-300 mb-8">Full container security: image scanning, runtime protection, K8s policy enforcement, network policy, and compliance. From build to runtime protection.</p>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Container image scanning (OS + app CVEs)</li>
            <li>SBOM generation and monitoring</li>
            <li>Runtime threat detection and blocking</li>
            <li>K8s policy enforcement (OPA, Kyverno)</li>
            <li>Network policy and micro-segmentation</li>
            <li>Compliance checks (CIS, NIST, PCI)</li>
            <li>Integration with Trivy, Falco, Aqua, Sysdig</li>
          </ul>
        </div>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Never deploy vulnerable containers</li>
            <li>Runtime protection catches zero-days</li>
            <li>K8s policies enforce best practices</li>
            <li>Network policy limits blast radius</li>
          </ul>
        </div>

        <div className="border border-purple-500 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Basic</h3>
              <p className="text-2xl font-bold mb-2">$$299/mo/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border-2 border-purple-500">
              <h3 className="font-semibold mb-2">Pro</h3>
              <p className="text-2xl font-bold mb-2">$$899/mo/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Enterprise</h3>
              <p className="text-2xl font-bold mb-2">$$2,999/mo/month</p>
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
