import JsonLd from '@/components/JsonLd';
import Link from 'next/link';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata = {
  title: "Team Goal & OKR Tracking Platform - Zion Tech Group",
  description: "Align your team with transparent goal tracking, OKR management, and progress dashboards. Includes 1:1 meeting agendas, weekly check-ins, and performance analytics. Integrates with Slack, Teams, and Jira.",
  alternates: {
    canonical: `https://ziontechgroup.com/services/team-goal-tracking-okr`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
    <JsonLd data={'@context': 'https://schema.org', '@type': 'Service', 'name': 'Team Goal & OKR Tracking Platform', 'description': 'Align your team with transparent goal tracking, OKR management, and progress dashboards. Includes 1:1 meeting agendas, weekly check-ins, and performance analytics. Integrates with Slack, Teams, and Jira.', 'serviceType': 'micro-saas', 'provider': {'@type': 'Organization', 'name': 'Zion Tech Group', 'url': 'https://ziontechgroup.com', 'contactPoint': {'@type': 'ContactPoint', 'email': 'kleber@ziontechgroup.com', 'telephone': '+1 302 464 0950', 'contactType': 'sales'}}, 'serviceArea': {'@type': 'Place', 'name': 'Enterprise'}, 'hasOfferCatalog': {'@type': 'OfferCatalog', 'name': 'Team Goal & OKR Tracking Platform Pricing Plans', 'itemListElement': [{'@type': 'Offer', 'name': 'Basic', 'price': '0', 'priceCurrency': 'USD'}, {'@type': 'Offer', 'name': 'Pro', 'price': '0', 'priceCurrency': 'USD'}, {'@type': 'Offer', 'name': 'Enterprise', 'price': '79', 'priceCurrency': 'USD'}]}} />
    <JsonLd data={'@context': 'https://schema.org', '@type': 'FAQPage', 'mainEntity': [{'@type': 'Question', 'name': 'OKR management', 'acceptedAnswer': {'@type': 'Answer', 'text': 'OKR management'}}, {'@type': 'Question', 'name': 'Progress dashboards', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Progress dashboards'}}, {'@type': 'Question', 'name': '1:1 meeting agendas', 'acceptedAnswer': {'@type': 'Answer', 'text': '1:1 meeting agendas'}}, {'@type': 'Question', 'name': 'What business impact can I expect?', 'acceptedAnswer': {'@type': 'Answer', 'text': '35% improvement in goal achievement; Increased team alignment; Data-driven performance reviews'}}, {'@type': 'Question', 'name': 'How do I get started with this service?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Contact our team at hello@ziontechgroup.com or book a free consultation at https://calendly.com/kleber-ziontechgroup/consultation to get started.'}}]} />
      <div className="max-w-4xl mx-auto">
        <BreadcrumbSchema path={`/services/team-goal-tracking-okr`} title="Team Goal & OKR Tracking Platform" />
        <h1 className="text-4xl font-bold mb-6">🎯 Team Goal & OKR Tracking Platform</h1>
        <p className="text-lg text-gray-300 mb-8">Align your team with transparent goal tracking, OKR management, and progress dashboards. Includes 1:1 meeting agendas, weekly check-ins, and performance analytics. Integrates with Slack, Teams, and Jira.</p>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>OKR management</li>
            <li>Progress dashboards</li>
            <li>1:1 meeting agendas</li>
            <li>Weekly check-ins</li>
            <li>Performance analytics</li>
            <li>Slack/Teams/Jira integration</li>
            <li>Custom OKR templates</li>
            <li>Executive reporting</li>
          </ul>
        </div>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>35% improvement in goal achievement</li>
            <li>Increased team alignment</li>
            <li>Data-driven performance reviews</li>
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
              <p className="text-2xl font-bold mb-2">$79/month</p>
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
