import { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Data Analytics Services | Zion Tech Group',
  description: 'Enterprise data analytics for insight, decision speed, and measurable outcomes.'
}
export default function Page() {
  return (
    <main className="container-page py-20">
      <h1 className="text-4xl font-bold text-white mb-4">Data Analytics Services</h1>
      <p className="text-xl text-slate-300 mb-10">Enterprise data analytics for insight, decision speed, and measurable outcomes.</p>
      <div className="text-center">
        <a className="btn-primary" href="/contact/">Contact us</a>
        <a className="btn-secondary" href="/services/">Services</a>
      </div>
    </main>
  )
}
