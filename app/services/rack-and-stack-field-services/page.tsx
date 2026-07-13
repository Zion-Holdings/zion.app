import { Metadata } from 'next'
import Link from 'next/link'

export const metadata = {
  title: 'Rack & Stack Field Services | Structured Cabling and Device Deployment | Zion Tech Group',
  description: 'Professional rack & stack field services, device mounting, structured cabling, documentation adherence, and on-site IT deployment for enterprise facilities.',
}

export default function RackAndStackFieldServicesPage() {
  return (
    <article className="max-w-4xl mx-auto px-6 py-16 leading-relaxed">
      <h1 className="text-4xl font-bold mb-6">Rack & Stack Field Services</h1>

      <p className="text-lg mb-8">
        Enterprise infrastructure upgrades require precise on-site execution: device mounting, inter-device cabling, clean labeling, and strict adherence to customer documentation and site procedures.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">What we deliver</h2>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>Rack & stack installation for networking, compute, and storage hardware</li>
        <li>Structured cabling between devices with tested continuity and labeling</li>
        <li>Site procedure compliance and documentation adherence</li>
        <li>Safety and access-compliance requirements including credential checks where required</li>
        <li>Post-install verification and sign-off support</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Why this matters</h2>
      <p className="mb-6">
        Poor rack layout, loose cabling, or undocumented changes create downtime during incidents. Professional rack & stack execution reduces rack complexity, improves airflow, and speeds up future maintenance.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Location note</h2>
      <p className="mb-6">
        We support field deployments including Twinsburg, OH-area requirements and can coordinate compliance documentation such as hard-copy credential presentation where specified by customer site policy.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Next steps</h2>
      <p className="mb-4">
        Zion Tech Group can scope rack & stack, cabling, and documentation-compliance support for your next hardware refresh or datacenter expansion.
      </p>

      <div className="flex flex-wrap gap-4">
        <Link href="/services" className="underline text-blue-600">Explore services</Link>
        <Link href="/tools" className="underline text-blue-600">Open free tools</Link>
        <Link href="https://ziontechgroup.com" className="underline text-blue-600" target="_blank" rel="noreferrer">ziontechgroup.com</Link>
        <Link href="https://calendly.com/kleber-ziontechgroup" className="underline text-blue-600" target="_blank" rel="noreferrer">Schedule a site-readiness call</Link>
      </div>
    </article>
  )
}
