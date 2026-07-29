import { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'AI for Manufacturing | Zion Tech Group',
  description: 'Manufacturing AI for quality, maintenance, supply chain, and production optimization.'
}
export default function Page() {
  return (
    <main className="container-page py-20">
      <h1 className="text-4xl font-bold text-white mb-4">AI for Manufacturing</h1>
      <p className="text-xl text-slate-300 mb-10">Manufacturing AI for quality, maintenance, supply chain, and production optimization.</p>
      <div className="text-center">
        <a className="btn-primary" href="/contact/">Contact us</a>
        <a className="btn-secondary" href="/services/">Services</a>
      </div>
    </main>
  )
}
