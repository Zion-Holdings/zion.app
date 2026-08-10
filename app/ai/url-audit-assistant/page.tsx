import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'URL Audit Assistant',
  description: 'Audit your website URLs for broken links and issues',
  alternates: { canonical: '/ai/url-audit-assistant' },};

export default function UrlAuditAssistantPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navigation />
      <main className="min-h-screen bg-slate-950 py-20">
      <div className="container-page text-center">
        <h1 className="text-4xl font-bold text-white mb-4">URL Audit Assistant</h1>
        <p className="text-slate-400">Website URL auditing tool coming soon.</p>
      </div>
    </main>
  
      <Footer />
    </div>);
}
