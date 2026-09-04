import Link from 'next/link';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata = {
  title: "Web Application Firewall - Zion Tech Group",
  description: "Managed WAF with OWASP Top-10 rulesets, API-protection for OWASP API Top-10, bot management with human-versus-bot scoring, CDN-integrated DDoS mitigation, rate-limiting, geo-blocking, and custom rule pipeline per region.",
  alternates: {
    canonical: `https://ziontechgroup.com/services/security-web-application-firewall`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <BreadcrumbSchema path={`/services/security-web-application-firewall`} title="Web Application Firewall" />
        <h1 className="text-4xl font-bold mb-6">♿ Web Application Firewall</h1>
        <p className="text-lg text-gray-300 mb-8">Managed WAF with OWASP Top-10 rulesets, API-protection for OWASP API Top-10, bot management with human-versus-bot scoring, CDN-integrated DDoS mitigation, rate-limiting, geo-blocking, and custom rule pipeline per region.</p>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>OWASP Top-10 core ruleset plus OWASP API Top-10, auto-updated monthly</li>
            <li>Bot management with per-request human-versus-bot score and CAPTCHA escalation</li>
            <li>DDoS mitigation at CDN edge — SYN flood and HTTP flood absorbed before reaching origin</li>
            <li>Geo-block and custom-rule pipeline per region — no platform team PR cycle required</li>
          </ul>
        </div>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Reduce costs with web application firewall</li>
            <li>Improve operational efficiency</li>
            <li>Scale without complexity</li>
            <li>Enterprise-grade reliability</li>
          </ul>
        </div>

        <div className="border border-purple-500 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Basic</h3>
              <p className="text-2xl font-bold mb-2">$$199/mo/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border-2 border-purple-500">
              <h3 className="font-semibold mb-2">Pro</h3>
              <p className="text-2xl font-bold mb-2">$$599/mo/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Enterprise</h3>
              <p className="text-2xl font-bold mb-2">$$1,999/mo/month</p>
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
