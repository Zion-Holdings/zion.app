import Link from 'next/link';
import StandardPage from '@/components/StandardPage';
import type { Metadata } from 'next';


export const metadata: Metadata = {
  title: 'Page Not Found | Zion Tech Group',
  description: 'The page you are looking for does not exist or has been moved.',
  openGraph: {
    title: 'Page Not Found | Zion Tech Group',
    description: 'The page you are looking for does not exist or has been moved.',
    url: 'https://ziontechgroup.com/404',
    type: 'website',
  },
  alternates: { canonical: '/404/' },
  twitter: {
    card: 'summary_large_image',
    title: 'Page Not Found | Zion Tech Group',
    description: 'The page you are looking for does not exist or has been moved.',
  },
};

export default function NotFoundPage() {
  return (
<>
    <StandardPage
      title="Page Not Found"
      subtitle="The page you are looking for does not exist or has been moved."
      breadcrumbItems={[
        { label: 'Home', href: '/' },
        { label: 'Page Not Found' },
      ]}
      actions={[
        { label: 'Back to Home', href: '/', style: 'primary' },
        { label: 'Contact Support', href: '/contact/', style: 'secondary' },
      ]}
    >
      <div className="text-center max-w-2xl mx-auto">
        <span className="text-8xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-6 block">
          404
        </span>
        <h1 className="text-3xl font-bold text-white mb-3">Page Not Found</h1>
        <p className="text-slate-400 mb-8 text-lg max-w-2xl mx-auto">
          The page you are looking for does not exist or has been moved. Try going back to the homepage or contact our team for assistance.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/" className="btn-primary inline-block">
            ← Back to Home
          </Link>
          <Link href="/contact/" className="btn-secondary inline-block">
            Contact Support
          </Link>
        </div>
      </div>
    
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Organization", "name": "Zion Tech Group", "url": "https://ziontechgroup.com", "description": "AI-native IT services company.", "contactPoint": { "@type": "ContactPoint", "contactType": "sales", "url": "https://ziontechgroup.com/contact/" } }) }}
      />
    </StandardPage>
  </>
  );
}