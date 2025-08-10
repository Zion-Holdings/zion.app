import Link from 'next/link';
import AnimatedBackground from '../components/ui/AnimatedBackground';
import FuturisticCard from '../components/ui/FuturisticCard';

export default function HomePage() {
  return (
    <div className="relative">
      <AnimatedBackground />
      <section className="relative py-20 sm:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
              Build faster with AI talent and autonomous cloud automations
            </h1>
            <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
              Zion connects you to vetted AI experts, while our always-on automations continuously gather market insights and keep your content fresh.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/talent"><a className="px-5 py-3 rounded-lg bg-indigo-600 text-white hover:bg-indigo-500">Browse Talent</a></Link>
              <Link href="/automation"><a className="px-5 py-3 rounded-lg border border-indigo-600 text-indigo-600 hover:bg-indigo-50 dark:hover:bg-indigo-950">Automation Hub</a></Link>
              <Link href="/favorites"><a className="px-5 py-3 rounded-lg border border-gray-300 dark:border-gray-700">Your Favorites</a></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="relative pb-16">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
          <FuturisticCard
            title="Vetted AI Talent"
            description="LLM engineers, data scientists, and platform experts with proven track records."
            action={<Link href="/talent"><a className="text-indigo-600 hover:underline">Explore Profiles</a></Link>}
          />
          <FuturisticCard
            title="Always‑On Intelligence"
            description="Autonomous agents monitor public signals and update market insights for your team."
            action={<Link href="/automation/insights"><a className="text-indigo-600 hover:underline">View Insights</a></Link>}
          />
          <FuturisticCard
            title="Frictionless Hiring"
            description="Request to hire in one step. Our operator workflow notifies admins and talent instantly."
            action={<Link href="/talent/ava-chen?hire=1"><a className="text-indigo-600 hover:underline">Start a Request</a></Link>}
          />
        </div>
      </section>

      <section className="relative pb-24">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="rounded-2xl border border-white/10 bg-white/60 dark:bg-white/[0.04] backdrop-blur-md p-8">
            <h2 className="text-2xl font-semibold">Capabilities</h2>
            <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
              <li className="rounded-lg border border-gray-200 dark:border-gray-800 p-3">LLM Apps & RAG Systems</li>
              <li className="rounded-lg border border-gray-200 dark:border-gray-800 p-3">Cloud & Platform Engineering</li>
              <li className="rounded-lg border border-gray-200 dark:border-gray-800 p-3">MLOps & Evaluation</li>
              <li className="rounded-lg border border-gray-200 dark:border-gray-800 p-3">Security & Compliance</li>
              <li className="rounded-lg border border-gray-200 dark:border-gray-800 p-3">Data Pipelines & Analytics</li>
              <li className="rounded-lg border border-gray-200 dark:border-gray-800 p-3">Full‑Stack Web & Observability</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/60 dark:bg-white/[0.04] backdrop-blur-md p-8">
            <h2 className="text-2xl font-semibold">Benefits</h2>
            <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
              <li className="rounded-lg border border-gray-200 dark:border-gray-800 p-3">Faster Time‑to‑Value</li>
              <li className="rounded-lg border border-gray-200 dark:border-gray-800 p-3">Vetted Senior Talent</li>
              <li className="rounded-lg border border-gray-200 dark:border-gray-800 p-3">Lower Delivery Risk</li>
              <li className="rounded-lg border border-gray-200 dark:border-gray-800 p-3">Autonomous Insights</li>
              <li className="rounded-lg border border-gray-200 dark:border-gray-800 p-3">Flexible Engagements</li>
              <li className="rounded-lg border border-gray-200 dark:border-gray-800 p-3">Transparent Pricing</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}