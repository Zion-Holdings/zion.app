'use client'

import { notFound } from 'next/navigation'
import Link from 'next/link'
import { allServices, type Service } from '@/data/servicesData'

// Static params for pre-rendered pages
export async function generateStaticParams(): Promise<Array<{ slug: string }>> {
  // Get top 100 most popular services for static generation
  const popularSlugs = allServices
    .filter((s: Service) => s.popular)
    .slice(0, 100)
    .map((s: Service) => ({ slug: s.id }))

  // Get services by category for static generation
  const categorySlugs = allServices
    .slice(0, 138) // Top services per category
    .map((s: Service) => ({ slug: s.id }))

  // Combine and deduplicate
  const allSlugs = [...new Set([...popularSlugs, ...categorySlugs].map(s => ({ slug: s.slug })))]

  return allSlugs
}

export default async function ServicePage({ params }: { params: { slug: string } }) {
  const slug = params.slug

  // Try to find the service in the data
  const service = allServices.find((s: Service) => s.id === slug)

  // Dynamic fallback for missing services
  if (!service) {
    return (
      <main className="min-h-screen bg-slate-950 flex items-center justify-center">
        <div className="text-center p-8 max-w-md">
          <h1 className="text-3xl font-bold text-white mb-4">Service Not Found</h1>
          <p className="text-slate-400 mb-6">
            The service you're looking for is being researched and will be available soon.
          </p>
          <Link
            href="/services"
            className="inline-block px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold hover:from-purple-500 hover:to-pink-500 transition-all"
          >
            Browse All Services
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-slate-950">
      <div className="container-page max-w-4xl mx-auto py-16">
        {/* Service Header */}
        <div className="flex items-center gap-4 mb-6">
          <span className="text-3xl">{service.icon || '🛠️'}</span>
          <div>
            <h1 className="text-3xl font-bold text-white">{service.title}</h1>
            <p className="text-slate-400">{service.category}</p>
          </div>
        </div>

        {/* Service Description */}
        <div className="bg-slate-900/50 rounded-2xl border border-slate-800 p-8 mb-8">
          <p className="text-slate-300 text-lg leading-relaxed">
            {service.description}
          </p>
        </div>

        {/* Features */}
        {service.features && service.features.length > 0 && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">Features</h2>
            <ul className="space-y-2">
              {service.features.map((feature: string, i: number) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="text-emerald-400">✓</span>
                  <span className="text-slate-300">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Pricing */}
        {service.pricing && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">Pricing</h2>
            <div className="bg-slate-900/50 rounded-xl border border-slate-800 p-6">
              <div className="flex gap-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400">${service.pricing.basic || 'Contact'}</div>
                  <div className="text-sm text-slate-400">Basic</div>
                </div>
                {service.pricing.premium && (
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-400">${service.pricing.premium}</div>
                    <div className="text-sm text-slate-400">Premium</div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* CTA - Calendly Booking */}
        <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 rounded-2xl border border-purple-500/30 p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-slate-300 mb-6">
            Book a free consultation with our AI specialists to discuss your project needs.
          </p>
          <a
            href="https://calendly.com/kleber-ziontechgroup/consultation"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold hover:from-purple-500 hover:to-pink-500 transition-all shadow-lg"
          >
            📅 Book Free Consultation
          </a>
        </div>

        {/* Back to Services */}
        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="text-slate-400 hover:text-purple-400 transition-colors"
          >
            ← Back to all services
          </Link>
        </div>
      </div>
    </main>
  )
}