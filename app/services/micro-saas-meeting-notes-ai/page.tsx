import Link from 'next/link';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata = {
  title: "MeetingMind — AI Meeting Notes Micro-SaaS - Zion Tech Group",
  description: "AI-powered meeting notes and action item extraction. Integrates with Zoom, Google Meet, and Teams to automatically transcribe, summarize, and extract action items from meetings. Share notes with one click.",
  alternates: {
    canonical: `https://ziontechgroup.com/services/micro-saas-meeting-notes-ai`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <BreadcrumbSchema path={`/services/micro-saas-meeting-notes-ai`} title="MeetingMind — AI Meeting Notes Micro-SaaS" />
        <h1 className="text-4xl font-bold mb-6">🎙️ MeetingMind — AI Meeting Notes Micro-SaaS</h1>
        <p className="text-lg text-gray-300 mb-8">AI-powered meeting notes and action item extraction. Integrates with Zoom, Google Meet, and Teams to automatically transcribe, summarize, and extract action items from meetings. Share notes with one click.</p>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Auto-transcribe meetings (Zoom, Meet, Teams)</li>
            <li>AI summary with key decisions</li>
            <li>Action item extraction and assignment</li>
            <li>Search across all meeting notes</li>
            <li>Integration with Slack, Notion, Asana</li>
            <li>Speaker identification</li>
            <li>Custom note templates</li>
            <li>Export to PDF, Markdown, DOCX</li>
          </ul>
        </div>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Never take manual meeting notes</li>
            <li>Find any decision in seconds</li>
            <li>Automatic action item tracking</li>
            <li>10x faster meeting follow-up</li>
          </ul>
        </div>

        <div className="border border-purple-500 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Basic</h3>
              <p className="text-2xl font-bold mb-2">$$39/mo/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border-2 border-purple-500">
              <h3 className="font-semibold mb-2">Pro</h3>
              <p className="text-2xl font-bold mb-2">$$119/mo/month</p>
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
