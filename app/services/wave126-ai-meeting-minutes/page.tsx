import Link from 'next/link';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata = {
  title: "AI Meeting Minutes Generator - Zion Tech Group",
  description: "Transform every meeting into structured, actionable records in real time. AI transcribes conversations, identifies decisions and action items, assigns owners, and distributes summaries — ensuring nothing falls through the cracks.",
  alternates: {
    canonical: `https://ziontechgroup.com/services/wave126-ai-meeting-minutes`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <BreadcrumbSchema path={`/services/wave126-ai-meeting-minutes`} title="AI Meeting Minutes Generator" />
        <h1 className="text-4xl font-bold mb-6">🎙️ AI Meeting Minutes Generator</h1>
        <p className="text-lg text-gray-300 mb-8">Transform every meeting into structured, actionable records in real time. AI transcribes conversations, identifies decisions and action items, assigns owners, and distributes summaries — ensuring nothing falls through the cracks.</p>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Real-time transcription with speaker diarization</li>
            <li>Action item extraction with owner assignment</li>
            <li>Decision & key takeaway summarization</li>
            <li>Multi-language support (40+ languages)</li>
            <li>Calendar & project management integration</li>
            <li>Searchable meeting archive with semantic search</li>
            <li>Customizable output templates (Slack, email, Notion)</li>
          </ul>
        </div>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Never take manual notes again</li>
            <li>100% capture of decisions and commitments</li>
            <li>Instant accountability through action item tracking</li>
            <li>Searchable institutional memory across all meetings</li>
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
              <p className="text-2xl font-bold mb-2">$297/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Enterprise</h3>
              <p className="text-2xl font-bold mb-2">$697/month</p>
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
