import Link from 'next/link'

const Card = ({ title, desc, href }: { title: string; desc: string; href: string }) => (
  <Link href={href}>
    <a className="block rounded-lg border border-gray-200/40 dark:border-gray-800/60 p-5 hover:border-indigo-500/60 hover:bg-indigo-500/5 transition">
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="text-sm opacity-80 mt-1">{desc}</p>
    </a>
  </Link>
)

export default function HomePage() {
  const repoActions = `https://github.com/${process.env.NEXT_PUBLIC_REPO || 'Zion-Holdings/zion.app'}/actions`
  return (
    <div className="space-y-10">
      <header className="text-center py-10">
        <h1 className="text-3xl font-bold tracking-tight">Zion — Autonomous Cloud Automations</h1>
        <p className="opacity-80 mt-2">Runs continuously in the cloud. No human hands. No physical machines.</p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <Card title="Lore AutoGen" desc="Genesis Bible, storyboard, prompts, voiceover, language packs, NFT sample." href="/media/lore" />
        <Card title="Rapid Sync" desc="High-frequency sitemap, sync-health, and git checks." href={repoActions} />
        <Card title="Quick Build Healer" desc="Auto-heals empty pages and app shim to keep builds green." href="/universe/genesis" />
        <Card title="Docs Indexer" desc="Continuously compiles a browsable docs/data index." href="/docs/INDEX.md" />
        <Card title="NFT Pack Generator" desc="Generates sample Genesis Key metadata on schedule." href="/nft/genesis-key-001.json" />
        <Card title="Storyboards JSON" desc="Machine-readable storyboard manifest for pipelines." href="/data/storyboards/zion-origin.json" />
        <Card title="Governance Guardian" desc="Ensures LICENSE, SECURITY, COC, CONTRIBUTING, funding are present." href="/docs/CHANGELOG.md" />
        <Card title="Changelog AutoCurator" desc="Summarizes recent commits into docs/CHANGELOG.md." href="/docs/CHANGELOG.md" />
        <Card title="L10n Builder" desc="Auto-generates localized homepages from language packs." href="/eo" />
        <Card title="OG Placeholder Generator" desc="Creates OG SVGs for docs and lore pages." href="/og" />
        <Card title="Performance Budget" desc="15-minute Next.js performance audit reports." href={repoActions} />
      </section>

      <section className="text-sm opacity-80">
        <p>All automations sync changes to the repository within minutes. Explore CI runs under Actions or open generated files directly via the links above.</p>
      </section>
    </div>
  )
}
