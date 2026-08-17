import { Metadata } from 'next'
import Link from 'next/link'
import PageTemplate from '@/components/PageTemplate';
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
      <PageTemplate
        title="Service Not Found"
        breadcrumbItems={[{ label: 'Home', href: '/' }, { label: 'Services', href: '/services' }]}
        layout="centered"
      >
        <p className="text-slate-400 text-center">The service you're looking for doesn't exist.</p>
        <div className="text-center mt-8">
          <Link href="/services" className="btn-primary">
            ← Back to Services
          </Link>
        </div>
      </PageTemplate>
    )
  }

  const firstTier = (pricing: Record<string, string>) => Object.values(pricing)[0] || 'Contact for Quote'

  return (
    <PageTemplate
      title={service.title}
      description={service.description}
      category={service.category}
      heroIcon={service.icon}
      actions={[
        { label: 'Contact Us', href: `mailto:${service.contactInfo.email}?subject=${service.title}`, style: 'primary' },
        { label: 'Browse Services', href: '/services', style: 'secondary' },
      ]}
      breadcrumbItems={[
        { label: 'Home', href: '/' },
        { label: 'Services', href: '/services' },
        { label: service.title, href: `/services/${service.id}` },
      ]}
    >
      {/* Features & Benefits */}
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

      {/* Pricing & Actions */}
      <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-slate-800/60">
        <span className="text-purple-300 text-sm font-medium">
          Starting at {firstTier(service.pricing)}
        </span>
        <a
          href={service.contactInfo.website}
          className="text-sm text-purple-400 hover:underline inline-flex items-center gap-1"
        >
          Visit Service Site →
        </a>
      </div>
    </PageTemplate>
  )
}