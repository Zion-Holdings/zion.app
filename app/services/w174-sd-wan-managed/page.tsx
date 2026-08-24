import JsonLd from '@/components/JsonLd';
import Link from 'next/link';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata = {
  title: "SD-WAN Managed Service - Zion Tech Group",
  description: "Fully managed SD-WAN with intelligent path selection, application-aware routing, and built-in security. Replace MPLS with cost-effective broadband + 5G.",
  alternates: {
    canonical: `https://ziontechgroup.com/services/w174-sd-wan-managed`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
    <JsonLd data={{'@context': 'https://schema.org', '@type': 'Service', 'name': 'SD-WAN Managed Service', 'description': 'Fully managed SD-WAN with intelligent path selection, application-aware routing, and built-in security. Replace MPLS with cost-effective broadband + 5G.', 'serviceType': 'it', 'provider': {'@type': 'Organization', 'name': 'Zion Tech Group', 'url': 'https://ziontechgroup.com', 'contactPoint': {'@type': 'ContactPoint', 'email': 'kleber@ziontechgroup.com', 'telephone': '+1 302 464 0950', 'contactType': 'sales'}}, 'serviceArea': {'@type': 'Place', 'name': 'Networking'}, 'hasOfferCatalog': {'@type': 'OfferCatalog', 'name': 'SD-WAN Managed Service Pricing Plans', 'itemListElement': [{'@type': 'Offer', 'name': 'Basic', 'price': '$199/site/mo', 'priceCurrency': 'USD'}, {'@type': 'Offer', 'name': 'Pro', 'price': '$399/site/mo', 'priceCurrency': 'USD'}, {'@type': 'Offer', 'name': 'Enterprise', 'price': 'Custom', 'priceCurrency': 'USD'}]}} }/>
    <JsonLd data={{'@context': 'https://schema.org', '@type': 'FAQPage', 'mainEntity': [{'@type': 'Question', 'name': 'Application-aware routing and QoS', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Application-aware routing and QoS'}}, {'@type': 'Question', 'name': 'Multi-link (broadband, 5G, MPLS) aggregation', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Multi-link (broadband, 5G, MPLS) aggregation'}}, {'@type': 'Question', 'name': 'Built-in firewall and IDS/IPS', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Built-in firewall and IDS/IPS'}}, {'@type': 'Question', 'name': 'What business impact can I expect?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Replace expensive MPLS with broadband + 5G; Application QoS ensures critical app performance; Self-healing reduces support tickets'}}, {'@type': 'Question', 'name': 'How do I get started with this service?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Contact our team at hello@ziontechgroup.com or book a free consultation at https://calendly.com/kleber-ziontechgroup/consultation to get started.'}}]} }/>
      <div className="max-w-4xl mx-auto">
        <BreadcrumbSchema path={`/services/w174-sd-wan-managed`} title="SD-WAN Managed Service" />
        <h1 className="text-4xl font-bold mb-6">📡 SD-WAN Managed Service</h1>
        <p className="text-lg text-gray-300 mb-8">Fully managed SD-WAN with intelligent path selection, application-aware routing, and built-in security. Replace MPLS with cost-effective broadband + 5G.</p>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Application-aware routing and QoS</li>
            <li>Multi-link (broadband, 5G, MPLS) aggregation</li>
            <li>Built-in firewall and IDS/IPS</li>
            <li>Centralized policy management</li>
            <li>Auto-failover and self-healing</li>
            <li>Cloud on-ramp optimization</li>
            <li>Cisco Meraki, Fortinet, VMware Velocloud support</li>
          </ul>
        </div>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Replace expensive MPLS with broadband + 5G</li>
            <li>Application QoS ensures critical app performance</li>
            <li>Self-healing reduces support tickets</li>
            <li>Centralized management for all sites</li>
          </ul>
        </div>

        <div className="border border-purple-500 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Basic</h3>
              <p className="text-2xl font-bold mb-2">$$199/site/mo/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border-2 border-purple-500">
              <h3 className="font-semibold mb-2">Pro</h3>
              <p className="text-2xl font-bold mb-2">$$399/site/mo/month</p>
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
