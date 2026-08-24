import JsonLd from '@/components/JsonLd';
import Link from 'next/link';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata = {
  title: "Learning Management System (LMS) - Zion Tech Group",
  description: "Manage training: course creation, delivery, tracking, compliance reporting. SCORM and xAPI compliant.",
  alternates: {
    canonical: `https://ziontechgroup.com/services/w177-learning-mgmt`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
    <JsonLd data={{'@context': 'https://schema.org', '@type': 'Service', 'name': 'Learning Management System (LMS)', 'description': 'Manage training: course creation, delivery, tracking, compliance reporting. SCORM and xAPI compliant.', 'serviceType': 'automation', 'provider': {'@type': 'Organization', 'name': 'Zion Tech Group', 'url': 'https://ziontechgroup.com', 'contactPoint': {'@type': 'ContactPoint', 'email': 'kleber@ziontechgroup.com', 'telephone': '+1 302 464 0950', 'contactType': 'sales'}}, 'serviceArea': {'@type': 'Place', 'name': 'Education'}, 'hasOfferCatalog': {'@type': 'OfferCatalog', 'name': 'Learning Management System (LMS) Pricing Plans', 'itemListElement': [{'@type': 'Offer', 'name': 'Basic', 'price': '$4/user/mo', 'priceCurrency': 'USD'}, {'@type': 'Offer', 'name': 'Pro', 'price': '$8/user/mo', 'priceCurrency': 'USD'}, {'@type': 'Offer', 'name': 'Enterprise', 'price': '$15/user/mo', 'priceCurrency': 'USD'}]}} }/>
    <JsonLd data={{'@context': 'https://schema.org', '@type': 'FAQPage', 'mainEntity': [{'@type': 'Question', 'name': 'Course creation and management', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Course creation and management'}}, {'@type': 'Question', 'name': 'SCORM and xAPI compliance', 'acceptedAnswer': {'@type': 'Answer', 'text': 'SCORM and xAPI compliance'}}, {'@type': 'Question', 'name': 'Learning paths and certifications', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Learning paths and certifications'}}, {'@type': 'Question', 'name': 'What business impact can I expect?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Course creation and delivery in one platform; SCORM/xAPI for content compatibility; Compliance tracking for regulated industries'}}, {'@type': 'Question', 'name': 'How do I get started with this service?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Contact our team at hello@ziontechgroup.com or book a free consultation at https://calendly.com/kleber-ziontechgroup/consultation to get started.'}}]} }/>
      <div className="max-w-4xl mx-auto">
        <BreadcrumbSchema path={`/services/w177-learning-mgmt`} title="Learning Management System (LMS)" />
        <h1 className="text-4xl font-bold mb-6">🎓 Learning Management System (LMS)</h1>
        <p className="text-lg text-gray-300 mb-8">Manage training: course creation, delivery, tracking, compliance reporting. SCORM and xAPI compliant.</p>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Course creation and management</li>
            <li>SCORM and xAPI compliance</li>
            <li>Learning paths and certifications</li>
            <li>Compliance training tracking</li>
            <li>Skills gap analysis</li>
            <li>Integration with Cornerstone</li>
            <li>Docebo</li>
            <li>TalentLMS</li>
          </ul>
        </div>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Course creation and delivery in one platform</li>
            <li>SCORM/xAPI for content compatibility</li>
            <li>Compliance tracking for regulated industries</li>
            <li>Skills gap analysis for development</li>
          </ul>
        </div>

        <div className="border border-purple-500 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Basic</h3>
              <p className="text-2xl font-bold mb-2">$$4/user/mo/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border-2 border-purple-500">
              <h3 className="font-semibold mb-2">Pro</h3>
              <p className="text-2xl font-bold mb-2">$$8/user/mo/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Enterprise</h3>
              <p className="text-2xl font-bold mb-2">$$15/user/mo/month</p>
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
