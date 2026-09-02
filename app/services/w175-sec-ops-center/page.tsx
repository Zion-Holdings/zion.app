import Link from 'next/link';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata = {
  title: "Security Operations Center Build - Zion Tech Group",
  description: "Design and build a SOC from scratch: technology selection, team structure, playbooks, and tiered staffing. Get a mature SOC without the learning curve.",
  alternates: {
    canonical: `https://ziontechgroup.com/services/w175-sec-ops-center`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <BreadcrumbSchema path={`/services/w175-sec-ops-center`} title="Security Operations Center Build" />
        <h1 className="text-4xl font-bold mb-6">🛡️ Security Operations Center Build</h1>
        <p className="text-lg text-gray-300 mb-8">Design and build a SOC from scratch: technology selection, team structure, playbooks, and tiered staffing. Get a mature SOC without the learning curve.</p>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>SOC technology stack selection and deployment</li>
            <li>Team structure and tiering design</li>
            <li>Playbook and runbook development</li>
            <li>Detection rule development and tuning</li>
            <li>Staffing model and shift scheduling</li>
            <li>On-call and escalation process design</li>
            <li>Maturity roadmap from Level 1 to Level 3</li>
          </ul>
        </div>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Production-ready SOC in 3 months, not 2 years</li>
            <li>Proven technology stack and team structure</li>
            <li>Playbooks ensure consistent response</li>
            <li>Maturity roadmap for continuous improvement</li>
          </ul>
        </div>

        <div className="border border-purple-500 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Basic</h3>
              <p className="text-2xl font-bold mb-2">$$49,999/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border-2 border-purple-500">
              <h3 className="font-semibold mb-2">Pro</h3>
              <p className="text-2xl font-bold mb-2">$$99,999/month</p>
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
      </div>
    </main>
  );
}
