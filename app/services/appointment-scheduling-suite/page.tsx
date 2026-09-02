import Link from 'next/link';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata = {
  title: "Appointment Scheduling & Booking Suite - Zion Tech Group",
  description: "Professional scheduling solution for service businesses. Online booking, calendar sync (Google, Outlook), automated reminders, payment collection, and waitlist management. Reduces no-shows by 80% with SMS and email reminders.",
  alternates: {
    canonical: `https://ziontechgroup.com/services/appointment-scheduling-suite`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <BreadcrumbSchema path={`/services/appointment-scheduling-suite`} title="Appointment Scheduling & Booking Suite" />
        <h1 className="text-4xl font-bold mb-6">📅 Appointment Scheduling & Booking Suite</h1>
        <p className="text-lg text-gray-300 mb-8">Professional scheduling solution for service businesses. Online booking, calendar sync (Google, Outlook), automated reminders, payment collection, and waitlist management. Reduces no-shows by 80% with SMS and email reminders.</p>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Online booking page</li>
            <li>Calendar sync</li>
            <li>Automated reminders</li>
            <li>Payment collection</li>
            <li>Waitlist management</li>
            <li>Team scheduling</li>
            <li>Custom booking forms</li>
            <li>Analytics</li>
          </ul>
        </div>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>80% reduction in no-shows</li>
            <li>50% less admin time</li>
            <li>Increased bookings by 35%</li>
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
              <p className="text-2xl font-bold mb-2">$499/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Enterprise</h3>
              <p className="text-2xl font-bold mb-2">$129/month</p>
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
