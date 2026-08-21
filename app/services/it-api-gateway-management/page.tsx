import JsonLd from '@/components/JsonLd';
import Link from 'next/link';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata = {
  title: "API Gateway Management - Zion Tech Group",
  description: "Enterprise API gateway: rate limiting, API key management, OAuth2 + mTLS, usage analytics, developer portal, request/response transforms, and dead-letter queue handling across cloud and on-prem APIs.",
  alternates: {
    canonical: `https://ziontechgroup.com/services/it-api-gateway-management`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
    <JsonLd data={'@context': 'https://schema.org', '@type': 'Service', 'name': 'API Gateway Management', 'description': 'Enterprise API gateway: rate limiting, API key management, OAuth2 + mTLS, usage analytics, developer portal, request/response transforms, and dead-letter queue handling across cloud and on-prem APIs.', 'serviceType': 'it', 'provider': {'@type': 'Organization', 'name': 'Zion Tech Group', 'url': 'https://ziontechgroup.com', 'contactPoint': {'@type': 'ContactPoint', 'email': 'commercial@ziontechgroup.com', 'telephone': '+1 302 464 0950', 'contactType': 'sales'}}, 'serviceArea': {'@type': 'Place', 'name': 'Finance'}, 'hasOfferCatalog': {'@type': 'OfferCatalog', 'name': 'API Gateway Management Pricing Plans', 'itemListElement': [{'@type': 'Offer', 'name': 'Basic', 'price': '$49/mo', 'priceCurrency': 'USD'}, {'@type': 'Offer', 'name': 'Pro', 'price': '$199/mo', 'priceCurrency': 'USD'}, {'@type': 'Offer', 'name': 'Enterprise', 'price': '$699/mo', 'priceCurrency': 'USD'}]}} />
    <JsonLd data={'@context': 'https://schema.org', '@type': 'FAQPage', 'mainEntity': [{'@type': 'Question', 'name': 'Centralised rate limiting, throttling, protocol transforms', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Centralised rate limiting, throttling, protocol transforms'}}, {'@type': 'Question', 'name': 'OAuth2, mTLS, API-key auth with role-based scopes', 'acceptedAnswer': {'@type': 'Answer', 'text': 'OAuth2, mTLS, API-key auth with role-based scopes'}}, {'@type': 'Question', 'name': 'Developer self-service portal + SDK generation', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Developer self-service portal + SDK generation'}}, {'@type': 'Question', 'name': 'What business impact can I expect?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Reduce costs with api gateway management; Improve operational efficiency; Scale without complexity'}}, {'@type': 'Question', 'name': 'How do I get started with this service?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Contact our team at hello@ziontechgroup.com or book a free consultation at https://calendly.com/kleber-ziontechgroup/consultation to get started.'}}]} />
      <div className="max-w-4xl mx-auto">
        <BreadcrumbSchema path={`/services/it-api-gateway-management`} title="API Gateway Management" />
        <h1 className="text-4xl font-bold mb-6">♿ API Gateway Management</h1>
        <p className="text-lg text-gray-300 mb-8">Enterprise API gateway: rate limiting, API key management, OAuth2 + mTLS, usage analytics, developer portal, request/response transforms, and dead-letter queue handling across cloud and on-prem APIs.</p>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Centralised rate limiting, throttling, protocol transforms</li>
            <li>OAuth2, mTLS, API-key auth with role-based scopes</li>
            <li>Developer self-service portal + SDK generation</li>
            <li>Built-in developer portal: docs, try-it console, usage analytics</li>
            <li>Dead-letter queue + retry logic with configurable backoff</li>
          </ul>
        </div>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Reduce costs with api gateway management</li>
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
              <p className="text-2xl font-bold mb-2">$$49/mo/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border-2 border-purple-500">
              <h3 className="font-semibold mb-2">Pro</h3>
              <p className="text-2xl font-bold mb-2">$$199/mo/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Enterprise</h3>
              <p className="text-2xl font-bold mb-2">$$699/mo/month</p>
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
