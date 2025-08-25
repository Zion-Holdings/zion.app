import Link from 'next/link';

export default function AutomationPromoBanner() {
  return (
    <div className="mx-auto my-6 max-w-5xl rounded-xl border border-white/10 bg-white/5 p-4 text-white">
      <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <div className="text-lg font-semibold">Autonomous Cloud Automations</div>
        <div className="flex flex-wrap gap-4 text-sm">
          <Link href="/trends.json"><a className="underline hover:no-underline">AI & Tech Trends</a></Link>
          <Link href="/health.json"><a className="underline hover:no-underline">Live Site Health</a></Link>
          <Link href="/sitemap.xml"><a className="underline hover:no-underline">Sitemap</a></Link>
        </div>
      </div>
    </div>
  );
}