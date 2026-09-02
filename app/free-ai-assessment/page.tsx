import { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Free AI Assessment | Zion Tech Group',
  description: 'Free AI readiness assessment with next steps and prioritized use cases.'
}
export default function Page() {
  return (
    <main className="container-page py-20">
      <h1 className="text-4xl font-bold text-white mb-4">Free AI Assessment</h1>
      <p className="text-xl text-slate-300 mb-10">Free AI readiness assessment with next steps and prioritized use cases.</p>
      <div className="text-center">
        <a className="btn-primary" href="/contact/">Contact us</a>
        <a className="btn-secondary" href="/services/">Services</a>
      </div>
    </main>
  )
}
