import JsonLd from '@/components/JsonLd';
import Link from 'next/link';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata = {
  title: "Virtual Event & Webinar Platform - Zion Tech Group",
  description: "Host engaging virtual events, webinars, and hybrid conferences with interactive features. Includes registration management, live polling, Q&A, breakout rooms, analytics dashboard, and post-event recording distribution. Supports up to 10,000 attendees.",
  alternates: {
    canonical: `https://ziontechgroup.com/services/virtual-event-platform`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
    <JsonLd data={'@context': 'https://schema.org', '@type': 'Service', 'name': 'Virtual Event & Webinar Platform', 'description': 'Host engaging virtual events, webinars, and hybrid conferences with interactive features. Includes registration management, live polling, Q&A, breakout rooms, analytics dashboard, and post-event recording distribution. Supports up to 10,000 attendees.', 'serviceType': 'micro-saas', 'provider': {'@type': 'Organization', 'name': 'Zion Tech Group', 'url': 'https://ziontechgroup.com', 'contactPoint': {'@type': 'ContactPoint', 'email': 'kleber@ziontechgroup.com', 'telephone': '+1 302 464 0950', 'contactType': 'sales'}}, 'serviceArea': {'@type': 'Place', 'name': 'Enterprise'}, 'hasOfferCatalog': {'@type': 'OfferCatalog', 'name': 'Virtual Event & Webinar Platform Pricing Plans', 'itemListElement': [{'@type': 'Offer', 'name': 'Basic', 'price': '0', 'priceCurrency': 'USD'}, {'@type': 'Offer', 'name': 'Pro', 'price': '0', 'priceCurrency': 'USD'}, {'@type': 'Offer', 'name': 'Enterprise', 'price': '499', 'priceCurrency': 'USD'}]}} />
    <JsonLd data={'@context': 'https://schema.org', '@type': 'FAQPage', 'mainEntity': [{'@type': 'Question', 'name': 'Unlimited webinar hosting', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Unlimited webinar hosting'}}, {'@type': 'Question', 'name': 'Interactive Q&A and polls', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Interactive Q&A and polls'}}, {'@type': 'Question', 'name': 'Breakout rooms', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Breakout rooms'}}, {'@type': 'Question', 'name': 'What business impact can I expect?', 'acceptedAnswer': {'@type': 'Answer', 'text': '90% cost reduction vs physical events; 10x audience reach; Automated lead capture'}}, {'@type': 'Question', 'name': 'How do I get started with this service?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Contact our team at hello@ziontechgroup.com or book a free consultation at https://calendly.com/kleber-ziontechgroup/consultation to get started.'}}]} />
      <div className="max-w-4xl mx-auto">
        <BreadcrumbSchema path={`/services/virtual-event-platform`} title="Virtual Event & Webinar Platform" />
        <h1 className="text-4xl font-bold mb-6">🎪 Virtual Event & Webinar Platform</h1>
        <p className="text-lg text-gray-300 mb-8">Host engaging virtual events, webinars, and hybrid conferences with interactive features. Includes registration management, live polling, Q&A, breakout rooms, analytics dashboard, and post-event recording distribution. Supports up to 10,000 attendees.</p>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Unlimited webinar hosting</li>
            <li>Interactive Q&A and polls</li>
            <li>Breakout rooms</li>
            <li>Registration management</li>
            <li>Analytics dashboard</li>
            <li>Recording & playback</li>
            <li>Custom branding</li>
            <li>Email reminders</li>
          </ul>
        </div>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>90% cost reduction vs physical events</li>
            <li>10x audience reach</li>
            <li>Automated lead capture</li>
          </ul>
        </div>

        <div className="border border-purple-500 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Basic</h3>
              <p className="text-2xl font-bold mb-2">$199/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border-2 border-purple-500">
              <h3 className="font-semibold mb-2">Pro</h3>
              <p className="text-2xl font-bold mb-2">$499/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Enterprise</h3>
              <p className="text-2xl font-bold mb-2">$499/month</p>
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
