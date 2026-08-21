import JsonLd from '@/components/JsonLd';
import Link from 'next/link';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata = {
  title: "IT Quality Assurance & Testing Automation - Zion Tech Group",
  description: "Comprehensive QA and testing automation. From manual testing to full test automation with CI/CD integration. Ensure quality at speed.",
  alternates: {
    canonical: `https://ziontechgroup.com/services/it-quality-assurance`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
    <JsonLd data={'@context': 'https://schema.org', '@type': 'Service', 'name': 'IT Quality Assurance & Testing Automation', 'description': 'Comprehensive QA and testing automation. From manual testing to full test automation with CI/CD integration. Ensure quality at speed.', 'serviceType': 'it', 'provider': {'@type': 'Organization', 'name': 'Zion Tech Group', 'url': 'https://ziontechgroup.com', 'contactPoint': {'@type': 'ContactPoint', 'email': 'kleber@ziontechgroup.com', 'telephone': '+1 302 464 0950', 'contactType': 'sales'}}, 'serviceArea': {'@type': 'Place', 'name': 'technology'}, 'hasOfferCatalog': {'@type': 'OfferCatalog', 'name': 'IT Quality Assurance & Testing Automation Pricing Plans', 'itemListElement': [{'@type': 'Offer', 'name': 'Basic', 'price': '$3,000/mo', 'priceCurrency': 'USD'}, {'@type': 'Offer', 'name': 'Pro', 'price': '$7,000/mo', 'priceCurrency': 'USD'}, {'@type': 'Offer', 'name': 'Enterprise', 'price': 'Custom', 'priceCurrency': 'USD'}]}} />
    <JsonLd data={'@context': 'https://schema.org', '@type': 'FAQPage', 'mainEntity': [{'@type': 'Question', 'name': 'Test strategy and planning', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Test strategy and planning'}}, {'@type': 'Question', 'name': 'Test automation framework development', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Test automation framework development'}}, {'@type': 'Question', 'name': 'Selenium, Cypress, Playwright automation', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Selenium, Cypress, Playwright automation'}}, {'@type': 'Question', 'name': 'What business impact can I expect?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Reduce testing time by 70% with automation; Catch 95% of bugs before production; Enable continuous delivery with confidence'}}, {'@type': 'Question', 'name': 'How do I get started with this service?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Contact our team at hello@ziontechgroup.com or book a free consultation at https://calendly.com/kleber-ziontechgroup/consultation to get started.'}}]} />
      <div className="max-w-4xl mx-auto">
        <BreadcrumbSchema path={`/services/it-quality-assurance`} title="IT Quality Assurance & Testing Automation" />
        <h1 className="text-4xl font-bold mb-6">🧪 IT Quality Assurance & Testing Automation</h1>
        <p className="text-lg text-gray-300 mb-8">Comprehensive QA and testing automation. From manual testing to full test automation with CI/CD integration. Ensure quality at speed.</p>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Test strategy and planning</li>
            <li>Test automation framework development</li>
            <li>Selenium, Cypress, Playwright automation</li>
            <li>Performance and load testing</li>
            <li>Security testing and vulnerability scanning</li>
            <li>CI/CD pipeline integration</li>
            <li>Test reporting and analytics</li>
            <li>Dedicated QA engineers and managers</li>
          </ul>
        </div>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Reduce testing time by 70% with automation</li>
            <li>Catch 95% of bugs before production</li>
            <li>Enable continuous delivery with confidence</li>
            <li>Reduce QA costs while improving quality</li>
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
              <p className="text-2xl font-bold mb-2">$$7,000/mo/month</p>
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
