import JsonLd from '@/components/JsonLd';
import Link from 'next/link';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata = {
  title: "Micro-SaaS AI Hiring Pipeline & ATS - Zion Tech Group",
  description: "Lightweight AI-powered applicant tracking system for SMBs. Smart resume parsing, candidate scoring, interview scheduling, and offer management — all in one affordable platform.",
  alternates: {
    canonical: `https://ziontechgroup.com/services/micro-saas-ai-hiring-pipeline`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
    <JsonLd data={'@context': 'https://schema.org', '@type': 'Service', 'name': 'Micro-SaaS AI Hiring Pipeline & ATS', 'description': 'Lightweight AI-powered applicant tracking system for SMBs. Smart resume parsing, candidate scoring, interview scheduling, and offer management — all in one affordable platform.', 'serviceType': 'micro-saas', 'provider': {'@type': 'Organization', 'name': 'Zion Tech Group', 'url': 'https://ziontechgroup.com', 'contactPoint': {'@type': 'ContactPoint', 'email': 'kleber@ziontechgroup.com', 'telephone': '+1 302 464 0950', 'contactType': 'sales'}}, 'serviceArea': {'@type': 'Place', 'name': 'hr-tech'}, 'hasOfferCatalog': {'@type': 'OfferCatalog', 'name': 'Micro-SaaS AI Hiring Pipeline & ATS Pricing Plans', 'itemListElement': [{'@type': 'Offer', 'name': 'Basic', 'price': '$99/mo', 'priceCurrency': 'USD'}, {'@type': 'Offer', 'name': 'Pro', 'price': '$249/mo', 'priceCurrency': 'USD'}, {'@type': 'Offer', 'name': 'Enterprise', 'price': 'Custom', 'priceCurrency': 'USD'}]}} />
    <JsonLd data={'@context': 'https://schema.org', '@type': 'FAQPage', 'mainEntity': [{'@type': 'Question', 'name': 'AI resume parsing and candidate scoring', 'acceptedAnswer': {'@type': 'Answer', 'text': 'AI resume parsing and candidate scoring'}}, {'@type': 'Question', 'name': 'Smart job description generator', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Smart job description generator'}}, {'@type': 'Question', 'name': 'Automated interview scheduling', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Automated interview scheduling'}}, {'@type': 'Question', 'name': 'What business impact can I expect?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Reduce time-to-hire by 50%; Screen 100 resumes in minutes; Eliminate scheduling back-and-forth'}}, {'@type': 'Question', 'name': 'How do I get started with this service?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Contact our team at hello@ziontechgroup.com or book a free consultation at https://calendly.com/kleber-ziontechgroup/consultation to get started.'}}]} />
      <div className="max-w-4xl mx-auto">
        <BreadcrumbSchema path={`/services/micro-saas-ai-hiring-pipeline`} title="Micro-SaaS AI Hiring Pipeline & ATS" />
        <h1 className="text-4xl font-bold mb-6">👥 Micro-SaaS AI Hiring Pipeline & ATS</h1>
        <p className="text-lg text-gray-300 mb-8">Lightweight AI-powered applicant tracking system for SMBs. Smart resume parsing, candidate scoring, interview scheduling, and offer management — all in one affordable platform.</p>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>AI resume parsing and candidate scoring</li>
            <li>Smart job description generator</li>
            <li>Automated interview scheduling</li>
            <li>Candidate communication templates</li>
            <li>Offer letter generation and e-signature</li>
            <li>Diversity and compliance reporting</li>
          </ul>
        </div>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Reduce time-to-hire by 50%</li>
            <li>Screen 100 resumes in minutes</li>
            <li>Eliminate scheduling back-and-forth</li>
            <li>Affordable for small businesses</li>
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
              <p className="text-2xl font-bold mb-2">$$249/mo/month</p>
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
