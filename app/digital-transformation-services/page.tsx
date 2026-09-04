import { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Digital Transformation Services | Zion Tech Group',
  description: 'Enterprise digital transformation from strategy through measurable outcomes.'
}
export default function Page() {
  return (
    <main className="container-page py-20">
      <h1 className="text-4xl font-bold text-white mb-4">Digital Transformation Services</h1>
      <p className="text-xl text-slate-300 mb-10">Enterprise digital transformation from strategy through measurable outcomes.</p>
      <div className="text-center">
        <a className="btn-primary" href="/contact/">Contact us</a>
        <a className="btn-secondary" href="/services/">Services</a>
      </div>
    </main>
  )
}
