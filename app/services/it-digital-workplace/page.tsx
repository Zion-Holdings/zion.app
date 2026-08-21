import JsonLd from '@/components/JsonLd';
import Link from 'next/link';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata = {
  title: "IT Digital Workplace & Employee Experience - Zion Tech Group",
  description: "Design and implement the modern digital workplace. From Microsoft 365 and Google Workspace to intranet, collaboration tools, and employee experience platforms.",
  alternates: {
    canonical: `https://ziontechgroup.com/services/it-digital-workplace`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
    <JsonLd data={'@context': 'https://schema.org', '@type': 'Service', 'name': 'IT Digital Workplace & Employee Experience', 'description': 'Design and implement the modern digital workplace. From Microsoft 365 and Google Workspace to intranet, collaboration tools, and employee experience platforms.', 'serviceType': 'it', 'provider': {'@type': 'Organization', 'name': 'Zion Tech Group', 'url': 'https://ziontechgroup.com', 'contactPoint': {'@type': 'ContactPoint', 'email': 'kleber@ziontechgroup.com', 'telephone': '+1 302 464 0950', 'contactType': 'sales'}}, 'serviceArea': {'@type': 'Place', 'name': 'technology'}, 'hasOfferCatalog': {'@type': 'OfferCatalog', 'name': 'IT Digital Workplace & Employee Experience Pricing Plans', 'itemListElement': [{'@type': 'Offer', 'name': 'Basic', 'price': '$8/user/mo', 'priceCurrency': 'USD'}, {'@type': 'Offer', 'name': 'Pro', 'price': '$15/user/mo', 'priceCurrency': 'USD'}, {'@type': 'Offer', 'name': 'Enterprise', 'price': 'Custom', 'priceCurrency': 'USD'}]}} />
    <JsonLd data={'@context': 'https://schema.org', '@type': 'FAQPage', 'mainEntity': [{'@type': 'Question', 'name': 'Microsoft 365 / Google Workspace deployment', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Microsoft 365 / Google Workspace deployment'}}, {'@type': 'Question', 'name': 'Intranet and employee portal development', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Intranet and employee portal development'}}, {'@type': 'Question', 'name': 'Collaboration tool selection and rollout', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Collaboration tool selection and rollout'}}, {'@type': 'Question', 'name': 'What business impact can I expect?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Increase employee productivity by 25%; Reduce IT support tickets by 40%; Improve employee satisfaction scores'}}, {'@type': 'Question', 'name': 'How do I get started with this service?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Contact our team at hello@ziontechgroup.com or book a free consultation at https://calendly.com/kleber-ziontechgroup/consultation to get started.'}}]} />
      <div className="max-w-4xl mx-auto">
        <BreadcrumbSchema path={`/services/it-digital-workplace`} title="IT Digital Workplace & Employee Experience" />
        <h1 className="text-4xl font-bold mb-6">💼 IT Digital Workplace & Employee Experience</h1>
        <p className="text-lg text-gray-300 mb-8">Design and implement the modern digital workplace. From Microsoft 365 and Google Workspace to intranet, collaboration tools, and employee experience platforms.</p>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Microsoft 365 / Google Workspace deployment</li>
            <li>Intranet and employee portal development</li>
            <li>Collaboration tool selection and rollout</li>
            <li>Identity and access management</li>
            <li>Endpoint management and security</li>
            <li>Employee experience analytics</li>
            <li>Change management and training</li>
            <li>Integration with HR, ITSM, and business apps</li>
          </ul>
        </div>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Increase employee productivity by 25%</li>
            <li>Reduce IT support tickets by 40%</li>
            <li>Improve employee satisfaction scores</li>
            <li>Enable seamless hybrid work</li>
          </ul>
        </div>

        <div className="border border-purple-500 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Basic</h3>
              <p className="text-2xl font-bold mb-2">$$8/user/mo/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border-2 border-purple-500">
              <h3 className="font-semibold mb-2">Pro</h3>
              <p className="text-2xl font-bold mb-2">$$15/user/mo/month</p>
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
