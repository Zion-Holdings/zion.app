import { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Business IT Consulting | Zion Tech Group',
  description: 'Business IT consulting for digital strategy, delivery, and measurable growth.'
}
export default function Page() {
  return (
    <main className="container-page py-20">
      <h1 className="text-4xl font-bold text-white mb-4">Business IT Consulting</h1>
      <p className="text-xl text-slate-300 mb-10">Business IT consulting for digital strategy, delivery, and measurable growth.</p>
      <div className="text-center">
        <a className="btn-primary" href="/contact/">Contact us</a>
        <a className="btn-secondary" href="/services/">Services</a>
      </div>
    </main>
  )
}
