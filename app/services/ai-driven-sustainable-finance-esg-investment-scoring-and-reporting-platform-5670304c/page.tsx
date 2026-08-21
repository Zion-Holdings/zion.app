import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata = {
  title: "AI-Driven Sustainable Finance ESG Investment Scoring and Reporting Platform | Zion Tech Group - Zion Tech Group",
  description: "Enterprise sustainability analytics platform that evaluates environmental, social, and governance (ESG) performance across investment portfolios using alternative data, satellite imagery, and regulatory compliance signals. Generates auditable ESG reports, carbon footprint analytics, and sustainable ",
  alternates: {
    canonical: `https://ziontechgroup.com/services/ai-driven-sustainable-finance-esg-investment-scoring-and-reporting-platform-5670304c`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Service", "name": "Ai Driven Sustainable Finance Esg Investment Scoring And Reporting Platform 5670304C", "description": "", "serviceType": "", "provider": {"@type": "Organization", "name": "Zion Tech Group", "url": "https://ziontechgroup.com", "contactPoint": {"@type": "ContactPoint", "email": "hello@ziontechgroup.com", "telephone": "+1 (302) 464 0950", "contactType": "sales"}}, "serviceArea": null, "hasOfferCatalog": {"@type": "OfferCatalog", "name": "Ai Driven Sustainable Finance Esg Investment Scoring And Reporting Platform 5670304C Pricing Plans", "itemListElement": [{"@type": "Offer", "name": "Basic", "price": "0", "priceCurrency": "USD", "description": "Basic Ai Driven Sustainable Finance Esg Investment Scoring And Reporting Platform 5670304C plan"}, {"@type": "Offer", "name": "Pro", "price": "0", "priceCurrency": "USD", "description": "Professional Ai Driven Sustainable Finance Esg Investment Scoring And Reporting Platform 5670304C plan"}, {"@type": "Offer", "name": "Enterprise", "price": "0", "priceCurrency": "USD", "description": "Enterprise Ai Driven Sustainable Finance Esg Investment Scoring And Reporting Platform 5670304C plan"}]}, "audience": {"@type": "BusinessAudience", "audienceType": "enterprise"}}) }
    />
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={ __html: JSON.stringify({"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "How do I get started?", "acceptedAnswer": {"@type": "Answer", "text": "Contact our team at hello@ziontechgroup.com or book a consultation at https://calendly.com/kleber-ziontechgroup/consultation to get started."}}]}) }
    />
      <div className="max-w-4xl mx-auto">
        <BreadcrumbSchema path={`/services/ai-driven-sustainable-finance-esg-investment-scoring-and-reporting-platform-5670304c`} title="AI-Driven Sustainable Finance ESG Investment Scoring and Reporting Platform | Zion Tech Group" />
        <h1 className="text-4xl font-bold mb-6">🌍 AI-Driven Sustainable Finance ESG Investment Scoring and Reporting Platform | Zion Tech Group</h1>
        <p className="text-lg text-gray-300 mb-8">Enterprise sustainability analytics platform that evaluates environmental, social, and governance (ESG) performance across investment portfolios using alternative data, satellite imagery, and regulatory compliance signals. Generates auditable ESG reports, carbon footprint analytics, and sustainable </p>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>ESG performance scoring</li>
            <li>Carbon footprint analytics</li>
            <li>Alternative data integration</li>
            <li>Regulatory compliance reporting</li>
            <li>Sustainable investment recommendations</li>
          </ul>
        </div>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Meet ESG regulatory requirements</li>
            <li>Improve portfolio sustainability scores</li>
            <li>Automated compliance reporting</li>
            <li>Data-driven ESG decisions</li>
            <li>Enhanced stakeholder transparency</li>
          </ul>
        </div>

        <div className="border border-purple-500 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Basic</h3>
              <p className="text-2xl font-bold mb-2">$318/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border-2 border-purple-500">
              <h3 className="font-semibold mb-2">Pro</h3>
              <p className="text-2xl font-bold mb-2">$798/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Enterprise</h3>
              <p className="text-2xl font-bold mb-2">$2398/month</p>
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
      </div>
    </main>
  );
}
