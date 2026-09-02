import Link from 'next/link';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata = {
  title: "WikiBase — Internal Knowledge Wiki - Zion Tech Group",
  description: "Modern internal wiki with AI-powered search, auto-documentation, and team collaboration. Replace Confluence with a faster, smarter knowledge base.",
  alternates: {
    canonical: `https://ziontechgroup.com/services/micro-saas-internal-wiki`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <BreadcrumbSchema path={`/services/micro-saas-internal-wiki`} title="WikiBase — Internal Knowledge Wiki" />
        <h1 className="text-4xl font-bold mb-6">📚 WikiBase — Internal Knowledge Wiki</h1>
        <p className="text-lg text-gray-300 mb-8">Modern internal wiki with AI-powered search, auto-documentation, and team collaboration. Replace Confluence with a faster, smarter knowledge base.</p>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>AI-powered search and answers</li>
            <li>Auto-documentation from code</li>
            <li>Real-time collaboration</li>
            <li>Version history and rollback</li>
            <li>Integration with Slack, GitHub, Jira</li>
            <li>Custom templates and workflows</li>
            <li>Access control and permissions</li>
            <li>Analytics on knowledge gaps</li>
          </ul>
        </div>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Find answers 5x faster</li>
            <li>Reduce onboarding time</li>
            <li>Keep documentation alive</li>
            <li>Single source of truth</li>
          </ul>
        </div>

        <div className="border border-purple-500 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Basic</h3>
              <p className="text-2xl font-bold mb-2">$$19/mo/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border-2 border-purple-500">
              <h3 className="font-semibold mb-2">Pro</h3>
              <p className="text-2xl font-bold mb-2">$$59/mo/month</p>
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
