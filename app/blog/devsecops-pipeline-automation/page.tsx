import Link from 'next/link';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata = {
  title: `Devsecops Pipeline Automation | Zion Tech Group`,
  description: `Article about Devsecops Pipeline Automation by Zion Tech Group.`,
  alternates: {
    canonical: `https://ziontechgroup.com/blog/devsecops-pipeline-automation/`
  }
};

export default function BlogPostPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <BreadcrumbSchema path="/blog/devsecops-pipeline-automation" title="Devsecops Pipeline Automation" />
        <h1 className="text-4xl font-bold mb-6">Devsecops Pipeline Automation</h1>
        <p className="text-lg text-gray-300 mb-8">Article about Devsecops Pipeline Automation by Zion Tech Group.</p>
        <div className="mt-8">
          <Link href="/blog/" className="text-purple-300 hover:text-purple-200">← Back to Blog</Link>
        </div>
      </div>
    </main>
  );
}
