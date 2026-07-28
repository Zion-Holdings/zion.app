import { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'AI for Retail | Zion Tech Group',
  description: 'Retail AI for demand, personalization, inventory, operations, and customer experience.'
}
export default function Page() {
  return (
    <main className="container-page py-20">
      <h1 className="text-4xl font-bold text-white mb-4">AI for Retail</h1>
      <p className="text-xl text-slate-300 mb-10">Retail AI for demand, personalization, inventory, operations, and customer experience.</p>
      <div className="text-center">
        <a className="btn-primary" href="/contact/">Contact us</a>
        <a className="btn-secondary" href="/services/">Services</a>
      </div>
    </main>
  )
}
