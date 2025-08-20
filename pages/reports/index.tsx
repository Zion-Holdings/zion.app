import Head from 'next/head'
import Link from 'next/link'

export default function ReportsIndex() {
	return (
		<>
			<Head>
				<title>Reports & Analytics — Zion Tech Group</title>
				<meta name="description" content="Explore automated reports, build health, performance insights, and weekly summaries." />
			</Head>
			<main className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
				<div className="container mx-auto px-6 py-12">
					<h1 className="text-4xl font-extrabold mb-8 bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-blue-400 bg-clip-text text-transparent">Reports & Analytics</h1>
					<p className="text-white/80 mb-10 max-w-3xl">Automatically generated insights from our autonomous systems: build status, performance metrics, netlify functions, and daily updates.</p>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						<Link href="/performance-weekly-report.md" className="group rounded-2xl border border-white/20 bg-white/10 p-6 hover:border-cyan-400/40 transition-colors">
							<h2 className="text-lg font-semibold text-cyan-300">Performance Weekly</h2>
							<p className="text-sm text-white/70 mt-1">Key metrics and budgets</p>
						</Link>
						<Link href="/ci-lint-types-build-report.md" className="group rounded-2xl border border-white/20 bg-white/10 p-6 hover:border-fuchsia-400/40 transition-colors">
							<h2 className="text-lg font-semibold text-fuchsia-300">CI Lint/Types/Build</h2>
							<p className="text-sm text-white/70 mt-1">Pipeline health summary</p>
						</Link>
						<Link href="/netlify-monitor-report.md" className="group rounded-2xl border border-white/20 bg-white/10 p-6 hover:border-green-400/40 transition-colors">
							<h2 className="text-lg font-semibold text-green-300">Netlify Monitor</h2>
							<p className="text-sm text-white/70 mt-1">Functions uptime and status</p>
						</Link>
						<Link href="/pages/reports/updates/update-2025-08-15-0406" className="group rounded-2xl border border-white/20 bg-white/10 p-6 hover:border-indigo-400/40 transition-colors">
							<h2 className="text-lg font-semibold text-indigo-300">Latest Update</h2>
							<p className="text-sm text-white/70 mt-1">Autonomous change log</p>
						</Link>
					</div>
				</div>
			</main>
		</>
	)
}

