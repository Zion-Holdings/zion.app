import JsonLd from '@/components/JsonLd';
import Link from 'next/link';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata = {
  title: "Software Supply Chain Security - Zion Tech Group",
  description: "Secure your software supply chain: dependency scanning, SBOM management, build provenance (SLSA), artifact signing, and pipeline hardening.",
  alternates: {
    canonical: `https://ziontechgroup.com/services/w176-supply-chain-security`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
    <JsonLd data={{'@context': 'https://schema.org', '@type': 'Service', 'name': 'Software Supply Chain Security', 'description': 'Secure your software supply chain: dependency scanning, SBOM management, build provenance (SLSA), artifact signing, and pipeline hardening.', 'serviceType': 'security', 'provider': {'@type': 'Organization', 'name': 'Zion Tech Group', 'url': 'https://ziontechgroup.com', 'contactPoint': {'@type': 'ContactPoint', 'email': 'kleber@ziontechgroup.com', 'telephone': '+1 302 464 0950', 'contactType': 'sales'}}, 'serviceArea': {'@type': 'Place', 'name': 'DevSecOps'}, 'hasOfferCatalog': {'@type': 'OfferCatalog', 'name': 'Software Supply Chain Security Pricing Plans', 'itemListElement': [{'@type': 'Offer', 'name': 'Basic', 'price': '$399/mo', 'priceCurrency': 'USD'}, {'@type': 'Offer', 'name': 'Pro', 'price': '$1,199/mo', 'priceCurrency': 'USD'}, {'@type': 'Offer', 'name': 'Enterprise', 'price': '$3,999/mo', 'priceCurrency': 'USD'}]}} }/>
    <JsonLd data={{'@context': 'https://schema.org', '@type': 'FAQPage', 'mainEntity': [{'@type': 'Question', 'name': 'Dependency vulnerability scanning', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Dependency vulnerability scanning'}}, {'@type': 'Question', 'name': 'SBOM generation and management', 'acceptedAnswer': {'@type': 'Answer', 'text': 'SBOM generation and management'}}, {'@type': 'Question', 'name': 'Build provenance (SLSA level 1-4)', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Build provenance (SLSA level 1-4)'}}, {'@type': 'Question', 'name': 'What business impact can I expect?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Prevent supply chain attacks (SolarWinds-style); SBOM for transparency and compliance; SLSA provenance proves build integrity'}}, {'@type': 'Question', 'name': 'How do I get started with this service?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Contact our team at hello@ziontechgroup.com or book a free consultation at https://calendly.com/kleber-ziontechgroup/consultation to get started.'}}]} }/>
      <div className="max-w-4xl mx-auto">
        <BreadcrumbSchema path={`/services/w176-supply-chain-security`} title="Software Supply Chain Security" />
        <h1 className="text-4xl font-bold mb-6">🔗 Software Supply Chain Security</h1>
        <p className="text-lg text-gray-300 mb-8">Secure your software supply chain: dependency scanning, SBOM management, build provenance (SLSA), artifact signing, and pipeline hardening.</p>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Dependency vulnerability scanning</li>
            <li>SBOM generation and management</li>
            <li>Build provenance (SLSA level 1-4)</li>
            <li>Artifact signing (Sigstore, Cosign)</li>
            <li>Pipeline security hardening</li>
            <li>Private package registry security</li>
            <li>Integration with Snyk, Socket, Dependabot</li>
          </ul>
        </div>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Prevent supply chain attacks (SolarWinds-style)</li>
            <li>SBOM for transparency and compliance</li>
            <li>SLSA provenance proves build integrity</li>
            <li>Artifact signing prevents tampering</li>
          </ul>
        </div>

        <div className="border border-purple-500 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Basic</h3>
              <p className="text-2xl font-bold mb-2">$$399/mo/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border-2 border-purple-500">
              <h3 className="font-semibold mb-2">Pro</h3>
              <p className="text-2xl font-bold mb-2">$$1,199/mo/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Enterprise</h3>
              <p className="text-2xl font-bold mb-2">$$3,999/mo/month</p>
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
