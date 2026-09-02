// app/industries/healthcare/page.tsx - SEO-Optimized Healthcare AI Solutions
import { Metadata } from 'next'
import Link from 'next/link'
import { allServices, type Service } from '@/data/servicesData'
import JsonLd from '@/components/JsonLd'

export const metadata: Metadata = {
  title: 'AI Healthcare Solutions | Telemedicine, Drug Discovery & Medical AI',
  description: 'Transform healthcare with AI-powered telemedicine, drug discovery, medical imaging, and patient care automation. HIPAA-compliant AI solutions for healthcare providers, pharmaceuticals, and life sciences organizations.',
  keywords: 'AI healthcare, medical AI, telemedicine AI, drug discovery, healthcare automation, HIPAA compliant, medical imaging',
  openGraph: {
    title: 'AI Healthcare Solutions | Zion Tech Group',
    description: 'Transform healthcare with AI-powered telemedicine, drug discovery, and patient care automation.',
  },
}

export default function HealthcareAI() {
  const healthcareServices = allServices.filter((s: Service) => 
    s.industry === 'healthcare' || 
    s.industry === 'healthcare-it' ||
    s.industry === 'life-sciences' ||
    s.category === 'ai'
  ).slice(0, 20)

  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          'name': 'AI Healthcare Solutions | Zion Tech Group',
          'description': 'Transform healthcare with AI-powered telemedicine, drug discovery, and patient care automation.',
          'url': 'https://ziontechgroup.com/industries/healthcare',
          'breadcrumb': {
            '@type': 'BreadcrumbList',
            'itemListElement': [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://ziontechgroup.com/' },
              { '@type': 'ListItem', position: 2, name: 'Industries', item: 'https://ziontechgroup.com/industries/' },
              { '@type': 'ListItem', position: 3, name: 'Healthcare', item: 'https://ziontechgroup.com/industries/healthcare' },
            ]
          }
        }}
      />

      <main className="min-h-screen bg-slate-950">
        <div className="container-page py-20">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-4">
              <span className="text-2xl">🏥</span>
              <span className="text-xs text-purple-300 font-medium">AI Healthcare Solutions</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              AI-Powered Healthcare & Life Sciences
            </h1>
            <p className="text-slate-400 text-lg max-w-3xl mx-auto mb-8">
              Transform patient care, accelerate drug discovery, and optimize healthcare operations with 
              our HIPAA-compliant AI solutions. From telemedicine to medical imaging, we build intelligent 
              systems that save lives and reduce costs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link 
                href="/configurator"
                className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold text-sm hover:from-purple-500 hover:to-pink-500 transition-all"
              >
                📋 Get Healthcare AI Assessment
              </Link>
              <Link
                href="/services/?category=ai&industry=healthcare"
                className="px-8 py-3 rounded-full bg-slate-900/60 border border-slate-700 text-slate-300 font-semibold text-sm hover:bg-slate-800 transition-all"
              >
                🔍 Browse Healthcare Services
              </Link>
            </div>
          </div>

          {/* Problem/Solution Section */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-6">
              <h3 className="text-xl font-bold text-red-400 mb-4 flex items-center gap-2">
                <span>⚠️</span> Healthcare Challenges
              </h3>
              <ul className="space-y-3 text-slate-300">
                <li>• Rising healthcare costs and billing inefficiencies</li>
                <li>• Complex regulatory compliance (HIPAA, GDPR, FDA)</li>
                <li>• Data silos preventing holistic patient views</li>
                <li>• Slow drug discovery and clinical trial processes</li>
                <li>• Difficulty scaling personalized care programs</li>
                <li>• Provider burnout from administrative tasks</li>
              </ul>
            </div>
            
            <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-6">
              <h3 className="text-xl font-bold text-emerald-400 mb-4 flex items-center gap-2">
                <span>✅ AI Solutions</span>
              </h3>
              <ul className="space-y-3 text-slate-300">
                <li>• AI-driven process automation reducing costs by 40%</li>
                <li>• HIPAA-compliant data infrastructure with end-to-end encryption</li>
                <li>• Unified patient data platform with real-time insights</li>
                <li>• Accelerated drug discovery with predictive modeling</li>
                <li>• Personalized treatment recommendations with ML</li>
                <li>• Automated medical coding and billing</li>
              </ul>
            </div>
          </div>

          {/* Services Grid */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Healthcare AI Solutions
              </span>
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {healthcareServices.map((service: Service) => (
                <Link
                  key={service.id}
                  href={`/services/${service.id}`}
                  className="group bg-slate-900/60 border border-slate-800 rounded-xl p-5 hover:border-purple-500/40 transition-all"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <span className="text-2xl">{service.icon || '🩺'}</span>
                    <h3 className="text-sm font-semibold text-white line-clamp-2 group-hover:text-purple-300">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-slate-400 text-xs line-clamp-2 mb-3">
                    {service.description}
                  </p>
                  <div className="flex items-center justify-between pt-3 border-t border-slate-700/50">
                    <span className="text-xs text-purple-300 font-medium">
                      ${String(service.pricing?.basic ?? 'Custom')}
                    </span>
                    <span className="text-xs text-slate-500">
                      {service.features?.slice(0, 2).join(', ') || 'AI Solution'}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 border border-purple-500/20 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Healthcare Practice?
            </h3>
            <p className="text-slate-300 mb-6 max-w-xl mx-auto">
              Get a free, HIPAA-compliant AI assessment tailored to your healthcare needs. 
              No technical setup required - we handle everything.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/configurator"
                className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold text-sm hover:from-purple-500 hover:to-pink-500 transition-all"
              >
                📋 Start Free Assessment
              </Link>
              <a
                href="mailto:kleber@ziontechgroup.com?subject=Healthcare%20AI%20Inquiry"
                className="px-6 py-3 rounded-full bg-slate-800/60 border border-slate-700 text-slate-300 text-sm hover:bg-slate-700 transition-all"
              >
                ✉️ Contact Healthcare AI Expert
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}