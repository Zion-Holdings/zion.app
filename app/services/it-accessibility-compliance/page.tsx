import JsonLd from '@/components/JsonLd';
import Link from 'next/link';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata = {
  title: "IT Accessibility Compliance & Digital Inclusion - Zion Tech Group",
  description: "Digital accessibility compliance for WCAG 2.1, ADA, and Section 508. Audits, remediation, and ongoing monitoring to ensure your digital properties are accessible to all.",
  alternates: {
    canonical: `https://ziontechgroup.com/services/it-accessibility-compliance`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
    <JsonLd data={'@context': 'https://schema.org', '@type': 'Service', 'name': 'IT Accessibility Compliance & Digital Inclusion', 'description': 'Digital accessibility compliance for WCAG 2.1, ADA, and Section 508. Audits, remediation, and ongoing monitoring to ensure your digital properties are accessible to all.', 'serviceType': 'it', 'provider': {'@type': 'Organization', 'name': 'Zion Tech Group', 'url': 'https://ziontechgroup.com', 'contactPoint': {'@type': 'ContactPoint', 'email': 'kleber@ziontechgroup.com', 'telephone': '+1 302 464 0950', 'contactType': 'sales'}}, 'serviceArea': {'@type': 'Place', 'name': 'technology'}, 'hasOfferCatalog': {'@type': 'OfferCatalog', 'name': 'IT Accessibility Compliance & Digital Inclusion Pricing Plans', 'itemListElement': [{'@type': 'Offer', 'name': 'Basic', 'price': '$2,000/mo', 'priceCurrency': 'USD'}, {'@type': 'Offer', 'name': 'Pro', 'price': '$5,000/mo', 'priceCurrency': 'USD'}, {'@type': 'Offer', 'name': 'Enterprise', 'price': 'Custom', 'priceCurrency': 'USD'}]}} />
    <JsonLd data={'@context': 'https://schema.org', '@type': 'FAQPage', 'mainEntity': [{'@type': 'Question', 'name': 'WCAG 2.1 AA compliance audit', 'acceptedAnswer': {'@type': 'Answer', 'text': 'WCAG 2.1 AA compliance audit'}}, {'@type': 'Question', 'name': 'Automated accessibility scanning', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Automated accessibility scanning'}}, {'@type': 'Question', 'name': 'Manual testing with assistive technologies', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Manual testing with assistive technologies'}}, {'@type': 'Question', 'name': 'What business impact can I expect?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Achieve WCAG 2.1 AA compliance; Reduce legal risk of accessibility lawsuits; Reach 15% more users with accessible design'}}, {'@type': 'Question', 'name': 'How do I get started with this service?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Contact our team at hello@ziontechgroup.com or book a free consultation at https://calendly.com/kleber-ziontechgroup/consultation to get started.'}}]} />
      <div className="max-w-4xl mx-auto">
        <BreadcrumbSchema path={`/services/it-accessibility-compliance`} title="IT Accessibility Compliance & Digital Inclusion" />
        <h1 className="text-4xl font-bold mb-6">♿ IT Accessibility Compliance & Digital Inclusion</h1>
        <p className="text-lg text-gray-300 mb-8">Digital accessibility compliance for WCAG 2.1, ADA, and Section 508. Audits, remediation, and ongoing monitoring to ensure your digital properties are accessible to all.</p>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>WCAG 2.1 AA compliance audit</li>
            <li>Automated accessibility scanning</li>
            <li>Manual testing with assistive technologies</li>
            <li>Remediation guidance and implementation</li>
            <li>VPAT and accessibility statement creation</li>
            <li>Ongoing monitoring and alerting</li>
            <li>Training for developers and content teams</li>
            <li>Legal compliance documentation</li>
          </ul>
        </div>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Achieve WCAG 2.1 AA compliance</li>
            <li>Reduce legal risk of accessibility lawsuits</li>
            <li>Reach 15% more users with accessible design</li>
            <li>Demonstrate commitment to digital inclusion</li>
          </ul>
        </div>

        <div className="border border-purple-500 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Basic</h3>
              <p className="text-2xl font-bold mb-2">$$2,000/mo/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border-2 border-purple-500">
              <h3 className="font-semibold mb-2">Pro</h3>
              <p className="text-2xl font-bold mb-2">$$5,000/mo/month</p>
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
