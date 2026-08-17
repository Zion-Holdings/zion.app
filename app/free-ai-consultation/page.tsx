import { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Free AI Consultation | Zion Tech Group',
  description: 'Tailored AI proposal, use-case shortlist, and 90-day roadmap.'
}
export default function Page() {
  return (
    <main className="container-page py-20">
      <h1 className="text-4xl font-bold text-white mb-4">Free AI Consultation</h1>
      <p className="text-xl text-slate-300 mb-10">Tailored AI proposal, use-case shortlist, and 90-day roadmap.</p>
      <div className="text-center">
        <a className="btn-primary" href="/contact/">Contact us</a>
        <a className="btn-secondary" href="/services/">Services</a>
      </div>
    </main>
  )
}
