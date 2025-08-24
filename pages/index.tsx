import Link from 'next/link';

export default function Home() {
  return (
    <div className="space-y-12 futuristic-bg">
      <section className="text-center pt-10 pb-14 relative">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-extrabold futuristic-gradient-text">Zion AI Marketplace</h1>
          <p className="mt-3 text-sm sm:text-base text-gray-600 dark:text-gray-300">Hire elite AI talent, upskill with Zion Academy, and automate growth with autonomous cloud agents.</p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <Link href="/learn"><a className="enhanced-button enhanced-button-primary futuristic-button">Explore Courses</a></Link>
            <Link href="/dao"><a className="enhanced-button enhanced-button-secondary futuristic-button">DAO Metrics</a></Link>
          </div>
        </div>

        <div className="absolute inset-x-0 -bottom-16 flex justify-center pointer-events-none">
          <div className="w-[800px] h-[180px] bg-gradient-to-r from-indigo-500/30 via-emerald-400/20 to-indigo-500/30 blur-3xl rounded-full" />
        </div>
      </section>

      <section className="grid md:grid-cols-3 gap-4">
        <div className="p-5 futuristic-panel">
          <div className="text-lg font-semibold">Zion Academy</div>
          <div className="text-sm text-gray-300">Take courses, earn certifications, boost your match visibility.</div>
          <div className="mt-3"><Link href="/learn"><a className="text-blue-300 hover:underline text-sm">Start learning</a></Link></div>
        </div>
        <div className="p-5 futuristic-panel">
          <div className="text-lg font-semibold">Marketplace</div>
          <div className="text-sm text-gray-300">Showcase certified skills and get matched to top opportunities.</div>
          <div className="mt-3"><Link href="/talent"><a className="text-blue-300 hover:underline text-sm">Discover talent</a></Link></div>
        </div>
        <div className="p-5 futuristic-panel">
          <div className="text-lg font-semibold">Autonomous Ops</div>
          <div className="text-sm text-gray-300">Cloud-native agents keep metrics, SEO, and rankings updated automatically.</div>
          <div className="mt-3"><Link href="/reports"><a className="text-blue-300 hover:underline text-sm">View reports</a></Link></div>
        </div>
      </section>

      <section className="border rounded p-4 futuristic-panel">
        <div className="font-medium mb-2">Autonomous Cloud Automations</div>
        <ul className="list-disc pl-5 text-sm space-y-1 text-gray-200">
          <li>
            Weekly DAO Metrics Refresh — on-chain distribution, top holders, governance stats.
            <Link href="/dao"><a className="ml-2 text-blue-300 hover:underline">View DAO Panel</a></Link>
          </li>
          <li>
            Weekly Learning Insights — completions and top badges.
            <Link href="/certifications"><a className="ml-2 text-blue-300 hover:underline">See Certifications</a></Link>
          </li>
          <li>
            Daily Marketplace Rankings — top learners and certified talent.
            <Link href="/learn"><a className="ml-2 text-blue-300 hover:underline">Explore Courses</a></Link>
          </li>
          <li>
            Uptime, SEO, Links, Deps, PageSpeed — continuous visibility.
            <Link href="/reports"><a className="ml-2 text-blue-300 hover:underline">Open Reports</a></Link>
          </li>
        </ul>
        <div className="text-xs text-gray-400 mt-2">Runs automatically via scheduled functions and syncs changes back to the repo.</div>
      </section>
    </div>
  );
}