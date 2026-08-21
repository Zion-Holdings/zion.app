import JsonLd from '@/components/JsonLd';
import Link from 'next/link';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata = {
  title: "AI Mental Health Support & Wellness Chatbot - Zion Tech Group",
  description: "HIPAA-compliant AI chatbot providing 24/7 mental health support, crisis detection, and therapeutic conversation.",
  alternates: {
    canonical: `https://ziontechgroup.com/services/ai-mental-health-support-chatbot`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
    <JsonLd data={'@context': 'https://schema.org', '@type': 'Service', 'name': 'AI Mental Health Support & Wellness Chatbot', 'description': 'HIPAA-compliant AI chatbot providing 24/7 mental health support, crisis detection, and therapeutic conversation.', 'serviceType': 'ai', 'provider': {'@type': 'Organization', 'name': 'Zion Tech Group', 'url': 'https://ziontechgroup.com', 'contactPoint': {'@type': 'ContactPoint', 'email': 'kleber@ziontechgroup.com', 'telephone': '+1 302 464 0950', 'contactType': 'sales'}}, 'serviceArea': {'@type': 'Place', 'name': 'healthcare'}, 'hasOfferCatalog': {'@type': 'OfferCatalog', 'name': 'AI Mental Health Support & Wellness Chatbot Pricing Plans', 'itemListElement': [{'@type': 'Offer', 'name': 'Basic', 'price': '$99/mo', 'priceCurrency': 'USD'}, {'@type': 'Offer', 'name': 'Pro', 'price': '$499/mo', 'priceCurrency': 'USD'}, {'@type': 'Offer', 'name': 'Enterprise', 'price': 'Custom', 'priceCurrency': 'USD'}]}} />
    <JsonLd data={'@context': 'https://schema.org', '@type': 'FAQPage', 'mainEntity': [{'@type': 'Question', 'name': '24/7 empathetic AI conversation', 'acceptedAnswer': {'@type': 'Answer', 'text': '24/7 empathetic AI conversation'}}, {'@type': 'Question', 'name': 'Crisis detection and escalation', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Crisis detection and escalation'}}, {'@type': 'Question', 'name': 'CBT and DBT-based therapeutic techniques', 'acceptedAnswer': {'@type': 'Answer', 'text': 'CBT and DBT-based therapeutic techniques'}}, {'@type': 'Question', 'name': 'What business impact can I expect?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Provide 24/7 mental health support; Reduce therapist workload; Early crisis detection'}}, {'@type': 'Question', 'name': 'How do I get started with this service?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Contact our team at hello@ziontechgroup.com or book a free consultation at https://calendly.com/kleber-ziontechgroup/consultation to get started.'}}]} />
      <div className="max-w-4xl mx-auto">
        <BreadcrumbSchema path={`/services/ai-mental-health-support-chatbot`} title="AI Mental Health Support & Wellness Chatbot" />
        <h1 className="text-4xl font-bold mb-6">🧠 AI Mental Health Support & Wellness Chatbot</h1>
        <p className="text-lg text-gray-300 mb-8">HIPAA-compliant AI chatbot providing 24/7 mental health support, crisis detection, and therapeutic conversation.</p>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>24/7 empathetic AI conversation</li>
            <li>Crisis detection and escalation</li>
            <li>CBT and DBT-based therapeutic techniques</li>
            <li>Mood tracking and journaling</li>
            <li>Integration with therapist workflows</li>
            <li>Multilingual support</li>
            <li>Anonymous usage option</li>
            <li>Outcome measurement and reporting</li>
          </ul>
        </div>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Provide 24/7 mental health support</li>
            <li>Reduce therapist workload</li>
            <li>Early crisis detection</li>
            <li>Improve employee wellness</li>
          </ul>
        </div>

        <div className="border border-purple-500 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Basic</h3>
              <p className="text-2xl font-bold mb-2">$$99/mo/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border-2 border-purple-500">
              <h3 className="font-semibold mb-2">Pro</h3>
              <p className="text-2xl font-bold mb-2">$$499/mo/month</p>
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
