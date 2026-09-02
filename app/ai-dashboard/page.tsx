import { Metadata } from 'next'
import Link from 'next/link'

export const metadata = {
  title: 'AI Dashboard | Zion Tech Group',
  description: 'Unified AI operations dashboard for monitoring, analytics, and workflow orchestration across your AI services.',
}

export default function AIDashboardPage() {
  return (
    <article className="max-w-4xl mx-auto px-6 py-16 leading-relaxed">
      <h1 className="text-4xl font-bold mb-6">AI Dashboard</h1>

      <p className="text-lg mb-8">
        A unified view of your AI operations: performance, costs, incidents, and workflow health in one place.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Capabilities</h2>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>Service health and latency metrics across AI integrations</li>
        <li>Cost usage and optimization recommendations</li>
        <li>Incident and reliability scorecards</li>
        <li>Workflow run status and failure diagnostics</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Next steps</h2>
      <p className="mb-4">
        Want a tailored AI dashboard for your stack? Contact Zion Tech Group or try our free tools on ziontechgroup.com.
      </p>

      <div className="flex flex-wrap gap-4">
        <Link href="/services" className="underline text-blue-600">Explore services</Link>
        <Link href="/tools" className="underline text-blue-600">Open free tools</Link>
        <Link href="https://ziontechgroup.com" className="underline text-blue-600" target="_blank" rel="noreferrer">ziontechgroup.com</Link>
        <Link href="https://calendly.com/kleber-ziontechgroup" className="underline text-blue-600" target="_blank" rel="noreferrer">Schedule a demo</Link>
      </div>
    </article>
  )
}
