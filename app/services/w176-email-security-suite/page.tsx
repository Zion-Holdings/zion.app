import JsonLd from '@/components/JsonLd';
import Link from 'next/link';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata = {
  title: "Email Security & Protection Suite - Zion Tech Group",
  description: "Complete email security: inbound/outbound filtering, ATP sandboxing, DLP, encryption, and archival. Protect against phishing, BEC, and data exfiltration.",
  alternates: {
    canonical: `https://ziontechgroup.com/services/w176-email-security-suite`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
    <JsonLd data={{'@context': 'https://schema.org', '@type': 'Service', 'name': 'Email Security & Protection Suite', 'description': 'Complete email security: inbound/outbound filtering, ATP sandboxing, DLP, encryption, and archival. Protect against phishing, BEC, and data exfiltration.', 'serviceType': 'security', 'provider': {'@type': 'Organization', 'name': 'Zion Tech Group', 'url': 'https://ziontechgroup.com', 'contactPoint': {'@type': 'ContactPoint', 'email': 'kleber@ziontechgroup.com', 'telephone': '+1 302 464 0950', 'contactType': 'sales'}}, 'serviceArea': {'@type': 'Place', 'name': 'Cybersecurity'}, 'hasOfferCatalog': {'@type': 'OfferCatalog', 'name': 'Email Security & Protection Suite Pricing Plans', 'itemListElement': [{'@type': 'Offer', 'name': 'Basic', 'price': '$4/user/mo', 'priceCurrency': 'USD'}, {'@type': 'Offer', 'name': 'Pro', 'price': '$8/user/mo', 'priceCurrency': 'USD'}, {'@type': 'Offer', 'name': 'Enterprise', 'price': '$15/user/mo', 'priceCurrency': 'USD'}]}} }/>
    <JsonLd data={{'@context': 'https://schema.org', '@type': 'FAQPage', 'mainEntity': [{'@type': 'Question', 'name': 'Inbound spam and phishing filtering', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Inbound spam and phishing filtering'}}, {'@type': 'Question', 'name': 'BEC and impersonation detection', 'acceptedAnswer': {'@type': 'Answer', 'text': 'BEC and impersonation detection'}}, {'@type': 'Question', 'name': 'Attachment sandboxing (ATP)', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Attachment sandboxing (ATP)'}}, {'@type': 'Question', 'name': 'What business impact can I expect?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Block 99.9% of phishing and spam; BEC detection prevents wire fraud; DLP prevents sensitive data leaks'}}, {'@type': 'Question', 'name': 'How do I get started with this service?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Contact our team at hello@ziontechgroup.com or book a free consultation at https://calendly.com/kleber-ziontechgroup/consultation to get started.'}}]} }/>
      <div className="max-w-4xl mx-auto">
        <BreadcrumbSchema path={`/services/w176-email-security-suite`} title="Email Security & Protection Suite" />
        <h1 className="text-4xl font-bold mb-6">🛡️ Email Security & Protection Suite</h1>
        <p className="text-lg text-gray-300 mb-8">Complete email security: inbound/outbound filtering, ATP sandboxing, DLP, encryption, and archival. Protect against phishing, BEC, and data exfiltration.</p>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Inbound spam and phishing filtering</li>
            <li>BEC and impersonation detection</li>
            <li>Attachment sandboxing (ATP)</li>
            <li>Outbound DLP and encryption</li>
            <li>Email archival and eDiscovery</li>
            <li>DMARC reporting and enforcement</li>
            <li>Microsoft 365 and Google Workspace native integration</li>
          </ul>
        </div>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Block 99.9% of phishing and spam</li>
            <li>BEC detection prevents wire fraud</li>
            <li>DLP prevents sensitive data leaks</li>
            <li>Archival meets compliance requirements</li>
          </ul>
        </div>

        <div className="border border-purple-500 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Basic</h3>
              <p className="text-2xl font-bold mb-2">$$4/user/mo/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border-2 border-purple-500">
              <h3 className="font-semibold mb-2">Pro</h3>
              <p className="text-2xl font-bold mb-2">$$8/user/mo/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Enterprise</h3>
              <p className="text-2xl font-bold mb-2">$$15/user/mo/month</p>
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
