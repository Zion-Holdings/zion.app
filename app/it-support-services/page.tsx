import { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'IT Support Services | Zion Tech Group',
  description: 'Enterprise IT support with fast response, reliable coverage, and measurable resolution.'
}
export default function Page() {
  return (
    <main className="container-page py-20">
      <h1 className="text-4xl font-bold text-white mb-4">IT Support Services</h1>
      <p className="text-xl text-slate-300 mb-10">Enterprise IT support with fast response, reliable coverage, and measurable resolution.</p>
      <div className="text-center">
        <a className="btn-primary" href="/contact/">Contact us</a>
        <a className="btn-secondary" href="/services/">Services</a>
      </div>
    </main>
  )
}
