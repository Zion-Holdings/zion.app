import JsonLd from '@/components/JsonLd';
import Link from 'next/link';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata = {
  title: "Application Security Testing Platform - Zion Tech Group",
  description: "Comprehensive application security testing with SAST, DAST, SCA, and API security testing. Unified platform for DevSecOps teams.",
  alternates: {
    canonical: `https://ziontechgroup.com/services/security-application-security-testing`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
    <JsonLd data={'@context': 'https://schema.org', '@type': 'Service', 'name': 'Application Security Testing Platform', 'description': 'Comprehensive application security testing with SAST, DAST, SCA, and API security testing. Unified platform for DevSecOps teams.', 'serviceType': 'security', 'provider': {'@type': 'Organization', 'name': 'Zion Tech Group', 'url': 'https://ziontechgroup.com', 'contactPoint': {'@type': 'ContactPoint', 'email': 'kleber@ziontechgroup.com', 'telephone': '+1 302 464 0950', 'contactType': 'sales'}}, 'serviceArea': {'@type': 'Place', 'name': 'Technology'}, 'hasOfferCatalog': {'@type': 'OfferCatalog', 'name': 'Application Security Testing Platform Pricing Plans', 'itemListElement': [{'@type': 'Offer', 'name': 'Basic', 'price': '$799/mo', 'priceCurrency': 'USD'}, {'@type': 'Offer', 'name': 'Pro', 'price': '$2,499/mo', 'priceCurrency': 'USD'}, {'@type': 'Offer', 'name': 'Enterprise', 'price': 'Custom', 'priceCurrency': 'USD'}]}} />
    <JsonLd data={'@context': 'https://schema.org', '@type': 'FAQPage', 'mainEntity': [{'@type': 'Question', 'name': 'Static application security testing (SAST)', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Static application security testing (SAST)'}}, {'@type': 'Question', 'name': 'Dynamic application security testing (DAST)', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Dynamic application security testing (DAST)'}}, {'@type': 'Question', 'name': 'Software composition analysis (SCA)', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Software composition analysis (SCA)'}}, {'@type': 'Question', 'name': 'What business impact can I expect?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Find vulnerabilities early; Unified security testing platform; Developer-friendly remediation'}}, {'@type': 'Question', 'name': 'How do I get started with this service?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Contact our team at hello@ziontechgroup.com or book a free consultation at https://calendly.com/kleber-ziontechgroup/consultation to get started.'}}]} />
      <div className="max-w-4xl mx-auto">
        <BreadcrumbSchema path={`/services/security-application-security-testing`} title="Application Security Testing Platform" />
        <h1 className="text-4xl font-bold mb-6">🔍 Application Security Testing Platform</h1>
        <p className="text-lg text-gray-300 mb-8">Comprehensive application security testing with SAST, DAST, SCA, and API security testing. Unified platform for DevSecOps teams.</p>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Static application security testing (SAST)</li>
            <li>Dynamic application security testing (DAST)</li>
            <li>Software composition analysis (SCA)</li>
            <li>API security testing</li>
            <li>Interactive application security testing (IAST)</li>
            <li>Integration with CI/CD pipelines</li>
            <li>Vulnerability prioritization</li>
            <li>Remediation guidance</li>
          </ul>
        </div>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Find vulnerabilities early</li>
            <li>Unified security testing platform</li>
            <li>Developer-friendly remediation</li>
            <li>Automate security in CI/CD</li>
          </ul>
        </div>

        <div className="border border-purple-500 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Basic</h3>
              <p className="text-2xl font-bold mb-2">$$799/mo/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border-2 border-purple-500">
              <h3 className="font-semibold mb-2">Pro</h3>
              <p className="text-2xl font-bold mb-2">$$2,499/mo/month</p>
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
