import JsonLd from '@/components/JsonLd';
import Link from 'next/link';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata = {
  title: "AI Hiring & Recruitment Platform - Zion Tech Group",
  description: "End-to-end AI recruitment: JD writing, candidate sourcing, resume screening, interview scheduling, and offer management. Reduces time-to-hire by 65%.",
  alternates: {
    canonical: `https://ziontechgroup.com/services/w130-saas-hiring`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
    <JsonLd data={{'@context': 'https://schema.org', '@type': 'Service', 'name': 'AI Hiring & Recruitment Platform', 'description': 'End-to-end AI recruitment: JD writing, candidate sourcing, resume screening, interview scheduling, and offer management. Reduces time-to-hire by 65%.', 'serviceType': 'micro-saas', 'provider': {'@type': 'Organization', 'name': 'Zion Tech Group', 'url': 'https://ziontechgroup.com', 'contactPoint': {'@type': 'ContactPoint', 'email': 'kleber@ziontechgroup.com', 'telephone': '+1 302 464 0950', 'contactType': 'sales'}}, 'serviceArea': {'@type': 'Place', 'name': 'hr-tech'}, 'hasOfferCatalog': {'@type': 'OfferCatalog', 'name': 'AI Hiring & Recruitment Platform Pricing Plans', 'itemListElement': [{'@type': 'Offer', 'name': 'Basic', 'price': '0', 'priceCurrency': 'USD'}, {'@type': 'Offer', 'name': 'Pro', 'price': '1997', 'priceCurrency': 'USD'}, {'@type': 'Offer', 'name': 'Enterprise', 'price': '4997', 'priceCurrency': 'USD'}]}} }/>
    <JsonLd data={{'@context': 'https://schema.org', '@type': 'FAQPage', 'mainEntity': [{'@type': 'Question', 'name': 'AI job description writing', 'acceptedAnswer': {'@type': 'Answer', 'text': 'AI job description writing'}}, {'@type': 'Question', 'name': 'Multi-platform candidate sourcing', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Multi-platform candidate sourcing'}}, {'@type': 'Question', 'name': 'Resume parsing & scoring', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Resume parsing & scoring'}}, {'@type': 'Question', 'name': 'What business impact can I expect?', 'acceptedAnswer': {'@type': 'Answer', 'text': '65% faster hiring; 40% better quality of hire; Reduce recruiter workload by 70%'}}, {'@type': 'Question', 'name': 'How do I get started with this service?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Contact our team at hello@ziontechgroup.com or book a free consultation at https://calendly.com/kleber-ziontechgroup/consultation to get started.'}}]} }/>
      <div className="max-w-4xl mx-auto">
        <BreadcrumbSchema path={`/services/w130-saas-hiring`} title="AI Hiring & Recruitment Platform" />
        <h1 className="text-4xl font-bold mb-6">👥 AI Hiring & Recruitment Platform</h1>
        <p className="text-lg text-gray-300 mb-8">End-to-end AI recruitment: JD writing, candidate sourcing, resume screening, interview scheduling, and offer management. Reduces time-to-hire by 65%.</p>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>AI job description writing</li>
            <li>Multi-platform candidate sourcing</li>
            <li>Resume parsing & scoring</li>
            <li>Automated interview scheduling</li>
            <li>Video interview analysis</li>
            <li>Offer letter generation</li>
            <li>Onboarding automation</li>
            <li>DEI analytics</li>
          </ul>
        </div>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>65% faster hiring</li>
            <li>40% better quality of hire</li>
            <li>Reduce recruiter workload by 70%</li>
            <li>Improve candidate experience</li>
            <li>Bias reduction in screening</li>
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
              <p className="text-2xl font-bold mb-2">$1997/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Enterprise</h3>
              <p className="text-2xl font-bold mb-2">$4997/month</p>
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
