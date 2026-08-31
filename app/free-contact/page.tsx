import type { Metadata } from 'next'
import StandardPage from '@/components/StandardPage'
import { JsonLd } from '@/components/JsonLd'

export const metadata: Metadata = {
  title: 'Free Consultation | Zion Tech Group',
  description: 'Request a free consultation with Zion Tech Group. Tell us about your project and we’ll propose the right AI and IT services for your budget and goals.',
  openGraph: {
    title: 'Free Consultation | Zion Tech Group',
    description: 'Request a free consultation with Zion Tech Group.',
    url: 'https://ziontechgroup.com/free-contact/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Consultation | Zion Tech Group',
    description: 'Request a free consultation with Zion Tech Group.',
  },
  alternates: { canonical: '/free-contact/' },
}

export default function FreeContactPage() {
  return (
    <>
      <StandardPage
        title="Free Consultation"
        subtitle="Tell us about your project and we’ll propose the right AI and IT services for your budget and goals."
        breadcrumbItems={[
          { label: 'Home', href: '/' },
          { label: 'Free Consultation' },
        ]}
        actions={[
          { label: 'Contact us', href: '/contact/', style: 'primary' },
          { label: 'Browse services', href: '/services/', style: 'secondary' },
        ]}
      >
        <div className="text-center py-16">
          <p className="text-slate-300 mb-6">
            +1 302 464 0950 | kleber@ziontechgroup.com | 364 E Main St STE 1008, Middletown, DE 19709
          </p>
          <a href="/contact/" className="inline-flex items-center px-8 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold text-lg">
            Free Consultation
          </a>
        </div>
      </StandardPage>
    </>
  )
}
