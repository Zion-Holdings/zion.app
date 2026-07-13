import { Metadata } from 'next'
import Link from 'next/link'

export const metadata = {
  title: 'AI Supply Chain Optimization | Zion Tech Group',
  description: 'AI-driven supply chain optimization: demand forecasting, inventory intelligence, route optimization, and predictive logistics for modern enterprises.',
}

export default function AISupplyChainOptimizationPage() {
  return (
    <article className="max-w-4xl mx-auto px-6 py-16 leading-relaxed">
      <h1 className="text-4xl font-bold mb-6">AI Supply Chain Optimization</h1>

      <p className="text-lg mb-8">
        Modern supply chains generate massive signal and noise. We apply AI to turn that signal into faster decisions, lower costs, and fewer disruptions.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Capabilities</h2>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>Demand forecasting and inventory optimization</li>
        <li>Supplier risk scoring and disruption detection</li>
        <li>Route and load optimization for logistics</li>
        <li>Predictive maintenance for warehouse and transport assets</li>
        <li>Procurement intelligence and cost modeling</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Business impact</h2>
      <p className="mb-6">
        Faster replenishment, lower carrying costs, fewer stockouts, and stronger supplier resilience—delivered as measurable pipeline improvements.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Next steps</h2>
      <p className="mb-4">
        If you want, Zion Tech Group can audit your current supply chain data and propose a prioritized AI roadmap.
      </p>

      <div className="flex flex-wrap gap-4">
        <Link href="/services" className="underline text-blue-600">Explore services</Link>
        <Link href="/tools" className="underline text-blue-600">Open free tools</Link>
        <Link href="https://ziontechgroup.com" className="underline text-blue-600" target="_blank" rel="noreferrer">ziontechgroup.com</Link>
        <Link href="https://calendly.com/kleber-ziontechgroup" className="underline text-blue-600" target="_blank" rel="noreferrer">Schedule a supply chain review call</Link>
      </div>
    </article>
  )
}
