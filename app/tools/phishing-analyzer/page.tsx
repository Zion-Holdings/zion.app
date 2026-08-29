import type { Metadata } from 'next'
import StandardPage from '@/components/StandardPage'

export const metadata: Metadata = {
  title: 'Phishing Analyzer | Zion Tech Group',
  description: 'Free phishing analyzer tool from Zion Tech Group. Inspect links, headers, and risk signals instantly.',
  openGraph: {
    title: 'Phishing Analyzer | Zion Tech Group',
    description: 'Free phishing analyzer tool from Zion Tech Group. Inspect links, headers, and risk signals instantly.',
    url: 'https://ziontechgroup.com/tools/phishing-analyzer/',
    type: 'website',
  },
  alternates: { canonical: '/tools/phishing-analyzer/' },
}

export const breadcrumbItems = [
  { label: 'Home', href: '/' },
  { label: 'Tools' },
  { label: 'Phishing Analyzer' },
]

export default function Page() {
  return (
    <StandardPage
      title="Phishing Analyzer"
      subtitle="Inspect links, headers, and risk signals instantly."
      breadcrumbItems={breadcrumbItems}
      actions={[
        { label: 'Other free tools', href: '/tools/', style: 'secondary' },
        { label: 'Talk to an engineer', href: '/contact/', style: 'primary' },
      ]}
    >
      <div className="prose prose-invert max-w-none">
        <p>Use this tool to inspect URL signals, headers, and common phishing indicators. Paste or upload suspicious content to get an instant risk view.</p>
      </div>
    </StandardPage>
  )
}
