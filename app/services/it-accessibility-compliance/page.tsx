import { } from 'next/navigation';

export const metadata = {
  title: "IT Accessibility Compliance & Digital Inclusion - Zion Tech Group",
  description: "Digital accessibility compliance for WCAG 2.1, ADA, and Section 508. Audits, remediation, and ongoing monitoring to ensure your digital properties are accessibl",
  alternates: {
    canonical: `https://ziontechgroup.com/services/it-accessibility-compliance`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">IT Accessibility Compliance &amp; Digital Inclusion</h1>
        <p className="text-lg text-gray-300 mb-8">Digital accessibility compliance for WCAG 2.1, ADA, and Section 508. Audits, remediation, and ongoing monitoring to ensure your digital properties are accessible to all.</p>
        
        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>WCAG 2.1 AA compliance audit</li>
            <li>Automated accessibility scanning</li>
            <li>Manual testing with assistive technologies</li>
            <li>Remediation guidance and implementation</li>
            <li>VPAT and accessibility statement creation</li>
          </ul>
        </div>
        
        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Achieve WCAG 2.1 AA compliance</li>
            <li>Reduce legal risk of accessibility lawsuits</li>
            <li>Reach 15% more users with accessible design</li>
            <li>Demonstrate commitment to digital inclusion</li>
          </ul>
        </div>
        
        <div className="border border-purple-500 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Basic</h3>
              <p className="text-2xl font-bold mb-2">$2,000/mo/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border-2 border-purple-500">
              <h3 className="font-semibold mb-2">Pro</h3>
              <p className="text-2xl font-bold mb-2">$5,000/mo/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Enterprise</h3>
              <p className="text-2xl font-bold mb-2">$Custom/month</p>
            </div>
          </div>
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
