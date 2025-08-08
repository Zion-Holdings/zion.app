export default function Automation() {
  const items = [
    {
      name: 'Cloud Automation Suite',
      schedule: 'Every 30 minutes',
      link: 'https://github.com/Zion-Holdings/zion.app/actions/workflows/cloud-automation.yml',
      details: [
        'Site maintenance orchestration',
        'Design, responsive, and variation analysis',
        'Frontend sync autonomous runs',
        'Linting and build sanity checks',
      ],
    },
    {
      name: 'AI Content & Marketplace Orchestrator',
      schedule: 'Hourly at :15',
      link: 'https://github.com/Zion-Holdings/zion.app/actions/workflows/ai-content-orchestrator.yml',
      details: [
        'Cursor memory synchronization',
        'MCP enhancements and periodic workflows',
        'UI evolution analysis and beautification',
        'Homepage promo tuning and link fixes',
      ],
    },
    {
      name: 'Auto Health Monitor & Sync',
      schedule: 'Every 10 minutes',
      link: 'https://github.com/Zion-Holdings/zion.app/actions/workflows/auto-health-and-sync.yml',
      details: [
        'Lint and type-check in CI',
        'Quick build sanity checks',
        'Automated code fixes and sync',
      ],
    },
    {
      name: 'AI Blog Generator',
      schedule: 'Every 45 minutes',
      link: 'https://github.com/Zion-Holdings/zion.app/actions/workflows/ai-blog.yml',
      details: [
        'OpenAI-generated article topics and content',
        'Outputs to pages/blog/auto',
        'Sitemap refresh and commit',
      ],
    },
  ]

  return (
    <div className="space-y-6 py-10">
      <h1 className="text-2xl font-bold">Autonomous Cloud Automations</h1>
      <p className="text-gray-600 dark:text-gray-300">These jobs run without human intervention and push changes back to the repository automatically.</p>
      <div className="space-y-4">
        {items.map((i) => (
          <a key={i.name} href={i.link} target="_blank" rel="noreferrer" className="block border rounded p-4 bg-white/60 dark:bg-gray-900/40 hover:shadow">
            <div className="flex items-center justify-between">
              <div className="font-semibold">{i.name}</div>
              <div className="text-xs text-gray-500">{i.schedule}</div>
            </div>
            <ul className="mt-2 list-disc list-inside text-sm text-gray-700 dark:text-gray-300">
              {i.details.map((d) => (<li key={d}>{d}</li>))}
            </ul>
            <div className="mt-2 text-blue-600 text-sm">View workflow →</div>
          </a>
        ))}
      </div>
    </div>
  )
}
