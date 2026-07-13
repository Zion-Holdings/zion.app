import { Metadata } from 'next'
import Link from 'next/link'
import { allServices } from '../../data/servicesData';
import type { Service } from '../../data/servicesData';

export async function generateStaticParams() {
  return allServices.map((service: Service) => ({ id: service.id }))
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params
  const service = allServices.find((s: Service) => s.id === id)
  if (!service) return { title: 'Service Not Found | Zion Tech Group' }
  return {
    title: `${service.title} | Zion Tech Group`,
    description: service.description,
  }
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const service = allServices.find((s: Service) => s.id === id)
  if (!service) {
    return (
      <main className="min-h-screen bg-slate-950 py-20">
        <div className="container-page">
          <h1 className="text-3xl font-bold text-white mb-4">Service Not Found</h1>
          <Link href="/services" className="text-purple-400 hover:underline">← Back to Services</Link>
        </div>
      </main>
    )
  }

  const firstTier = (pricing: Record<string, string>) => Object.values(pricing)[0] || 'Contact for Quote'

  return (
    <main className="min-h-screen bg-slate-950 py-20">
      <div className="container-page max-w-4xl">
        <Link href="/services" className="text-purple-400 hover:underline text-sm mb-6 inline-block">← Back to Services</Link>
        <div className="glass-card p-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl">{service.icon}</span>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-white">{service.title}</h1>
              <p className="text-slate-400 text-sm mt-1">{service.category} • {service.industry}</p>
            </div>
          </div>
          <p className="text-slate-300 text-base leading-relaxed mb-6">{service.description}</p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-slate-900/60 border border-slate-700/60 rounded-xl p-5">
              <h2 className="text-white font-semibold mb-3">Features</h2>
              <ul className="space-y-2">
                {service.features.map((f, i) => (
                  <li key={i} className="text-slate-300 text-sm flex items-start gap-2">
                    <span className="text-purple-400 mt-1 shrink-0">•</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-slate-900/60 border border-slate-700/60 rounded-xl p-5">
              <h2 className="text-white font-semibold mb-3">Benefits</h2>
              <ul className="space-y-2">
                {service.benefits.map((b, i) => (
                  <li key={i} className="text-slate-300 text-sm flex items-start gap-2">
                    <span className="text-purple-400 mt-1 shrink-0">•</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <span className="text-purple-300 text-sm font-medium">Starting at {firstTier(service.pricing)}</span>
            <a href={`mailto:${service.contactInfo.email}?subject=${encodeURIComponent(service.title)}`} className="btn-primary">Contact Us</a>
            <a href={service.contactInfo.website} className="text-sm text-purple-400 hover:underline inline-flex items-center gap-1">Visit Service Site →</a>
          </div>
        </div>
      </div>
    </main>
  )
}
