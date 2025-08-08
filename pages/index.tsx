import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="py-10">
      <div className="rounded-2xl p-8 md:p-12 bg-gradient-to-br from-indigo-600/10 to-cyan-500/10 border border-indigo-400/20 dark:border-cyan-400/20">
        <h1 className="text-2xl md:text-3xl font-semibold">Zion AI Marketplace</h1>
        <p className="mt-2 opacity-80 max-w-2xl">Find elite AI engineers, data scientists, and cloud experts. Post a job or browse vetted talent and get matched instantly.</p>
        <div className="mt-6 flex flex-wrap gap-3 text-sm">
          <Link href="/talent"><a className="rounded-md border px-4 py-2 hover:bg-gray-50 dark:hover:bg-white/5">Browse Talent</a></Link>
          <Link href="/jobs/post"><a className="rounded-md border px-4 py-2 hover:bg-gray-50 dark:hover:bg-white/5">Post a Job</a></Link>
        </div>
      </div>
    </div>
  )
}