import { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'IT Managed Services | Zion Tech Group',
  description: '24/7 managed IT with SLA guarantees and AI-augmented operations.'
}
export default function Page() {
  return (
    <main className="container-page py-20">
      <h1 className="text-4xl font-bold text-white mb-4">IT Managed Services</h1>
      <p className="text-xl text-slate-300 mb-10">24/7 managed IT with SLA guarantees and AI-augmented operations.</p>
      <div className="text-center">
        <a className="btn-primary" href="/contact/">Contact us</a>
        <a className="btn-secondary" href="/services/">Services</a>
      </div>
    </main>
  )
}
