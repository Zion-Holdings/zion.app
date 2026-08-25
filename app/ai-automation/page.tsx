import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'AI Automation | Zion Tech Group',
  description: 'AI-powered automation for support, operations, and revenue workflows.',
  openGraph: {
    title: 'AI Automation | Zion Tech Group',
    description: 'AI-powered automation for support, operations, and revenue workflows.',
    url: 'https://ziontechgroup.com',
    type: 'website',
  },
  alternates: {
    canonical: 'https://ziontechgroup.com/ai-automation/',
  },
}
export default function Page() {
  return (
    <main className="container-page py-20">
      <h1 className="text-4xl font-bold text-white mb-4">AI Automation</h1>
      <p className="text-xl text-slate-300 mb-10">AI-powered automation for support, operations, and revenue workflows.</p>
      <div className="text-center">
        <a className="btn-primary" href="/contact/">Contact us</a>
        <a className="btn-secondary" href="/services/">Services</a>
      </div>
    </main>
  )
}
