import Link from 'next/link';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata = {
  title: "KanbanPro — Project Boards - Zion Tech Group",
  description: "Visual project management with Kanban boards, Gantt charts, time tracking, and automation rules. For teams that want simplicity, not complexity.",
  alternates: {
    canonical: `https://ziontechgroup.com/services/w176-kanbanpro`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <BreadcrumbSchema path={`/services/w176-kanbanpro`} title="KanbanPro — Project Boards" />
        <h1 className="text-4xl font-bold mb-6">📋 KanbanPro — Project Boards</h1>
        <p className="text-lg text-gray-300 mb-8">Visual project management with Kanban boards, Gantt charts, time tracking, and automation rules. For teams that want simplicity, not complexity.</p>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Kanban boards with custom workflows</li>
            <li>Gantt chart view for timelines</li>
            <li>Time tracking with billable rates</li>
            <li>Automation rules and triggers</li>
            <li>Dependencies and critical path</li>
            <li>Burndown and velocity charts</li>
            <li>Integration with Slack, GitHub, Figma</li>
          </ul>
        </div>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Kanban + Gantt in one tool</li>
            <li>Automation rules eliminate busywork</li>
            <li>Time tracking built in, not separate</li>
            <li>Simpler than Jira, more capable than Trello</li>
          </ul>
        </div>

        <div className="border border-purple-500 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Basic</h3>
              <p className="text-2xl font-bold mb-2">$$5/user/mo/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border-2 border-purple-500">
              <h3 className="font-semibold mb-2">Pro</h3>
              <p className="text-2xl font-bold mb-2">$$12/user/mo/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Enterprise</h3>
              <p className="text-2xl font-bold mb-2">$$25/user/mo/month</p>
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
