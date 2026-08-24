import JsonLd from '@/components/JsonLd';
import Link from 'next/link';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata = {
  title: "Mobile Application Security - Zion Tech Group",
  description: "Mobile app security testing and protection: SAST, DAST, code obfuscation, runtime protection, and app store compliance for iOS and Android.",
  alternates: {
    canonical: `https://ziontechgroup.com/services/w176-mobile-security`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
    <JsonLd data={{'@context': 'https://schema.org', '@type': 'Service', 'name': 'Mobile Application Security', 'description': 'Mobile app security testing and protection: SAST, DAST, code obfuscation, runtime protection, and app store compliance for iOS and Android.', 'serviceType': 'security', 'provider': {'@type': 'Organization', 'name': 'Zion Tech Group', 'url': 'https://ziontechgroup.com', 'contactPoint': {'@type': 'ContactPoint', 'email': 'kleber@ziontechgroup.com', 'telephone': '+1 302 464 0950', 'contactType': 'sales'}}, 'serviceArea': {'@type': 'Place', 'name': 'Mobile Security'}, 'hasOfferCatalog': {'@type': 'OfferCatalog', 'name': 'Mobile Application Security Pricing Plans', 'itemListElement': [{'@type': 'Offer', 'name': 'Basic', 'price': '$499/mo', 'priceCurrency': 'USD'}, {'@type': 'Offer', 'name': 'Pro', 'price': '$1,499/mo', 'priceCurrency': 'USD'}, {'@type': 'Offer', 'name': 'Enterprise', 'price': '$4,999/mo', 'priceCurrency': 'USD'}]}} }/>
    <JsonLd data={{'@context': 'https://schema.org', '@type': 'FAQPage', 'mainEntity': [{'@type': 'Question', 'name': 'Mobile SAST (iOS Swift, Android Kotlin/Java)', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Mobile SAST (iOS Swift, Android Kotlin/Java)'}}, {'@type': 'Question', 'name': 'Mobile DAST with device farm testing', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Mobile DAST with device farm testing'}}, {'@type': 'Question', 'name': 'Code obfuscation and anti-tampering', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Code obfuscation and anti-tampering'}}, {'@type': 'Question', 'name': 'What business impact can I expect?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Find mobile vulnerabilities before release; Runtime protection defends in production; Anti-tampering prevents reverse engineering'}}, {'@type': 'Question', 'name': 'How do I get started with this service?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Contact our team at hello@ziontechgroup.com or book a free consultation at https://calendly.com/kleber-ziontechgroup/consultation to get started.'}}]} }/>
      <div className="max-w-4xl mx-auto">
        <BreadcrumbSchema path={`/services/w176-mobile-security`} title="Mobile Application Security" />
        <h1 className="text-4xl font-bold mb-6">📱 Mobile Application Security</h1>
        <p className="text-lg text-gray-300 mb-8">Mobile app security testing and protection: SAST, DAST, code obfuscation, runtime protection, and app store compliance for iOS and Android.</p>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Mobile SAST (iOS Swift, Android Kotlin/Java)</li>
            <li>Mobile DAST with device farm testing</li>
            <li>Code obfuscation and anti-tampering</li>
            <li>Runtime protection (RASP)</li>
            <li>API security testing for mobile backends</li>
            <li>App store compliance review</li>
            <li>Integration with Nowsecure, Appdome, Guardsquare</li>
          </ul>
        </div>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Find mobile vulnerabilities before release</li>
            <li>Runtime protection defends in production</li>
            <li>Anti-tampering prevents reverse engineering</li>
            <li>App store compliance prevents rejection</li>
          </ul>
        </div>

        <div className="border border-purple-500 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Basic</h3>
              <p className="text-2xl font-bold mb-2">$$499/mo/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border-2 border-purple-500">
              <h3 className="font-semibold mb-2">Pro</h3>
              <p className="text-2xl font-bold mb-2">$$1,499/mo/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Enterprise</h3>
              <p className="text-2xl font-bold mb-2">$$4,999/mo/month</p>
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
