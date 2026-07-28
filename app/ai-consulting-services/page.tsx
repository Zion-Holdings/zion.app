import { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'AI Consulting Services | Zion Tech Group',
  description: 'AI consulting services for strategy, implementation, and measurable outcomes.'
}
export default function Page() {
  return (
    <main className="container-page py-20">
      <h1 className="text-4xl font-bold text-white mb-4">AI Consulting Services</h1>
      <p className="text-xl text-slate-300 mb-10">AI consulting services for strategy, implementation, and measurable outcomes.</p>
      <div className="text-center">
        <a className="btn-primary" href="/contact/">Contact us</a>
        <a className="btn-secondary" href="/services/">Services</a>
      </div>
    </main>
  )
}
