import JsonLd from '@/components/JsonLd';
import Link from 'next/link';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata = {
  title: "AI Resume & Cover Letter Builder - Zion Tech Group",
  description: "AI-powered resume and cover letter builder with ATS optimization, industry-specific templates, and real-time scoring. Analyzes job descriptions to tailor applications automatically.",
  alternates: {
    canonical: `https://ziontechgroup.com/services/micro-saas-ai-resume-builder`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
    <JsonLd data={'@context': 'https://schema.org', '@type': 'Service', 'name': 'AI Resume & Cover Letter Builder', 'description': 'AI-powered resume and cover letter builder with ATS optimization, industry-specific templates, and real-time scoring. Analyzes job descriptions to tailor applications automatically.', 'serviceType': 'micro-saas', 'provider': {'@type': 'Organization', 'name': 'Zion Tech Group', 'url': 'https://ziontechgroup.com', 'contactPoint': {'@type': 'ContactPoint', 'email': 'kleber@ziontechgroup.com', 'telephone': '+1 302 464 0950', 'contactType': 'sales'}}, 'serviceArea': {'@type': 'Place', 'name': 'HR Tech'}, 'hasOfferCatalog': {'@type': 'OfferCatalog', 'name': 'AI Resume & Cover Letter Builder Pricing Plans', 'itemListElement': [{'@type': 'Offer', 'name': 'Basic', 'price': '$49/mo', 'priceCurrency': 'USD'}, {'@type': 'Offer', 'name': 'Pro', 'price': '$149/mo', 'priceCurrency': 'USD'}, {'@type': 'Offer', 'name': 'Enterprise', 'price': 'Custom', 'priceCurrency': 'USD'}]}} />
    <JsonLd data={'@context': 'https://schema.org', '@type': 'FAQPage', 'mainEntity': [{'@type': 'Question', 'name': 'ATS optimization scoring', 'acceptedAnswer': {'@type': 'Answer', 'text': 'ATS optimization scoring'}}, {'@type': 'Question', 'name': 'Job description analysis', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Job description analysis'}}, {'@type': 'Question', 'name': 'Industry-specific templates', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Industry-specific templates'}}, {'@type': 'Question', 'name': 'What business impact can I expect?', 'acceptedAnswer': {'@type': 'Answer', 'text': '3x more interview callbacks; ATS pass-through rate 95%+; Personalized for each application'}}, {'@type': 'Question', 'name': 'How do I get started with this service?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Contact our team at hello@ziontechgroup.com or book a free consultation at https://calendly.com/kleber-ziontechgroup/consultation to get started.'}}]} />
      <div className="max-w-4xl mx-auto">
        <BreadcrumbSchema path={`/services/micro-saas-ai-resume-builder`} title="AI Resume & Cover Letter Builder" />
        <h1 className="text-4xl font-bold mb-6">📄 AI Resume & Cover Letter Builder</h1>
        <p className="text-lg text-gray-300 mb-8">AI-powered resume and cover letter builder with ATS optimization, industry-specific templates, and real-time scoring. Analyzes job descriptions to tailor applications automatically.</p>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>ATS optimization scoring</li>
            <li>Job description analysis</li>
            <li>Industry-specific templates</li>
            <li>Cover letter generation</li>
            <li>Skills gap analysis</li>
            <li>LinkedIn profile optimization</li>
            <li>Multi-format export (PDF, Word, LaTeX)</li>
            <li>Version history</li>
          </ul>
        </div>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>3x more interview callbacks</li>
            <li>ATS pass-through rate 95%+</li>
            <li>Personalized for each application</li>
            <li>50+ industry templates</li>
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
