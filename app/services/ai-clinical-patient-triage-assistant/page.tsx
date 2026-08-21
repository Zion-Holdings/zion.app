import JsonLd from '@/components/JsonLd';
import Link from 'next/link';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata = {
  title: "AI Patient Triage & Clinical Decision Support - Zion Tech Group",
  description: "AI-powered patient triage system analyzing symptoms, medical history, and vital signs to recommend urgency levels and care pathways.",
  alternates: {
    canonical: `https://ziontechgroup.com/services/ai-clinical-patient-triage-assistant`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
    <JsonLd data={'@context': 'https://schema.org', '@type': 'Service', 'name': 'AI Patient Triage & Clinical Decision Support', 'description': 'AI-powered patient triage system analyzing symptoms, medical history, and vital signs to recommend urgency levels and care pathways.', 'serviceType': 'ai', 'provider': {'@type': 'Organization', 'name': 'Zion Tech Group', 'url': 'https://ziontechgroup.com', 'contactPoint': {'@type': 'ContactPoint', 'email': 'kleber@ziontechgroup.com', 'telephone': '+1 302 464 0950', 'contactType': 'sales'}}, 'serviceArea': {'@type': 'Place', 'name': 'healthcare'}, 'hasOfferCatalog': {'@type': 'OfferCatalog', 'name': 'AI Patient Triage & Clinical Decision Support Pricing Plans', 'itemListElement': [{'@type': 'Offer', 'name': 'Basic', 'price': '$2,000/mo', 'priceCurrency': 'USD'}, {'@type': 'Offer', 'name': 'Pro', 'price': '$5,000/mo', 'priceCurrency': 'USD'}, {'@type': 'Offer', 'name': 'Enterprise', 'price': 'Custom', 'priceCurrency': 'USD'}]}} />
    <JsonLd data={'@context': 'https://schema.org', '@type': 'FAQPage', 'mainEntity': [{'@type': 'Question', 'name': 'Symptom analysis with NLP', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Symptom analysis with NLP'}}, {'@type': 'Question', 'name': 'Automated urgency classification (ESI levels)', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Automated urgency classification (ESI levels)'}}, {'@type': 'Question', 'name': 'Medical history via FHIR/HL7', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Medical history via FHIR/HL7'}}, {'@type': 'Question', 'name': 'What business impact can I expect?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Reduce triage time from 15 min to 2 min; Improve patient outcomes; Reduce ER overcrowding'}}, {'@type': 'Question', 'name': 'How do I get started with this service?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Contact our team at hello@ziontechgroup.com or book a free consultation at https://calendly.com/kleber-ziontechgroup/consultation to get started.'}}]} />
      <div className="max-w-4xl mx-auto">
        <BreadcrumbSchema path={`/services/ai-clinical-patient-triage-assistant`} title="AI Patient Triage & Clinical Decision Support" />
        <h1 className="text-4xl font-bold mb-6">🏥 AI Patient Triage & Clinical Decision Support</h1>
        <p className="text-lg text-gray-300 mb-8">AI-powered patient triage system analyzing symptoms, medical history, and vital signs to recommend urgency levels and care pathways.</p>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Symptom analysis with NLP</li>
            <li>Automated urgency classification (ESI levels)</li>
            <li>Medical history via FHIR/HL7</li>
            <li>Drug interaction checking</li>
            <li>Clinical guideline recommendations</li>
            <li>Telemedicine handoff workflows</li>
            <li>Patient communication automation</li>
            <li>HIPAA-compliant architecture</li>
          </ul>
        </div>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Reduce triage time from 15 min to 2 min</li>
            <li>Improve patient outcomes</li>
            <li>Reduce ER overcrowding</li>
            <li>Ensure consistent triage quality</li>
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
