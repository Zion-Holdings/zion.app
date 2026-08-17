import Link from 'next/link';
import StandardPage from '@/components/StandardPage';

export const metadata = {
  title: 'Page Not Found | Zion Tech Group',
  description: 'The page you are looking for does not exist or has been moved.',
  alternates: { canonical: '/404' },
};

export default function NotFoundPage() {
  return (
    <StandardPage
      title="Page Not Found"
      subtitle="The page you are looking for does not exist or has been moved."
      breadcrumbItems={[
        { label: 'Home', href: '/' },
        { label: 'Page Not Found' },
      ]}
      actions={[
        { label: 'Back to Home', href: '/', variant: 'primary' },
        { label: 'Contact Support', href: '/contact/', variant: 'secondary' },
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
    </StandardPage>
  );
}
