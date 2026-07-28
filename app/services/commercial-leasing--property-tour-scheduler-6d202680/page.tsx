import { } from 'next/navigation';

export const metadata = {
  title: "Commercial Leasing & Property Tour Scheduler - Zion Tech Group",
  description: "End-to-end commercial-property tour scheduling and lead qualification: booking agent handoff, CRM opportunity creation, automated reminders, post-tour follow-up",
  alternates: {
    canonical: `https://ziontechgroup.com/services/commercial-leasing--property-tour-scheduler-6d202680`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Commercial Leasing &amp; Property Tour Scheduler</h1>
        <p className="text-lg text-gray-300 mb-8">End-to-end commercial-property tour scheduling and lead qualification: booking agent handoff, CRM opportunity creation, automated reminders, post-tour follow-up nurturing, and leasing-commission attribution dashboard.</p>
        
        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Self-service booking agent for commercial property showings</li>
            <li>Automated CRM opportunity creation and lead scoring per inquiry source</li>
            <li>Multi-channel tour reminders: SMS, email, WhatsApp, push notification</li>
            <li>Post-tour nurturing sequence: re-engagement at 48 h, 1w, 2w, 4w with incremental incentives</li>
            <li>Leasing-commission attribution: tie closed deals back to originating touchpoints</li>
          </ul>
        </div>
        
        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Reduce no-show tour rate 40% via automated multi-channel reminders</li>
            <li>Capture 80%+ of inbound inquiries automatically — no human scheduler needed</li>
            <li>Attributing commission to marketing channel closes unstructured lead-gen reporting gap</li>
          </ul>
        </div>
        
        <div className="border border-purple-500 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Basic</h3>
              <p className="text-2xl font-bold mb-2">$99/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border-2 border-purple-500">
              <h3 className="font-semibold mb-2">Pro</h3>
              <p className="text-2xl font-bold mb-2">$349/month</p>
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
