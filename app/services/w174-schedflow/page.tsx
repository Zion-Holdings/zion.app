import Link from 'next/link';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata = {
  title: "SchedFlow — Appointment & Queue Mgmt - Zion Tech Group",
  description: "Appointment scheduling and virtual queue management for healthcare, salons, government offices. Online booking, SMS reminders, walk-in queuing, and no-show reduction.",
  alternates: {
    canonical: `https://ziontechgroup.com/services/w174-schedflow`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <BreadcrumbSchema path={`/services/w174-schedflow`} title="SchedFlow — Appointment & Queue Mgmt" />
        <h1 className="text-4xl font-bold mb-6">🗓️ SchedFlow — Appointment & Queue Mgmt</h1>
        <p className="text-lg text-gray-300 mb-8">Appointment scheduling and virtual queue management for healthcare, salons, government offices. Online booking, SMS reminders, walk-in queuing, and no-show reduction.</p>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Online appointment booking with calendar sync</li>
            <li>Virtual walk-in queue management</li>
            <li>SMS/email reminders and confirmations</li>
            <li>No-show prediction and overbooking</li>
            <li>Multi-provider and location support</li>
            <li>Patient/customer self-service portal</li>
            <li>Integration with Google Calendar, EHR systems</li>
          </ul>
        </div>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Reduce no-shows by 40% with reminders</li>
            <li>Virtual queues eliminate physical waiting</li>
            <li>Online booking 24/7 availability</li>
            <li>Overbooking optimization maximizes capacity</li>
          </ul>
        </div>

        <div className="border border-purple-500 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Basic</h3>
              <p className="text-2xl font-bold mb-2">$$25/mo/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border-2 border-purple-500">
              <h3 className="font-semibold mb-2">Pro</h3>
              <p className="text-2xl font-bold mb-2">$$75/mo/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Enterprise</h3>
              <p className="text-2xl font-bold mb-2">$$199/mo/month</p>
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
