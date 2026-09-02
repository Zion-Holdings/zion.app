import { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'AI Agent Services | Zion Tech Group',
  description: 'Enterprise AI agent services for support, outreach, operations, and governed automation.'
}
export default function Page() {
  return (
    <main className="container-page py-20">
      <h1 className="text-4xl font-bold text-white mb-4">AI Agent Services</h1>
      <p className="text-xl text-slate-300 mb-10">Enterprise AI agent services for support, outreach, operations, and governed automation.</p>
      <div className="text-center">
        <a className="btn-primary" href="/contact/">Contact us</a>
        <a className="btn-secondary" href="/services/">Services</a>
      </div>
    </main>
  )
}
