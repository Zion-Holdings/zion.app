import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Intelligent Document Processing | Zion Tech Group",
  description: "Discover how our Intelligent Document Processing solution delivers measurable outcomes with faster deployment and lower operational risk.",
  alternates: {
    canonical: `https://ziontechgroup.com/solutions/intelligent-document-processing`,
  },
};

export default function SolutionPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Intelligent Document Processing</h1>
        <p className="text-lg text-gray-300 mb-8">
          A focused solution for teams that need reliable outcomes, faster time-to-value,
          and clear accountability across delivery, operations, and executive teams.
        </p>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">What you get</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>Implementation playbook with milestone tracking</li>
            <li>Integration support for existing data and tooling</li>
            <li>Operational runbooks and escalation paths</li>
            <li>Quarterly optimization reviews with metrics</li>
          </ul>
        </div>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Typical outcomes</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>Faster deployment cycles with reduced rework</li>
            <li>Lower operational cost per transaction or user</li>
            <li>Higher trust from stakeholders through measurable results</li>
            <li>Scalable architecture ready for future AI upgrades</li>
          </ul>
        </div>

        <div className="text-center">
          <a
            href="https://calendly.com/kleber-ziontechgroup/consultation"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-colors"
          >
            Discuss your requirements
          </a>
        </div>
      </div>
    </main>
  );
}
