import { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'AI Readiness Assessment | Zion Tech Group',
  description: 'AI readiness assessment for prioritized use cases, data, risk, and roadmap planning.'
}
export default function Page() {
  return (
    <main className="container-page py-20">
      <h1 className="text-4xl font-bold text-white mb-4">AI Readiness Assessment</h1>
      <p className="text-xl text-slate-300 mb-10">AI readiness assessment for prioritized use cases, data, risk, and roadmap planning.</p>
      <div className="text-center">
        <a className="btn-primary" href="/contact/">Contact us</a>
        <a className="btn-secondary" href="/services/">Services</a>
      </div>
    </main>
  )
}
