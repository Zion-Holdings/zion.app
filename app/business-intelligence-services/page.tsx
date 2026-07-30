import { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Business Intelligence Services | Zion Tech Group',
  description: 'Enterprise BI for decision speed, KPI governance, and trusted reporting.'
}
export default function Page() {
  return (
    <main className="container-page py-20">
      <h1 className="text-4xl font-bold text-white mb-4">Business Intelligence Services</h1>
      <p className="text-xl text-slate-300 mb-10">Enterprise BI for decision speed, KPI governance, and trusted reporting.</p>
      <div className="text-center">
        <a className="btn-primary" href="/contact/">Contact us</a>
        <a className="btn-secondary" href="/services/">Services</a>
      </div>
    </main>
  )
}
