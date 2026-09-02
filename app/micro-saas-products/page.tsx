import { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Micro-SaaS Products | Zion Tech Group',
  description: 'Micro-SaaS services from validation through monetization and growth.'
}
export default function Page() {
  return (
    <main className="container-page py-20">
      <h1 className="text-4xl font-bold text-white mb-4">Micro-SaaS Products</h1>
      <p className="text-xl text-slate-300 mb-10">Micro-SaaS services from validation through monetization and growth.</p>
      <div className="text-center">
        <a className="btn-primary" href="/contact/">Contact us</a>
        <a className="btn-secondary" href="/services/">Services</a>
      </div>
    </main>
  )
}
