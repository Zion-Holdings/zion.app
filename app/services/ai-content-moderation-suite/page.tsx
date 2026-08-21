import JsonLd from '@/components/JsonLd';
import Link from 'next/link';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata = {
  title: "AI Content Moderation Suite - Zion Tech Group",
  description: "Platform-agnostic content moderation: real-time text/image/video classification, multi-language support, custom policy rules, human-in-the-loop review queues, and automated takedown workflows for platforms, marketplaces, and social apps.",
  alternates: {
    canonical: `https://ziontechgroup.com/services/ai-content-moderation-suite`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
    <JsonLd data={'@context': 'https://schema.org', '@type': 'Service', 'name': 'AI Content Moderation Suite', 'description': 'Platform-agnostic content moderation: real-time text/image/video classification, multi-language support, custom policy rules, human-in-the-loop review queues, and automated takedown workflows for platforms, marketplaces, and social apps.', 'serviceType': 'ai', 'provider': {'@type': 'Organization', 'name': 'Zion Tech Group', 'url': 'https://ziontechgroup.com', 'contactPoint': {'@type': 'ContactPoint', 'email': 'commercial@ziontechgroup.com', 'telephone': '+1 302 464 0950', 'contactType': 'sales'}}, 'serviceArea': {'@type': 'Place', 'name': 'E-Commerce'}, 'hasOfferCatalog': {'@type': 'OfferCatalog', 'name': 'AI Content Moderation Suite Pricing Plans', 'itemListElement': [{'@type': 'Offer', 'name': 'Basic', 'price': '$49/mo', 'priceCurrency': 'USD'}, {'@type': 'Offer', 'name': 'Pro', 'price': '$149/mo', 'priceCurrency': 'USD'}, {'@type': 'Offer', 'name': 'Enterprise', 'price': '$499/mo', 'priceCurrency': 'USD'}]}} />
    <JsonLd data={'@context': 'https://schema.org', '@type': 'FAQPage', 'mainEntity': [{'@type': 'Question', 'name': 'Real-time text, image & video classification', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Real-time text, image & video classification'}}, {'@type': 'Question', 'name': 'Multi-language + multi-script support', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Multi-language + multi-script support'}}, {'@type': 'Question', 'name': 'Custom policy rule engine per platform', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Custom policy rule engine per platform'}}, {'@type': 'Question', 'name': 'What business impact can I expect?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Reduce costs with ai content moderation suite; Improve operational efficiency; Scale without complexity'}}, {'@type': 'Question', 'name': 'How do I get started with this service?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Contact our team at hello@ziontechgroup.com or book a free consultation at https://calendly.com/kleber-ziontechgroup/consultation to get started.'}}]} />
      <div className="max-w-4xl mx-auto">
        <BreadcrumbSchema path={`/services/ai-content-moderation-suite`} title="AI Content Moderation Suite" />
        <h1 className="text-4xl font-bold mb-6">♿ AI Content Moderation Suite</h1>
        <p className="text-lg text-gray-300 mb-8">Platform-agnostic content moderation: real-time text/image/video classification, multi-language support, custom policy rules, human-in-the-loop review queues, and automated takedown workflows for platforms, marketplaces, and social apps.</p>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Real-time text, image & video classification</li>
            <li>Multi-language + multi-script support</li>
            <li>Custom policy rule engine per platform</li>
            <li>Human-in-the-loop review queue</li>
            <li>Audit log + takedown SFTP/webhook export</li>
          </ul>
        </div>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Reduce costs with ai content moderation suite</li>
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
              <p className="text-2xl font-bold mb-2">$$149/mo/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Enterprise</h3>
              <p className="text-2xl font-bold mb-2">$$499/mo/month</p>
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
