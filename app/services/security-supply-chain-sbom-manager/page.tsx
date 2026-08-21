import JsonLd from '@/components/JsonLd';
import Link from 'next/link';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata = {
  title: "Software Bill-of-Materials Manager - Zion Tech Group",
  description: "Full SBOM lifecycle management: auto-generate SPDX and Cyclone-DX per build, license-compliance check, vulnerability and CVE matching per component, attestation signing, and SBOM consumer portal per vendor release.",
  alternates: {
    canonical: `https://ziontechgroup.com/services/security-supply-chain-sbom-manager`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
    <JsonLd data={'@context': 'https://schema.org', '@type': 'Service', 'name': 'Software Bill-of-Materials Manager', 'description': 'Full SBOM lifecycle management: auto-generate SPDX and Cyclone-DX per build, license-compliance check, vulnerability and CVE matching per component, attestation signing, and SBOM consumer portal per vendor release.', 'serviceType': 'security', 'provider': {'@type': 'Organization', 'name': 'Zion Tech Group', 'url': 'https://ziontechgroup.com', 'contactPoint': {'@type': 'ContactPoint', 'email': 'commercial@ziontechgroup.com', 'telephone': '+1 302 464 0950', 'contactType': 'sales'}}, 'serviceArea': {'@type': 'Place', 'name': 'General'}, 'hasOfferCatalog': {'@type': 'OfferCatalog', 'name': 'Software Bill-of-Materials Manager Pricing Plans', 'itemListElement': [{'@type': 'Offer', 'name': 'Basic', 'price': '$299/mo', 'priceCurrency': 'USD'}, {'@type': 'Offer', 'name': 'Pro', 'price': '$899/mo', 'priceCurrency': 'USD'}, {'@type': 'Offer', 'name': 'Enterprise', 'price': '$2,999/mo', 'priceCurrency': 'USD'}]}} />
    <JsonLd data={'@context': 'https://schema.org', '@type': 'FAQPage', 'mainEntity': [{'@type': 'Question', 'name': 'Auto-generate SBOM per build in SPDX and Cyclone-DX formats', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Auto-generate SBOM per build in SPDX and Cyclone-DX formats'}}, {'@type': 'Question', 'name': 'License compliance matrix covering GPL, Apache, MIT, and commercial licenses', 'acceptedAnswer': {'@type': 'Answer', 'text': 'License compliance matrix covering GPL, Apache, MIT, and commercial licenses'}}, {'@type': 'Question', 'name': 'CVE matching per SBOM component auto-updated daily from NVD and vendor feeds', 'acceptedAnswer': {'@type': 'Answer', 'text': 'CVE matching per SBOM component auto-updated daily from NVD and vendor feeds'}}, {'@type': 'Question', 'name': 'What business impact can I expect?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Reduce costs with software bill-of-materials manager; Improve operational efficiency; Scale without complexity'}}, {'@type': 'Question', 'name': 'How do I get started with this service?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Contact our team at hello@ziontechgroup.com or book a free consultation at https://calendly.com/kleber-ziontechgroup/consultation to get started.'}}]} />
      <div className="max-w-4xl mx-auto">
        <BreadcrumbSchema path={`/services/security-supply-chain-sbom-manager`} title="Software Bill-of-Materials Manager" />
        <h1 className="text-4xl font-bold mb-6">♿ Software Bill-of-Materials Manager</h1>
        <p className="text-lg text-gray-300 mb-8">Full SBOM lifecycle management: auto-generate SPDX and Cyclone-DX per build, license-compliance check, vulnerability and CVE matching per component, attestation signing, and SBOM consumer portal per vendor release.</p>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Auto-generate SBOM per build in SPDX and Cyclone-DX formats</li>
            <li>License compliance matrix covering GPL, Apache, MIT, and commercial licenses</li>
            <li>CVE matching per SBOM component auto-updated daily from NVD and vendor feeds</li>
            <li>Attestation signing and SBOM consumer portal per vendor per OS release</li>
          </ul>
        </div>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Reduce costs with software bill-of-materials manager</li>
            <li>Improve operational efficiency</li>
            <li>Scale without complexity</li>
            <li>Enterprise-grade reliability</li>
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
