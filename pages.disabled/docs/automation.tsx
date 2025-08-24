export default function AutomationDocs() {
  return (
    <div className="max-w-4xl mx-auto p-8 space-y-8">
      <h1 className="text-3xl font-bold">Autonomous Cloud Automations</h1>
      <p className="text-gray-600">Always-on systems that analyze, improve, and publish changes to this repository with no human input.</p>

      <section id="infinite-loop" className="space-y-2">
        <h2 className="text-2xl font-semibold">Infinite Improvement Loop</h2>
        <p className="text-sm text-gray-700">Runs an intelligent orchestrator and a curated suite of systems to evolve code, content, and UX. Schedules every 20–30 minutes in GitHub Actions.</p>
        <pre className="bg-gray-50 p-3 rounded text-xs overflow-auto">automation/infinite-improvement-runner.cjs</pre>
      </section>

      <section id="ui-evolution" className="space-y-2">
        <h2 className="text-2xl font-semibold">UI Evolution</h2>
        <p className="text-sm text-gray-700">Analyzes layout and navigation, proposes and applies improvements, and publishes a dashboard snapshot.</p>
        <pre className="bg-gray-50 p-3 rounded text-xs overflow-auto">automation/ui-evolution-orchestrator.cjs</pre>
      </section>

      <section id="health" className="space-y-2">
        <h2 className="text-2xl font-semibold">Security & Health</h2>
        <p className="text-sm text-gray-700">Self-healing routines, security scanning, link and sitemap maintenance, and site health checks.</p>
        <ul className="list-disc ml-6 text-sm text-gray-700">
          <li>automation/self-healing-orchestrator.cjs</li>
          <li>automation/security-scanner.cjs</li>
          <li>automation/site-link-orchestrator.cjs</li>
          <li>automation/site-maintenance-orchestrator.cjs</li>
        </ul>
      </section>

      <section id="content" className="space-y-2">
        <h2 className="text-2xl font-semibold">SEO & Content</h2>
        <p className="text-sm text-gray-700">Generates and optimizes content; auto-curates changelogs from commit history.</p>
        <ul className="list-disc ml-6 text-sm text-gray-700">
          <li>automation/seo-optimizer.cjs</li>
          <li>automation/auto-changelog.cjs</li>
        </ul>
      </section>

      <section id="governance" className="space-y-2">
        <h2 className="text-2xl font-semibold">Governance</h2>
        <p className="text-sm text-gray-700">On-chain DAO proposal creation and voting at /dao.</p>
      </section>
    </div>
  );
}