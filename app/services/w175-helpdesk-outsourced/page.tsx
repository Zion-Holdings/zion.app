import Link from 'next/link';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata = {
  title: "Outsourced IT Help Desk - Zion Tech Group",
  description: "24/7 outsourced IT help desk with certified technicians: L1/L2 support, ticket management, knowledge base, and SLA guarantees. US-based or global.",
  alternates: {
    canonical: `https://ziontechgroup.com/services/w175-helpdesk-outsourced`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <BreadcrumbSchema path={`/services/w175-helpdesk-outsourced`} title="Outsourced IT Help Desk" />
        <h1 className="text-4xl font-bold mb-6">🎧 Outsourced IT Help Desk</h1>
        <p className="text-lg text-gray-300 mb-8">24/7 outsourced IT help desk with certified technicians: L1/L2 support, ticket management, knowledge base, and SLA guarantees. US-based or global.</p>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>24/7 L1 and L2 technical support</li>
            <li>Ticket management and escalation</li>
            <li>Knowledge base and self-service portal</li>
            <li>Remote desktop support</li>
            <li>Onboarding and offboarding assistance</li>
            <li>SLA guarantees with penalties</li>
            <li>Multi-channel (phone, chat, email, portal)</li>
          </ul>
        </div>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>24/7 support without hiring</li>
            <li>SLA guarantees response and resolution times</li>
            <li>Certified technicians, not generalists</li>
            <li>Scales with your organization</li>
          </ul>
        </div>

        <div className="border border-purple-500 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Basic</h3>
              <p className="text-2xl font-bold mb-2">$$15/user/mo/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border-2 border-purple-500">
              <h3 className="font-semibold mb-2">Pro</h3>
              <p className="text-2xl font-bold mb-2">$$25/user/mo/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Enterprise</h3>
              <p className="text-2xl font-bold mb-2">$$40/user/mo/month</p>
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
