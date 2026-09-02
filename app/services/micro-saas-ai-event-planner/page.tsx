import Link from 'next/link';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata = {
  title: "AI Event Planning & Management Platform - Zion Tech Group",
  description: "Plan and manage events with AI assistance. From venue selection to attendee engagement, automate logistics, budgeting, and marketing for conferences, webinars, and meetups.",
  alternates: {
    canonical: `https://ziontechgroup.com/services/micro-saas-ai-event-planner`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <BreadcrumbSchema path={`/services/micro-saas-ai-event-planner`} title="AI Event Planning & Management Platform" />
        <h1 className="text-4xl font-bold mb-6">🎉 AI Event Planning & Management Platform</h1>
        <p className="text-lg text-gray-300 mb-8">Plan and manage events with AI assistance. From venue selection to attendee engagement, automate logistics, budgeting, and marketing for conferences, webinars, and meetups.</p>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>AI venue recommendation based on budget and requirements</li>
            <li>Automated budget tracking and vendor payments</li>
            <li>Event marketing with AI-generated content</li>
            <li>Registration and ticketing with dynamic pricing</li>
            <li>Attendee matchmaking and networking suggestions</li>
            <li>Live polling, Q&A, and engagement tools</li>
            <li>Post-event analytics and ROI reporting</li>
            <li>Integration with Zoom, Hopin, Eventbrite</li>
          </ul>
        </div>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Plan events 5x faster with AI assistance</li>
            <li>Increase attendance with smart marketing</li>
            <li>Reduce event costs by 30% with vendor optimization</li>
            <li>Measure event ROI with comprehensive analytics</li>
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
