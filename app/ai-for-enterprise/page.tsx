import { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'AI for Enterprise | Zion Tech Group',
  description: 'Enterprise AI adoption with governance, integration, and measurable business outcomes.'
}
export default function Page() {
  return (
    <main className="container-page py-20">
      <h1 className="text-4xl font-bold text-white mb-4">AI for Enterprise</h1>
      <p className="text-xl text-slate-300 mb-10">Enterprise AI adoption with governance, integration, and measurable business outcomes.</p>
      <div className="text-center">
        <a className="btn-primary" href="/contact/">Contact us</a>
        <a className="btn-secondary" href="/services/">Services</a>
      </div>
    </main>
  )
}
