import Link from 'next/link'

export default function Home() {
  const cards = [
    {
      title: 'Cloud Automation Suite',
      desc: 'Runs every 30 minutes: maintenance, design/responsive/variation analysis, frontend sync. Fully autonomous.',
      href: 'https://github.com/Zion-Holdings/zion.app/actions/workflows/cloud-automation.yml',
    },
    {
      title: 'AI Content Orchestrator',
      desc: 'Hourly AI workflows: MCP enhancements, daily/weekly routines, UI evolution, link crawler.',
      href: 'https://github.com/Zion-Holdings/zion.app/actions/workflows/ai-content-orchestrator.yml',
    },
    {
      title: 'Auto Health & Sync',
      desc: 'Every 10 minutes: lint/type checks, quick build checks, automated fixes and sync.',
      href: 'https://github.com/Zion-Holdings/zion.app/actions/workflows/auto-health-and-sync.yml',
    },
    {
      title: 'AI Blog Generator',
      desc: 'Every 45 minutes: generates a new technical article and updates sitemap automatically.',
      href: 'https://github.com/Zion-Holdings/zion.app/actions/workflows/ai-blog.yml',
    },
  ]

  return (
    <div className="space-y-8 py-10">
      <div>
        <h1 className="text-3xl font-bold">Zion Autonomous Cloud Automations</h1>
        <p className="text-gray-600 dark:text-gray-300 mt-2">These jobs run entirely in the cloud, require no human interaction, and push changes back to this repository automatically.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {cards.map((c) => (
          <a key={c.title} href={c.href} target="_blank" rel="noreferrer" className="border rounded-lg p-4 bg-white/60 dark:bg-gray-900/40 hover:shadow md:min-h-[160px]">
            <div className="font-semibold text-lg">{c.title}</div>
            <p className="text-sm mt-2 text-gray-700 dark:text-gray-300">{c.desc}</p>
            <div className="mt-3 text-blue-600">View workflow →</div>
          </a>
        ))}
      </div>
      <div className="mt-6">
        <Link href="/automation"><a className="inline-block px-4 py-2 border rounded">Explore automation details</a></Link>
      </div>
    </div>
  )
}
